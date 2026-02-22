#!/usr/bin/env node
/**
 * ingest-alkota.js
 * ================
 * Reads Alkota troubleshooting data from knowledge-base.js
 * and inserts it into knowledge.db (SQLite FTS5) to match
 * the existing document/chunk format.
 *
 * Usage:
 *   cd C:\Users\Ross.Wearden\Downloads\p_supp
 *   node ingest-alkota.js
 *
 * What it does:
 *   1. Reads knowledge-base.js and extracts KB.alk.troubleshooting
 *   2. Creates one document per troubleshooting category (brand: "Alkota")
 *   3. Breaks cause/remedy pairs into searchable chunks
 *   4. Inserts into knowledge.db documents + chunks + chunks_fts
 *
 * Safe: checks for existing Alkota docs first, won't duplicate.
 */

const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');

// ─── CONFIG ───
const KB_FILE = path.join(__dirname, 'knowledge-base.js');
const DB_FILE = path.join(__dirname, 'knowledge.db');

// ─── STEP 1: Load knowledge-base.js ───
console.log('\n═══ ALKOTA KB INGESTION ═══\n');

if (!fs.existsSync(KB_FILE)) {
  console.error('✗ knowledge-base.js not found at:', KB_FILE);
  console.error('  Make sure it\'s in the same folder as this script.');
  process.exit(1);
}
if (!fs.existsSync(DB_FILE)) {
  console.error('✗ knowledge.db not found at:', DB_FILE);
  console.error('  Make sure it\'s in the same folder as this script.');
  process.exit(1);
}

// Parse the JS file to extract KB object
const code = fs.readFileSync(KB_FILE, 'utf8');
const fn = new Function(code + '; return KB;');
const KB = fn();

if (!KB.alk || !KB.alk.troubleshooting) {
  console.error('✗ No Alkota troubleshooting data found in knowledge-base.js');
  process.exit(1);
}

const alkTS = KB.alk.troubleshooting;
const categories = Object.keys(alkTS);
const totalCauses = categories.reduce((sum, k) => sum + alkTS[k].causes.length, 0);

console.log(`✓ Loaded knowledge-base.js`);
console.log(`  ${categories.length} troubleshooting categories`);
console.log(`  ${totalCauses} cause/remedy pairs\n`);

// ─── STEP 2: Connect to knowledge.db ───
const db = Database(DB_FILE);

// Show current state
const before = {
  docs: db.prepare('SELECT COUNT(*) as cnt FROM documents').get().cnt,
  chunks: db.prepare('SELECT COUNT(*) as cnt FROM chunks').get().cnt,
  alkota: db.prepare("SELECT COUNT(*) as cnt FROM documents WHERE brand = 'Alkota'").get().cnt
};

console.log(`Current DB state:`);
console.log(`  ${before.docs} documents, ${before.chunks} chunks`);
console.log(`  ${before.alkota} existing Alkota documents\n`);

// Check for existing Alkota docs to avoid duplicates
if (before.alkota > 0) {
  console.log('⚠  Alkota documents already exist in the database.');
  console.log('   Removing existing Alkota docs before re-ingesting...\n');
  
  // Get existing Alkota doc IDs
  const alkotaDocIds = db.prepare("SELECT id FROM documents WHERE brand = 'Alkota'").all().map(r => r.id);
  
  // Delete chunks first (FK), then docs
  const delChunks = db.prepare('DELETE FROM chunks WHERE doc_id = ?');
  const delFts = db.prepare('DELETE FROM chunks_fts WHERE rowid IN (SELECT id FROM chunks WHERE doc_id = ?)');
  const delDoc = db.prepare('DELETE FROM documents WHERE id = ?');
  
  // Actually we need to delete FTS entries by matching chunk IDs
  // FTS5 rowid = chunks.id, so delete from chunks_fts where rowid matches
  for (const docId of alkotaDocIds) {
    const chunkIds = db.prepare('SELECT id FROM chunks WHERE doc_id = ?').all(docId).map(r => r.id);
    for (const cid of chunkIds) {
      try { db.prepare('DELETE FROM chunks_fts WHERE rowid = ?').run(cid); } catch(e) {}
    }
    delChunks.run(docId);
    delDoc.run(docId);
  }
  
  console.log(`   Removed ${alkotaDocIds.length} old Alkota documents and their chunks.\n`);
}

// ─── STEP 3: Check schema to match existing format ───
// Get column info from documents table
const docCols = db.prepare("PRAGMA table_info(documents)").all().map(c => c.name);
const chunkCols = db.prepare("PRAGMA table_info(chunks)").all().map(c => c.name);
console.log(`Schema check:`);
console.log(`  documents columns: ${docCols.join(', ')}`);
console.log(`  chunks columns: ${chunkCols.join(', ')}\n`);

// ─── STEP 4: Insert Alkota documents + chunks ───
// Build INSERT statements matching actual schema:
// documents: id, filename, filepath, file_hash, file_size, page_count, title, brand, doc_type, ingested_at, metadata
// chunks: id, doc_id, page_num, section, content, chunk_type, word_count
const insertDoc = db.prepare(
  `INSERT INTO documents (filename, filepath, file_hash, file_size, page_count, title, brand, doc_type, ingested_at, metadata)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), ?)`
);
const insertChunk = db.prepare(
  `INSERT INTO chunks (doc_id, page_num, section, content, chunk_type, word_count) VALUES (?, ?, ?, ?, ?, ?)`
);
const insertFts = db.prepare(
  `INSERT INTO chunks_fts (rowid, content) VALUES (?, ?)`
);

let docsAdded = 0;
let chunksAdded = 0;

const transaction = db.transaction(() => {
  for (const [catKey, catData] of Object.entries(alkTS)) {
    const title = catData.title || catKey;
    const category = 'troubleshooting';
    
    // Insert document
    const filename = `alkota_${catKey}_troubleshooting.txt`;
    const docResult = insertDoc.run(
      filename,                              // filename
      `knowledge-base.js/${catKey}`,         // filepath
      `alkota_ts_${catKey}`,                 // file_hash (unique key)
      0,                                      // file_size
      0,                                      // page_count
      `Alkota ${title} Troubleshooting`,     // title
      'Alkota',                               // brand
      'troubleshooting',                      // doc_type
      null                                    // metadata
    );
    const docId = docResult.lastInsertRowid;
    docsAdded++;
    
    // Group causes into meaningful chunks
    // Each chunk = one cause/remedy pair (or a group of related short ones)
    const causes = catData.causes || [];
    let chunkBuffer = [];
    let bufferWords = 0;
    
    for (const item of causes) {
      const cause = (item.cause || '').trim();
      const remedy = (item.remedy || '').trim();
      if (!cause && !remedy) continue;
      
      // Build chunk text
      const chunkText = `[${title}] Problem: ${cause}\nSolution: ${remedy}`;
      const wordCount = chunkText.split(/\s+/).length;
      
      // If this single item is substantial enough, make it its own chunk
      if (wordCount >= 15) {
        const chunkResult = insertChunk.run(docId, 0, title, chunkText, 'troubleshooting', wordCount);
        insertFts.run(chunkResult.lastInsertRowid, chunkText);
        chunksAdded++;
      } else {
        // Buffer short items together
        chunkBuffer.push(chunkText);
        bufferWords += wordCount;
        
        if (bufferWords >= 40 || chunkBuffer.length >= 3) {
          const combined = chunkBuffer.join('\n\n');
          const combinedWords = combined.split(/\s+/).length;
          const chunkResult = insertChunk.run(docId, 0, title, combined, 'troubleshooting', combinedWords);
          insertFts.run(chunkResult.lastInsertRowid, combined);
          chunksAdded++;
          chunkBuffer = [];
          bufferWords = 0;
        }
      }
    }
    
    // Flush remaining buffer
    if (chunkBuffer.length > 0) {
      const combined = chunkBuffer.join('\n\n');
      const combinedWords = combined.split(/\s+/).length;
      const chunkResult = insertChunk.run(docId, 0, title, combined, 'troubleshooting', combinedWords);
      insertFts.run(chunkResult.lastInsertRowid, combined);
      chunksAdded++;
    }
    
    console.log(`  ✓ ${title}: ${causes.length} causes → document #${docId}`);
  }
});

transaction();

// ─── STEP 5: Verify ───
const after = {
  docs: db.prepare('SELECT COUNT(*) as cnt FROM documents').get().cnt,
  chunks: db.prepare('SELECT COUNT(*) as cnt FROM chunks').get().cnt,
  words: db.prepare('SELECT SUM(word_count) as cnt FROM chunks').get().cnt,
  alkota: db.prepare("SELECT COUNT(*) as cnt FROM documents WHERE brand = 'Alkota'").get().cnt
};

console.log(`\n═══ RESULTS ═══`);
console.log(`  Documents: ${before.docs} → ${after.docs} (+${docsAdded})`);
console.log(`  Chunks:    ${before.chunks} → ${after.chunks} (+${chunksAdded})`);
console.log(`  Alkota:    ${after.alkota} documents\n`);

// Show brand breakdown
console.log('Brand breakdown:');
const brands = db.prepare('SELECT brand, COUNT(*) as docs FROM documents GROUP BY brand ORDER BY docs DESC').all();
for (const b of brands) {
  console.log(`  ${b.brand}: ${b.docs} docs`);
}

// Test a search
console.log('\n═══ SEARCH TEST ═══');
const testQuery = 'burner ignition electrode';
try {
  const results = db.prepare(`
    SELECT d.brand, d.title, substr(c.content, 1, 120) as preview
    FROM chunks_fts fts
    JOIN chunks c ON c.id = fts.rowid
    JOIN documents d ON d.id = c.doc_id
    WHERE chunks_fts MATCH ?
    ORDER BY rank LIMIT 3
  `).all(testQuery);
  
  console.log(`Search: "${testQuery}"`);
  if (results.length === 0) {
    console.log('  (no results - try a simpler query)');
  } else {
    for (const r of results) {
      console.log(`  [${r.brand}] ${r.title}`);
      console.log(`    ${r.preview}...`);
    }
  }
} catch(e) {
  console.log(`  Search error: ${e.message}`);
}

db.close();
console.log('\n✓ Done. knowledge.db updated with Alkota data.');
console.log('  Remember to commit & push to deploy:\n');
console.log('  git add knowledge.db');
console.log('  git commit -m "Add Alkota troubleshooting to knowledge base"');
console.log('  git push\n');

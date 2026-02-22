#!/usr/bin/env python3
"""
fix_brands.py — Re-tag "Unknown" brand documents in the knowledge base.

Usage:
    python fix_brands.py                    # Apply fixes to knowledge.db
    python fix_brands.py --dry-run          # Preview only
"""

import sqlite3
import re
import sys

DB_PATH = 'knowledge.db'
DRY_RUN = '--dry-run' in sys.argv

conn = sqlite3.connect(DB_PATH)
conn.row_factory = sqlite3.Row

unknowns = conn.execute(
    "SELECT id, filename, title FROM documents WHERE brand='Unknown' ORDER BY filename"
).fetchall()

print(f"Found {len(unknowns)} documents with Unknown brand\n")

# ═══════════════════════════════════════════════════════════════
# EXACT filename mapping for tricky ones
# ═══════════════════════════════════════════════════════════════
EXACT_MAP = {
    '6104-Burner_Manual_092120.pdf': 'Beckett',
    '1204-0674_HYDRA-VALLEY_11-2022.pdf': 'Hydra-Valley',
    '2018-8102.1801.00-SDS.pdf': 'Reference',
    'ISO-9001-2018-DNV-Certificate-July-2018.pdf': 'Reference',
    'NozzleChart-English.PDF': 'Reference',
    'general.pdf': 'Reference',
    'pump-control-units-general-manual.pdf': 'PA/Pulsar Advance',
    'Alfa-2.pdf': 'AR Pumps',
    'BXD.pdf': 'AR Pumps',
}

# ═══════════════════════════════════════════════════════════════
# Pattern rules — applied to filename (case-insensitive)
# ═══════════════════════════════════════════════════════════════
RULES = [
    # ── Kohler Engines ──
    # CH series: CH11, CH260, CH682, CH940 etc.
    (r'^CH\d', 'Kohler'),
    # CV series: CV11, CV17, CV682, CV940 etc.
    (r'^CV\d', 'Kohler'),
    # ECH/ECV series
    (r'^ECH\d', 'Kohler'),
    (r'^ECV\d', 'Kohler'),
    # SV series: SV470, SV710 etc.
    (r'^SV\d', 'Kohler'),
    # KT series
    (r'^KT\d', 'Kohler'),
    # CS series: CS4, CS6, CS8.5 etc.
    (r'^CS\d', 'Kohler'),
    # SH, LH series
    (r'^SH\d', 'Kohler'),
    (r'^LH\d', 'Kohler'),
    # EZT, ZT series
    (r'^EZT\d', 'Kohler'),
    (r'^ZT\d', 'Kohler'),

    # ── AR / Annovi Reverberi Pumps ──
    # AR-prefixed: AR-DUE, AR115BP, AR20LFP, AR30, AR45, AR50, AR60, AR70, AR_DUE
    (r'^AR', 'AR Pumps'),
    # BP series: BP60, BP105, BP151, BP205, BPX25
    (r'^BP', 'AR Pumps'),
    # MC series: MC8, MC20
    (r'^MC\d', 'AR Pumps'),
    # MP series: MP20
    (r'^MP\d', 'AR Pumps'),
    # M55 / M-55
    (r'^M[\-]?55', 'AR Pumps'),
    # P series breakdowns: P36, P40, P48
    (r'^P\d\d[_\.]', 'AR Pumps'),
    # JRA, JRV
    (r'^JR[AV]', 'AR Pumps'),
    # R-series pump breakdowns: RC, RCA, RCV, RCVU, RG, RGA, RGX, RGXA, 
    # RK, RKA, RKV, RM, RMV, RMW, RQ, RQV, RQW, RR, RRA, RRV, 
    # RS, RSV, RT, RTD, RTF, RTP, RTX, RX, RXV
    (r'^R[CGKMNQRSTX][A-Z_]', 'AR Pumps'),
    (r'^RC_', 'AR Pumps'),
    (r'^RG_', 'AR Pumps'),
    (r'^RK_', 'AR Pumps'),
    (r'^RR_', 'AR Pumps'),
    # SHP, SHPA, SJV, SRMV, SRMW, SXMA, SXMV, SXW (AR pump models)
    (r'^SHP', 'AR Pumps'),
    (r'^SJV', 'AR Pumps'),
    (r'^SRM', 'AR Pumps'),
    (r'^SXM', 'AR Pumps'),
    (r'^SXW', 'AR Pumps'),
    # XM, XMA, XMV, XT, XTA, XTV, XW, XWA, XWAM, XWM, XWP, XWT
    (r'^X[MTW]', 'AR Pumps'),

    # ── Comet Pumps ──
    # Esploso (Italian exploded views) — APS and IDS series
    (r'^Esploso', 'Comet'),

    # ── PA / Pulsar Advance (pump controls / unloaders) ──
    (r'^VR', 'PA/Pulsar Advance'),
    (r'^GCP', 'PA/Pulsar Advance'),
    (r'^GRV', 'PA/Pulsar Advance'),
    (r'^HPR', 'PA/Pulsar Advance'),
    (r'^Gemini', 'PA/Pulsar Advance'),
    (r'^Sirius', 'PA/Pulsar Advance'),
    (r'^Polaris', 'PA/Pulsar Advance'),
    (r'^ORION', 'PA/Pulsar Advance'),
    (r'^EWD', 'PA/Pulsar Advance'),
    (r'^FW', 'PA/Pulsar Advance'),
    (r'^RW[S]?\.pdf', 'PA/Pulsar Advance'),
    (r'^RBD', 'PA/Pulsar Advance'),
    (r'^SW[S]?\.pdf', 'PA/Pulsar Advance'),
    (r'^TW', 'PA/Pulsar Advance'),
]

# ── Process ──
updates = {}
for doc in unknowns:
    doc_id = doc['id']
    filename = doc['filename']
    brand = None

    # Check exact map first
    if filename in EXACT_MAP:
        brand = EXACT_MAP[filename]
    
    # Then pattern rules
    if not brand:
        for pattern, brand_name in RULES:
            if re.search(pattern, filename, re.IGNORECASE):
                brand = brand_name
                break
    
    # Content fallback
    if not brand:
        chunks = conn.execute(
            "SELECT content FROM chunks WHERE doc_id=? ORDER BY page_num LIMIT 3",
            (doc_id,)
        ).fetchall()
        combined = ' '.join(c['content'] for c in chunks)
        content_rules = [
            (r'kohler', 'Kohler'),
            (r'annovi\s*reverberi', 'AR Pumps'),
            (r'comet\s*pump', 'Comet'),
            (r'beckett', 'Beckett'),
            (r'pulsar\s*advance', 'PA/Pulsar Advance'),
            (r'general\s*pump', 'General Pump'),
        ]
        for pattern, brand_name in content_rules:
            if re.search(pattern, combined, re.IGNORECASE):
                brand = brand_name
                break

    if brand:
        updates[doc_id] = (brand, filename)

# ── Report ──
print(f"Can re-tag: {len(updates)} / {len(unknowns)} documents\n")

by_brand = {}
for doc_id, (brand, filename) in updates.items():
    by_brand.setdefault(brand, []).append(filename)

for brand in sorted(by_brand.keys()):
    files = sorted(by_brand[brand])
    print(f"  {brand}: {len(files)} docs")
    for fname in files:
        print(f"    {fname}")
    print()

still_unknown = [doc for doc in unknowns if doc['id'] not in updates]
if still_unknown:
    print(f"  Still Unknown: {len(still_unknown)} docs")
    for doc in still_unknown:
        print(f"    {doc['filename']}")

# ── Apply ──
if not DRY_RUN and updates:
    print(f"\nApplying {len(updates)} brand updates...")
    for doc_id, (brand, filename) in updates.items():
        conn.execute("UPDATE documents SET brand=? WHERE id=?", (brand, doc_id))
    conn.commit()
    print("Done!\n")

    brands = conn.execute(
        "SELECT brand, COUNT(*) as cnt FROM documents GROUP BY brand ORDER BY cnt DESC"
    ).fetchall()
    print("Updated brand distribution:")
    for b in brands:
        print(f"  {b['brand']}: {b['cnt']} docs")
elif DRY_RUN:
    print(f"\n[DRY RUN] No changes made. Remove --dry-run to apply.")

conn.close()
#!/usr/bin/env python3
"""
patch_build_kb.py
-----------------
Patches build-kb.py to:
  1. Recurse into subfolders (os.walk instead of os.listdir)
  2. Tag every chunk with its source path so the agent can say
     "According to the Generac standby manual..."

Run from inside your p_supp folder:
    python patch_build_kb.py

It will write build-kb.py in place (keeps a .bak backup first).
"""

import os
import sys
import shutil

# Accept optional path argument: python patch_build_kb.py "G:\psupp_info\build-kb.py"
if len(sys.argv) > 1:
    TARGET = sys.argv[1]
else:
    candidates = [
        os.path.join(os.path.dirname(os.path.abspath(__file__)), "build-kb.py"),
        r"G:\psupp_info\build-kb.py",
        os.path.join(os.getcwd(), "build-kb.py"),
    ]
    TARGET = next((p for p in candidates if os.path.exists(p)), None)
    if not TARGET:
        print("ERROR: Could not find build-kb.py automatically.")
        print("Pass the full path as an argument, e.g.:")
        print(r"  python patch_build_kb.py G:\psupp_info\build-kb.py")
        sys.exit(1)

if not os.path.exists(TARGET):
    print(f"ERROR: build-kb.py not found at: {TARGET}")
    sys.exit(1)

print(f"Patching: {TARGET}")

# ── Backup ────────────────────────────────────────────────────────────────────
shutil.copy(TARGET, TARGET + ".bak")
print(f"Backed up → build-kb.py.bak")

content = open(TARGET, encoding="utf-8").read()

# ─────────────────────────────────────────────────────────────────────────────
# PATCH 1: Replace the flat os.listdir() PDF discovery with os.walk()
# ─────────────────────────────────────────────────────────────────────────────

OLD_FIND = '''    # Find all PDFs
    pdf_files = sorted(
        [f for f in os.listdir(PDF_FOLDER) if f.lower().endswith(".pdf")]
    )
    if not pdf_files:
        print(f"ERROR: No PDF files found in {PDF_FOLDER}")
        sys.exit(1)

    print(f"Found {len(pdf_files)} PDFs:")
    for f in pdf_files:
        size = os.path.getsize(os.path.join(PDF_FOLDER, f))
        print(f"  • {f} ({size / 1024:.0f} KB)")'''

NEW_FIND = '''    # Find all PDFs — recurse through all subfolders
    # Each entry: (relative_path, absolute_path)
    # e.g. ("generators/standby/generac", "/full/path/to/file.pdf")
    pdf_files = []
    for dirpath, dirnames, filenames in os.walk(PDF_FOLDER):
        # Sort dirs so processing order is consistent
        dirnames.sort()
        rel_dir = os.path.relpath(dirpath, PDF_FOLDER).replace("\\\\", "/")
        if rel_dir == ".":
            rel_dir = ""
        for fname in sorted(filenames):
            if fname.lower().endswith(".pdf"):
                abs_path = os.path.join(dirpath, fname)
                # source_tag: "generators/standby/generac/filename.pdf"
                source_tag = (rel_dir + "/" + fname).lstrip("/")
                pdf_files.append((source_tag, abs_path))

    if not pdf_files:
        print(f"ERROR: No PDF files found in {PDF_FOLDER} or any subfolder")
        sys.exit(1)

    print(f"Found {len(pdf_files)} PDFs across all subfolders:")
    # Group by category for cleaner output
    current_dir = None
    for source_tag, abs_path in pdf_files:
        folder = "/".join(source_tag.split("/")[:-1]) or "."
        if folder != current_dir:
            print(f"  [{folder}]")
            current_dir = folder
        size = os.path.getsize(abs_path)
        fname = source_tag.split("/")[-1]
        print(f"    • {fname} ({size / 1024:.0f} KB)")'''

if OLD_FIND not in content:
    print("WARNING: Could not find the expected os.listdir() block.")
    print("  Your build-kb.py may have been modified already, or the")
    print("  formatting differs. Applying fallback patch...")
    # Fallback: simpler string replacement just for the listdir line
    FALLBACK_OLD = "[f for f in os.listdir(PDF_FOLDER) if f.lower().endswith(\".pdf\")]"
    FALLBACK_NEW = """[]
    for _dirpath, _dirnames, _filenames in os.walk(PDF_FOLDER):
        _rel = os.path.relpath(_dirpath, PDF_FOLDER).replace("\\\\", "/").lstrip("./")
        for _f in sorted(_filenames):
            if _f.lower().endswith(".pdf"):
                _tag = (_rel + "/" + _f).lstrip("/")
                pdf_files.append((_tag, os.path.join(_dirpath, _f)))
    pdf_files = sorted(pdf_files)
    _dummy"""
    if FALLBACK_OLD in content:
        content = content.replace(FALLBACK_OLD, FALLBACK_NEW, 1)
        print("  Fallback patch applied.")
    else:
        print("  Fallback also failed. Please apply the patch manually.")
        print("  See MANUAL_PATCH.txt for instructions.")
        _write_manual_instructions(TARGET)
        sys.exit(1)
else:
    content = content.replace(OLD_FIND, NEW_FIND, 1)
    print("✓ Patch 1 applied: recursive PDF discovery")

# ─────────────────────────────────────────────────────────────────────────────
# PATCH 2: Update the processing loop to unpack (source_tag, abs_path)
#          and pass source_tag through to page extraction
# ─────────────────────────────────────────────────────────────────────────────

OLD_LOOP = '''    for pdf_file in pdf_files:
        path = os.path.join(PDF_FOLDER, pdf_file)
        print(f"\\nProcessing: {pdf_file}...")
        pages = extract_text(path)
        all_pages_text[pdf_file] = pages
        print(f"  Extracted {len(pages)} pages")

        # Extract pump models
        models = extract_pump_models(pages)
        if models:
            print(f"  Found {len(models)} pump models")
            all_pump_models.extend(models)

        # Extract accessories
        acc = extract_accessories(pages)
        for cat, items in acc.items():
            if cat not in all_accessories:
                all_accessories[cat] = []
            all_accessories[cat].extend(items)'''

NEW_LOOP = '''    for source_tag, abs_path in pdf_files:
        fname = source_tag.split("/")[-1]
        # Derive a human-readable category from the folder path
        # e.g. "generators/standby/generac/manual.pdf" → "Generac Standby Generator"
        parts = source_tag.split("/")[:-1]  # drop filename
        source_label = " / ".join(p.replace("_", " ").title() for p in parts) if parts else "General"

        print(f"\\nProcessing: {source_tag}")
        pages = extract_text(abs_path)

        # Tag each page with its source so the agent can cite it
        tagged_pages = [f"[SOURCE: {source_label}]\\n{p}" for p in pages]

        all_pages_text[source_tag] = tagged_pages
        print(f"  Extracted {len(pages)} pages  [{source_label}]")

        # Extract pump models
        models = extract_pump_models(pages)
        if models:
            print(f"  Found {len(models)} pump models")
            all_pump_models.extend(models)

        # Extract accessories
        acc = extract_accessories(pages)
        for cat, items in acc.items():
            if cat not in all_accessories:
                all_accessories[cat] = []
            all_accessories[cat].extend(items)'''

if OLD_LOOP not in content:
    print("WARNING: Could not find the expected processing loop.")
    print("  The source tagging patch (Patch 2) was not applied.")
    print("  PDFs will still be found recursively — just without source labels.")
else:
    content = content.replace(OLD_LOOP, NEW_LOOP, 1)
    print("✓ Patch 2 applied: source tagging on every chunk")

# ─────────────────────────────────────────────────────────────────────────────
# PATCH 3: Fix the generate_js() call — pdf_files is now list of tuples,
#          so pass just the source tags (not the full tuple) to the JS generator
# ─────────────────────────────────────────────────────────────────────────────

OLD_GENERATE = "    js = generate_js(unique_models, all_accessories, pdf_files)"
NEW_GENERATE = "    js = generate_js(unique_models, all_accessories, [t for t, _ in pdf_files])"

if OLD_GENERATE in content:
    content = content.replace(OLD_GENERATE, NEW_GENERATE, 1)
    print("✓ Patch 3 applied: source list passed correctly to generate_js()")
else:
    print("  Patch 3 skipped (generate_js call not found in expected form — likely fine)")

# ─────────────────────────────────────────────────────────────────────────────
# PATCH 4: Fix the "no PDFs found" error message (references old variable form)
# ─────────────────────────────────────────────────────────────────────────────
OLD_ERR = 'print(f"ERROR: No PDF files found in {PDF_FOLDER}")'
NEW_ERR = 'print(f"ERROR: No PDF files found in {PDF_FOLDER} or any subfolder")'
content = content.replace(OLD_ERR, NEW_ERR)  # silent — may or may not be present

# ─────────────────────────────────────────────────────────────────────────────
# Write patched file
# ─────────────────────────────────────────────────────────────────────────────
with open(TARGET, "w", encoding="utf-8") as f:
    f.write(content)

print(f"\n✓ build-kb.py updated successfully")
print(f"\nYou can now run:")
print(f'  python build-kb.py "G:\\psupp_info"')
print(f"\nIt will walk every subfolder under G:\\psupp_info and process all PDFs,")
print(f"tagging each chunk with its source category (e.g. 'Generators / Standby / Generac').")
print(f"\nIf anything looks wrong, restore the backup:")
print(f"  copy build-kb.py.bak build-kb.py")

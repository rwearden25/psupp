import sqlite3
conn = sqlite3.connect('knowledge.db')
rows = conn.execute("SELECT filename, brand FROM documents WHERE brand='Unknown' ORDER BY filename").fetchall()
for r in rows:
    print(r[0])
conn.close()
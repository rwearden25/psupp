// ═══════════════════════════════════════════════════════════
//  admin-mobile.js — Drop-in mobile fix for P-Supp Admin Panel
//  Add to admin.html: <script src="/admin-mobile.js"></script>
//  Place just before </body>
// ═══════════════════════════════════════════════════════════

(function() {
  'use strict';

  // ── 1. INJECT CSS ──
  const style = document.createElement('style');
  style.textContent = `
/* Hamburger button — hidden on desktop */
.mob-ham {
  display: none; background: none; border: 1.5px solid var(--border-2, #ddd);
  color: var(--text-mid, #555); width: 36px; height: 36px; border-radius: 8px;
  font-size: 20px; cursor: pointer; align-items: center; justify-content: center;
  flex-shrink: 0; transition: all 0.15s; line-height: 1; padding: 0;
  font-family: system-ui; margin-right: 8px;
}
.mob-ham:hover { border-color: var(--accent, #2563eb); color: var(--accent, #2563eb); }

/* Backdrop overlay */
#mob-backdrop {
  display: none; position: fixed; inset: 0; z-index: 99;
  background: rgba(0,0,0,.45); backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
#mob-backdrop.open { display: block; }

/* ── TABLET (≤ 1024px) ── */
@media (max-width: 1024px) {
  .stat-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .section { padding: 16px 20px !important; }
  .topbar { padding: 12px 20px !important; }
}

/* ── MOBILE (≤ 768px) ── */
@media (max-width: 768px) {
  /* Show hamburger */
  .mob-ham { display: flex !important; }

  /* Sidebar becomes slide-in overlay */
  #sidebar {
    position: fixed !important; top: 0 !important; left: 0 !important; bottom: 0 !important;
    transform: translateX(-100%);
    transition: transform 0.25s cubic-bezier(.25,.8,.25,1);
    width: 280px !important; min-width: 280px !important;
    box-shadow: 4px 0 24px rgba(0,0,0,.3);
    z-index: 200 !important;
    overflow-y: auto !important;
  }
  #sidebar.mob-open { transform: translateX(0) !important; }

  /* Main content full-width */
  #main { margin-left: 0 !important; }

  /* Topbar */
  .topbar { padding: 10px 14px !important; gap: 8px; }
  .topbar-left h1 { font-size: 14px !important; }
  .topbar-left p { font-size: 11px !important; }

  /* Sections */
  .section { padding: 14px 16px !important; }

  /* Stat cards */
  .stat-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
  .stat-card { padding: 14px !important; }
  .stat-card .sc-value { font-size: 22px !important; }

  /* All multi-column inline grids → single column on mobile */
  div[style*="grid-template-columns: 1fr 1fr"],
  div[style*="grid-template-columns:1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }

  /* Scrollable tables */
  .panel { overflow: visible !important; }
  .panel table { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; white-space: nowrap; }

  /* Panel headers wrap */
  .panel-header { flex-wrap: wrap !important; gap: 8px !important; }

  /* Scraper terminal smaller */
  .scraper-terminal { font-size: 11px !important; max-height: 200px !important; }

  /* Form grids single column */
  .form-grid { grid-template-columns: 1fr !important; }

  /* Analytics charts scroll */
  .bar-chart { overflow-x: auto !important; }

  /* Attention grid */
  .attention-grid { grid-template-columns: 1fr !important; }

  /* Login card */
  .login-card { width: 90vw !important; max-width: 360px !important; padding: 28px 24px !important; }

  /* Scraper config grid */
  div[style*="grid-template-columns: 2fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}

/* ── SMALL MOBILE (≤ 480px) ── */
@media (max-width: 480px) {
  .stat-grid { grid-template-columns: 1fr !important; }
  .topbar-left h1 { font-size: 13px !important; }
  #topbar-actions { display: none !important; }
  .panel-title { font-size: 13px !important; }
  .panel-subtitle { font-size: 11px !important; }
  td, th { font-size: 12px !important; padding: 8px 6px !important; }
}
  `;
  document.head.appendChild(style);

  // ── 2. INJECT HAMBURGER BUTTON ──
  const topbar = document.querySelector('.topbar');
  if (topbar) {
    const ham = document.createElement('button');
    ham.className = 'mob-ham';
    ham.id = 'mob-ham';
    ham.textContent = '☰';
    ham.setAttribute('aria-label', 'Toggle menu');
    ham.addEventListener('click', toggleMobileSidebar);
    topbar.insertBefore(ham, topbar.firstChild);
  }

  // ── 3. INJECT BACKDROP ──
  const backdrop = document.createElement('div');
  backdrop.id = 'mob-backdrop';
  backdrop.addEventListener('click', closeMobileSidebar);
  document.body.appendChild(backdrop);

  // ── 4. SIDEBAR TOGGLE FUNCTIONS ──
  function toggleMobileSidebar() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('mob-backdrop');
    if (sb) sb.classList.toggle('mob-open');
    if (bd) bd.classList.toggle('open');
  }

  function closeMobileSidebar() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('mob-backdrop');
    if (sb) sb.classList.remove('mob-open');
    if (bd) bd.classList.remove('open');
  }

  // ── 5. AUTO-CLOSE SIDEBAR ON NAV CLICK ──
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        closeMobileSidebar();
      }
    });
  });

  // ── 6. CLOSE ON RESIZE TO DESKTOP ──
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMobileSidebar();
    }
  });

  // ── 7. CLOSE ON BACK-TO-APP OR SIGN-OUT ──
  document.querySelectorAll('.sb-footer a, .logout-btn').forEach(function(el) {
    el.addEventListener('click', function() {
      if (window.innerWidth <= 768) closeMobileSidebar();
    });
  });

  console.log('[Admin] Mobile responsive loaded');

  // ── 8. EXPORT BUTTON — inject into topbar ──
  const topbarActions = document.getElementById('topbar-actions');
  if (topbarActions) {
    const exportBtn = document.createElement('button');
    exportBtn.className = 'btn btn-ghost';
    exportBtn.textContent = '⬇ Export Data';
    exportBtn.style.cssText = 'font-size:12px;';
    exportBtn.addEventListener('click', async function() {
      exportBtn.textContent = '⏳ Exporting…';
      exportBtn.disabled = true;
      try {
        const token = localStorage.getItem('authToken');
        const resp = await fetch('/api/admin/export', {
          headers: { 'Authorization': 'Bearer ' + token }
        });
        if (!resp.ok) throw new Error('Export failed: ' + resp.status);
        const data = await resp.json();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'psupp-export-' + new Date().toISOString().slice(0,10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        exportBtn.textContent = '✅ Downloaded';
        setTimeout(() => { exportBtn.textContent = '⬇ Export Data'; exportBtn.disabled = false; }, 2000);
      } catch(e) {
        exportBtn.textContent = '❌ Failed';
        console.error('[Export]', e);
        setTimeout(() => { exportBtn.textContent = '⬇ Export Data'; exportBtn.disabled = false; }, 2000);
      }
    });
    topbarActions.appendChild(exportBtn);
  }
})();

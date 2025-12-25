frappe.ready(()=>{ try{ document.querySelectorAll(".frappe-list .list-row").forEach(el=>{el.style.paddingTop="6px";el.style.paddingBottom="6px"}) }catch(e){}});
// SmartBest theme: cleanup ghost/empty workspace shortcuts
frappe.ready(() => {
  try {
    // remove empty chips (no visible text)
    document.querySelectorAll(
      '.workspace .shortcut, .workspace .shortcut-item, .workspace .shortcut-widget a, .workspace a.shortcut'
    ).forEach(el => {
      if (!el.textContent || !el.textContent.trim()) el.remove();
    });

    // ensure consistent gaps even if the layout class changes later
    document.querySelectorAll('.workspace .shortcut-container, .workspace .shortcut-list')
      .forEach(c => { c.style.columnGap = '12px'; c.style.rowGap = '12px'; });
  } catch (e) { /* ignore */ }
});
// === SmartBest: FORCE workspace shortcut chips into a neat grid ===
(function () {
  function fixShortcuts() {
    try {
      // Every known container where shortcuts live
      const containers = document.querySelectorAll(
        [
          '.workspace .shortcut-container',
          '.workspace .shortcut-list',
          '.workspace .shortcut-links',
          '.workspace .links',
          '.workspace .widget .links',
          '.workspace .widget.shortcuts .links',
          '.workspace .workspace-shortcuts'
        ].join(',')
      );

      containers.forEach(c => {
        // grid container
        c.style.display = 'grid';
        c.style.gridTemplateColumns = 'repeat(auto-fill, minmax(260px, 1fr))';
        c.style.gap = '12px 16px';
        c.style.padding = '10px 4px 8px';

        // remove ghost / empty nodes that create the long bar
        Array.from(c.children).forEach(ch => {
          if (!ch.textContent || !ch.textContent.trim()) ch.remove();
        });
      });

      // normalize every pill/chip
      const pills = document.querySelectorAll(
        [
          '.workspace .links > a',
          '.workspace .shortcut',
          '.workspace .shortcut-item',
          '.workspace .shortcut-links a',
          '.workspace .shortcut-container a',
          '.workspace a.shortcut'
        ].join(',')
      );

      pills.forEach(p => {
        p.style.display = 'flex';
        p.style.alignItems = 'center';
        p.style.justifyContent = 'flex-start';
        p.style.minHeight = '44px';
        p.style.padding = '12px 18px';
        p.style.borderRadius = '9999px';
        p.style.border = '1px solid var(--chip-border, #e6ebf2)';
        p.style.background = 'var(--chip-bg, #fff)';
        p.style.boxShadow = '0 1px 2px rgba(16,24,40,.05)';
        p.style.lineHeight = '1.25';
      });
    } catch (e) { /* ignore */ }
  }

  // Run on load, after ajax, and whenever the route/DOM changes.
  document.addEventListener('DOMContentLoaded', fixShortcuts);
  if (window.frappe?.after_ajax) frappe.after_ajax(fixShortcuts);
  const obs = new MutationObserver(() => fixShortcuts());
  obs.observe(document.body, { childList: true, subtree: true });
})();
// === SmartBest: FORCE workspace shortcut chips into a neat grid ===
(function () {
  function fixShortcuts() {
    try {
      // Every known container where shortcuts live
      const containers = document.querySelectorAll(
        [
          '.workspace .shortcut-container',
          '.workspace .shortcut-list',
          '.workspace .shortcut-links',
          '.workspace .links',
          '.workspace .widget .links',
          '.workspace .widget.shortcuts .links',
          '.workspace .workspace-shortcuts'
        ].join(',')
      );

      containers.forEach(c => {
        // grid container
        c.style.display = 'grid';
        c.style.gridTemplateColumns = 'repeat(auto-fill, minmax(260px, 1fr))';
        c.style.gap = '12px 16px';
        c.style.padding = '10px 4px 8px';

        // remove ghost / empty nodes that create the long bar
        Array.from(c.children).forEach(ch => {
          if (!ch.textContent || !ch.textContent.trim()) ch.remove();
        });
      });

      // normalize every pill/chip
      const pills = document.querySelectorAll(
        [
          '.workspace .links > a',
          '.workspace .shortcut',
          '.workspace .shortcut-item',
          '.workspace .shortcut-links a',
          '.workspace .shortcut-container a',
          '.workspace a.shortcut'
        ].join(',')
      );

      pills.forEach(p => {
        p.style.display = 'flex';
        p.style.alignItems = 'center';
        p.style.justifyContent = 'flex-start';
        p.style.minHeight = '44px';
        p.style.padding = '12px 18px';
        p.style.borderRadius = '9999px';
        p.style.border = '1px solid var(--chip-border, #e6ebf2)';
        p.style.background = 'var(--chip-bg, #fff)';
        p.style.boxShadow = '0 1px 2px rgba(16,24,40,.05)';
        p.style.lineHeight = '1.25';
      });
    } catch (e) { /* ignore */ }
  }

  // Run on load, after ajax, and whenever the route/DOM changes.
  document.addEventListener('DOMContentLoaded', fixShortcuts);
  if (window.frappe?.after_ajax) frappe.after_ajax(fixShortcuts);
  const obs = new MutationObserver(() => fixShortcuts());
  obs.observe(document.body, { childList: true, subtree: true });
})();

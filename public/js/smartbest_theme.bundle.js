(() => {
  // Run a function once the document is ready
  const onReady = (fn) => {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn, { once: true });
  };

  // Remove ghost spacer rows and empty shortcut pills in Workspaces
  const cleanWorkspace = () => {
    try {
      // Hide classic spacer / divider blocks
      document
        .querySelectorAll('.workspace .spacer, .workspace .divider, .workspace .workspace-divider')
        .forEach((el) => el.remove());

      // Remove empty shortcut anchors/divs
      document
        .querySelectorAll('.workspace a.shortcut, .workspace .shortcut, .workspace .shortcut-item')
        .forEach((el) => {
          if (!el.textContent.trim()) el.remove();
        });
    } catch (e) {
      /* no-op */
    }
  };

  // Observe DOM changes so we can re-clean if the workspace re-renders
  const enableObserver = () => {
    const obs = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.addedNodes && m.addedNodes.length) {
          cleanWorkspace();
          break;
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  };

  onReady(() => {
    cleanWorkspace();
    enableObserver();
  });
})();

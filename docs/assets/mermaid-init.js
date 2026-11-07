document$.subscribe(() => {
  const nodes = document.querySelectorAll(".mermaid:not([data-processed])");
  if (!nodes.length || !window.mermaid) return;
  window.mermaid.run({ nodes });
});

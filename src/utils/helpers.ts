interface ElementWithResize extends HTMLElement {
  onResize?: () => void;
  onWidthResize?: () => void;
}

const resizeElements: ElementWithResize[] = [];
let resizeTimeout: number;
let lastWidth = window.innerWidth;

window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = window.setTimeout(() => {
    const widthChanged = lastWidth !== window.innerWidth;
    for (const el of resizeElements) {
      if (el.isConnected) {
        el.onResize?.();
        if (widthChanged) el.onWidthResize?.();
      }
    }
    lastWidth = window.innerWidth;
  }, 15);
});

export function addResizeObserver(el: ElementWithResize) {
  resizeElements.push(el);
}

interface ElementWithScroll extends HTMLElement {
  onScroll: (y: number) => void;
}

const scrollElements: ElementWithScroll[] = [];

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    for (const el of scrollElements) {
      el.onScroll(y);
    }
  },
  { passive: true },
);

export function addScrollObserver(el: ElementWithScroll) {
  scrollElements.push(el);
}

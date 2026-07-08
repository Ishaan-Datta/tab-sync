// Shared DOM transition helpers extracted from the original bundles.
(function () {
  function createOneTabDomTransitionHelpers() {
    async function fadeOut(element: HTMLElement) {
      return new Promise<void>((resolve) => {
        element.addEventListener("transitionend", () => resolve());
        element.style.removeProperty("opacity");
        element.classList.add("fadeOutTransition");
        requestAnimationFrame(() => element.classList.add("fadedOut"));
      });
    }

    async function fadeIn(element: HTMLElement) {
      return new Promise<void>((resolve) => {
        element.addEventListener("transitionend", () => {
          element.classList.remove("fadedIn", "fadeInTransition");
          resolve();
        });
        element.style.removeProperty("opacity");
        element.classList.add("fadedOut");
        element.classList.add("fadeInTransition");
        requestAnimationFrame(() => element.classList.add("fadedIn"));
      });
    }

    return { fadeIn, fadeOut };
  }

  (globalThis as any).createOneTabDomTransitionHelpers =
    createOneTabDomTransitionHelpers;
})();

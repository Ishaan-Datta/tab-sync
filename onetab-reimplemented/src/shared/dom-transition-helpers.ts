export interface OneTabDomTransitionHelpers {
  fadeIn(element: HTMLElement): Promise<void>;
  fadeOut(element: HTMLElement): Promise<void>;
}

export function createOneTabDomTransitionHelpers(): OneTabDomTransitionHelpers {
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

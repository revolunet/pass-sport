export const setFocusOn = (selector: string) => {
  const targetElement = document.querySelector<HTMLElement>(selector);

  if (!targetElement) {
    return null;
  }

  targetElement.focus();
};

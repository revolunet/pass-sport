// These classes are mostly used in conjunction with custom hooks as a workaround to fix accessibility issues:
// - useUpdateList
// - useUpdateHeadings
// We update through the dom some of the html attributes to be in conformity with the accessibility rules

export const HEADER_CLASSES = {
  list: '.fr-btns-group',
  closeButton: '#fr-header-mobile-overlay-button-close',
  menuButton: '.fr-header__navbar .fr-btn--menu.fr-btn',
};

export const FOOTER_CLASSES = {
  partnersTitle: '.fr-footer__partners-title',
};

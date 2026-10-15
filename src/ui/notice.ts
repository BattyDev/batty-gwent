// The fan-content notice, shown on every page. One copy, so it can't drift.
//
// CD PROJEKT RED's Fan Content Guidelines (cdprojektred.com/en/fan-content,
// last updated 10 December 2020) ask fan work to show "This is an unofficial
// fan work and is not approved/endorsed by CD PROJEKT RED" in an obvious
// place. NOTICE_TEXT opens with exactly that sentence.

import { h } from './dom';

export const GUIDELINES_URL = 'https://www.cdprojektred.com/en/fan-content';

export const NOTICE_TEXT =
  'This is an unofficial fan work and is not approved/endorsed by CD PROJEKT RED. It is free and not for profit. ' +
  'The Witcher, Gwent and related names, logos, card art and icons are trademarks or copyrighted material of CD PROJEKT S.A., used under the ';

/** The notice as a paragraph, with a link to the guidelines. */
export function fanNotice(): HTMLElement {
  return h(
    'p',
    { class: 'fan-notice' },
    NOTICE_TEXT,
    h('a', { href: GUIDELINES_URL, rel: 'noopener' }, 'CD PROJEKT RED Fan Content Guidelines'),
    '. Nothing here is sold and there are no ads.',
  );
}

/** Footer for the menu and other full pages. */
export function siteFooter(): HTMLElement {
  return h(
    'footer',
    { class: 'menu-foot' },
    fanNotice(),
    h('p', null, h('a', { href: '#/about' }, 'About this simulator'), ' · ', h('a', { href: '../' }, 'battydev.com')),
  );
}

import { push } from '@socialgouv/matomo-next';

export function trackRedirectionToPassSportForm() {
  push(['trackEvent', 'Test eligibilite base', 'Clicked', 'Redirection to pass Sport form']);
}

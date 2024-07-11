'use client';

import cn from 'classnames';
import styles from './styles.module.scss';
import { Badge } from '@codegouvfr/react-dsfr/Badge';
import Button from '@codegouvfr/react-dsfr/Button';
import { push } from '@socialgouv/matomo-next';

interface Props {
  code: string;
}

const ProContent = ({ code }: Props) => {
  const redirectionUrl = new URL(process.env.NEXT_PUBLIC_LCA_REDIRECTION_URL || '');
  const redirectionUrlSearchParams = new URLSearchParams({ id_psp: code });

  redirectionUrl.search = redirectionUrlSearchParams.toString();

  const onRedirectionClick = () => {
    push(['trackEvent', 'LCA redirection', 'Clicked', 'QR Recap page']);
  };

  return (
    <div
      className={cn(
        styles['container-pro'],
        'fr-grid-row',
        'fr-grid-row--middle',
        'fr-grid-row--center',
        'fr-py-4w',
        'fr-px-2w',
      )}
    >
      <div className={cn(styles['container-pro__content'])}>
        <Badge className={cn(styles['container-pro__content-badge'], 'fr-mb-3v')}>
          Structures partenaires
        </Badge>
        <h2 className={cn(styles['container-pro__content-title'], 'fr-h6')}>
          Je valide le pass Sport de mon adhérent
        </h2>
        <p className="fr-text--sm fr-text-default--grey">
          Identifiez-vous à votre compte Le Compte Asso pour valider ce pass Sport en quelques
          clics. Les informations de ce pass Sport seront automatiquement préremplies, il vous
          suffira simplement de sélectionner la fédération à laquelle vous appartenez pour valider
          le pass Sport et enclencher le paiement sous 30 jours.
        </p>

        <Button
          aria-label="Ouvrir une nouvelle fenêtre vers Le Compte Asso pour saisir ce pass Sport"
          priority="secondary"
          size="small"
          linkProps={{
            href: redirectionUrl,
            target: '_blank',
            onClick: onRedirectionClick,
          }}
        >
          Saisir ce pass Sport sur le compte Asso
        </Button>
      </div>
    </div>
  );
};

export default ProContent;

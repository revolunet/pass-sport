import cn from 'classnames';
import styles from './styles.module.scss';
import Link from 'next/link';

interface Props {
  isProVersion?: boolean;
}

const MissingClubInformationPanel = ({ isProVersion }: Props) => {
  const proContent = (
    <>
      <p>
        Votre structure n&apos;apparait pas ?{' '}
        <Link
          href="/v2/pro/tout-savoir-sur-le-pass-sport#tuto-carto"
          target="_blank"
          aria-label="Ouvrir une nouvelle fenêtre vers la page tout savoir sur le pass sport à la section du tutoriel pour faire apparaitre son club sur la cartographie"
        >
          voici comment la cartographier.
        </Link>
      </p>
      <p>
        N&apos;hésitez pas à vous rapprocher de plusieurs interlocuteurs dans votre département en
        fonction de votre statut.
      </p>
    </>
  );

  return (
    <div className={cn('fr-alert', 'fr-alert--info', 'fr-mx-auto', styles['alert-sizer'])}>
      <h2 className="fr-alert__title fr-h6">Information</h2>

      {isProVersion ? (
        proContent
      ) : (
        <p>
          Si mon club n’apparait pas, c’est qu’il n’accepte probablement pas encore le pass Sport.
          N’hésitez pas à vous rapprocher de votre club en lui proposant d’accepter le dispositif.
        </p>
      )}
    </div>
  );
};

export default MissingClubInformationPanel;

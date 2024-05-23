'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import styles from './styles.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import boysTeamImage from '@/images/homepage/boys-team.png';

const FindClubCard = () => {
  const router = useRouter();
  const buttonHandler = () => {
    router.push('/v2/trouver-un-club');
  };
  return (
    <div className={`fr-mx-auto ${styles.sizer} `}>
      <div className="fr-card fr-card--no-border fr-card--lg fr-card--horizontal fr-card--horizontal-half">
        <div className="fr-card__body">
          <div className="fr-card__content">
            <h4 className={`fr-card__title ${styles.title}`}>Trouver une structure partenaire</h4>
            <p className="fr-card__desc">
              Choisis le club de ton choix parmi plus de 85&nbsp;000 clubs et salles de sport
              partout en France !
            </p>
          </div>
          <div className="fr-card__footer">
            <Button
              className={styles.button}
              priority="secondary"
              iconId="fr-icon-arrow-right-line"
              size="large"
              iconPosition="right"
              onClick={buttonHandler}
            >
              Trouver un club
            </Button>
          </div>
        </div>
        <div className={`fr-card__header ${styles.background}`}>
          <div className="fr-card__img">
            <Image src={boysTeamImage} className="fr-responsive-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindClubCard;

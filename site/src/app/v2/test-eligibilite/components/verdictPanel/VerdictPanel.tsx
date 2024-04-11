import styles from './styles.module.scss';
import questionStyle from '../Question/styles.module.scss';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import Actions from '../actions/Actions';

interface Props {
  isEligible: boolean;
}

const VerdictPanel: React.FC<Props> = ({ isEligible }) => {
  return (
    <div className={styles.container}>
      <div className={`fr-p-2w ${questionStyle.panel}`}>
        {isEligible ? (
          <p className={`fr-text--lead ${styles['success-text']}`}>
            😁 Bonne nouvelle ! Vous êtes éligible au Pass Sport.
          </p>
        ) : (
          <p className={`fr-text--lead ${styles['failure-text']}`}>
            😔 Nous sommes désolés, vous n’êtes pas éligible au Pass Sport.
          </p>
        )}

        {isEligible ? (
          <>
            <p className={`fr-text--lg ${questionStyle.paragraph}`}>
              Vous devriez le recevoir soit le 1er juin, soit le 1er septembre 2024 sur l’adresse
              mail que vous avez communiquée à votre CAF, Mutualité sociale agricole ou votre CROUS.
            </p>
            <p className={`fr-text--lg ${questionStyle.paragraph}`}>
              Il vous permettra de déduire 50 euros de votre adhésion sportif dans plus de 55 000
              clubs et associations sportives partenaires dans toute la France.
            </p>
            <p className={`fr-text--lg ${questionStyle.paragraph}`}>
              Si vous ne l’avez pas reçu, vous aurez la possibilité, entre le 1er juin et le 1er
              septembre d’en faire la demande sur{' '}
              <a href="https://pass.sports.gouv.fr/">pass.sports.gouv.fr</a>
            </p>
          </>
        ) : (
          <>
            <p className={`fr-text--lg ${questionStyle.paragraph}`}>
              En effet, ce dispositif n’est pas accessbile à tous, il est ouvert aux:
            </p>
            <ul className={styles.ul}>
              <li className={`fr-text--lg fr-mb-3w  ${questionStyle.paragraph}`}>
                personnes nées entre le 16 septembre 2006 et le 31 décembre 2018 bénéficiant de
                l’allocation de rentrée scolaire (ARS) (6 à 17 ans révolus)
              </li>
              <li className={`fr-text--lg fr-mb-3w ${questionStyle.paragraph}`}>
                personnes nées entre le 1er juin 2004 et le 31 décembre 2018 bénéficiant de
                l’allocation d’éducation de l’enfant handicapé (AEEH) (6 à 19 ans révolus)
              </li>
              <li className={`fr-text--lg fr-mb-3w  ${questionStyle.paragraph}`}>
                personnes nées entre le 16 septembre 1993 et le 31 décembre 2008 bénéficiant de
                l’allocation aux adultes handicapés (AAH) (16 à 30 ans)
              </li>
              <li className={`fr-text--lg fr-mb-0 ${questionStyle.paragraph}`}>
                étudiants, âgés de 28 ans révolus au plus, et bénéficient au plus tard le 15 octobre
                2024, d’une bourse de l’état de l’enseignement supérieur sous conditions de
                ressources, d’une aide annuelle du CROUS ou d’une bourse régionale pour les
                formations sanitaires et sociales pour l’année universitaire 2024 – 2025.
              </li>
            </ul>
          </>
        )}
      </div>
      <SocialMediaLinks />
      <Actions hasSearchClubAction={isEligible} />
    </div>
  );
};

export default VerdictPanel;

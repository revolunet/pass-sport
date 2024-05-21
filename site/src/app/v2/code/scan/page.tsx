import styles from './styles.module.scss';
import cn from 'classnames';

function Page() {
  return (
    <div className={cn(styles['page'])}>
      <div className={cn(styles['container'], 'fr-container--fluid', 'fr-grid-row', 'fr-py-8w')}>
        <div className="fr-col-4">
          <h2 className="fr-mb-2vw">Voici votre pass Sport</h2>

          <p className="fr-mb-2w">
            Vous avez fait la demande de votre pass Sport. Il est strictement confidentiel.
          </p>
          <p className="fr-mb-2w">
            Le pass Sport est à présenter à votre club ou salle de sport au moment de votre
            inscription.
          </p>

          <p>
            Il vous permettra de bénéficier d&apos;une réduction de 50 euros sur le prix de votre
            licence ou abonnement.
          </p>
        </div>

        <div
          className={cn(
            styles['container__qr-block'],
            'fr-p-4w',
            'fr-col-8',
            'fr-grid-row--center',
          )}
        >
          <div>Use max component on QR card component</div>
        </div>
      </div>
    </div>
  );
}

export default Page;

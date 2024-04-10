import ForWhoStep from './components/forWhoStep/ForWhoStep';
import styles from './styles.module.scss';

const EligibilityTest = () => {
  return (
    <div>
      <h1 className={`fr-mt-8w fr-mb-4w ${styles.title}`}>Puis-je bénéficier du Pass Sport?</h1>

      <div className={`fr-mb-8w fr-mx-auto ${styles.background}`}>
        <div className={`fr-py-7w fr-mx-auto ${styles.wrapper}`}>
          <ForWhoStep />
        </div>
      </div>
    </div>
  );
};

export default EligibilityTest;

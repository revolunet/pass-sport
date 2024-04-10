import ForWhoStep from './components/forWhoStep/ForWhoStep';
import styles from './styles.module.scss';

const EligibilityTest = () => {
  return (
    <div>
      <h1>Puis-je bénéficier du Pass Sport ?</h1>

      <div className={styles.background}>
        <div className={styles.wrapper}>
          <ForWhoStep />
        </div>
      </div>
    </div>
  );
};

export default EligibilityTest;

import { SKIP_LINKS_ID } from '@/app/constants/skip-links';
import cn from 'classnames';
import styles from './styles.module.scss';
import GetOrTestChoice from './components/get-or-test-step/GetOrTestStep';

const TestOuCode = () => {
  return (
    <main
      className={cn('fr-pb-4w', styles.main)}
      tabIndex={-1}
      id={SKIP_LINKS_ID.mainContent}
      role="main"
    >
      <div className={cn('fr-pb-4w', 'fr-mx-auto', 'fr-px-2w', styles.background)}>
        <div className={cn('fr-pt-7w', 'fr-mx-auto', styles.wrapper)}>
          <GetOrTestChoice />
        </div>
      </div>
    </main>
  );
};

export default TestOuCode;

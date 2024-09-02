import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import styles from './../../styles.module.scss';
import Question, {
  QUESTION_STYLES,
} from '../../../test-eligibilite-mai/components/Question/Question';

interface Props {}
const GetOrTestChoice = ({}: Props) => {
  return (
    <>
      <p className={cn('fr-pb-2w', styles.paragraph)}>Les champs ci-dessous sont obligatoires*</p>
      <Question
        question={
          <>
            <div className={cn(rootStyles['text--medium'], rootStyles['text--black'])}>
              <p className="fr-text--lg fr-mb-0">Bonjour,</p>
              <p className="fr-text--lg fr-mb-0">Que souhaitez-vous faire ?</p>
            </div>
          </>
        }
        style={QUESTION_STYLES.JUNE_STYLE}
      >
        <div></div>
      </Question>
    </>
  );
};

export default GetOrTestChoice;

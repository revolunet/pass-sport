import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';
import styles from './../../styles.module.scss';

import MissionCards from '../../../../components/mission-cards/MissionCards';

import ButtonChoiceGroup from '../button-choice-group/ButtonChoiceGroup';
import Question from '@/app/v2/test-eligibilite-base/components/Question/Question';

interface Props {}
const GetOrTestChoice = ({}: Props) => {
  return (
    <>
      <Question
        question={
          <>
            <div className={cn(rootStyles['text--medium'], rootStyles['text--black'])}>
              <p className="fr-text--lg fr-mb-0">Bonjour,</p>
              <p className="fr-text--lg fr-mb-0">Que souhaitez-vous faire ?</p>
            </div>
          </>
        }
      >
        <div className="fr-pb-7w">
          <p className={cn('fr-pb-2w', styles.paragraph)}>Choisissez une option : </p>
          <ButtonChoiceGroup />
        </div>
      </Question>

      <MissionCards isUsingSuccessUrls={true} />
    </>
  );
};

export default GetOrTestChoice;

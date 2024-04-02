import PopularityLevel from './PopularityLevel';
import styles from './questionAnswer.module.scss';

interface QuestionAnswer {
  question: string;
  answer: string;
  popularityLevel: 0 | 1 | 2 | 3 | 4 | 5;
}

interface Props {
  questionAnswer: QuestionAnswer;
}

const QuestionAnswer: React.FC<Props> = ({ questionAnswer }) => {
  return (
    <div className="fr-callout">
      <h3 className="fr-callout__title">{questionAnswer.question}</h3>
      <div className={styles.container}>
        <p className="fr-callout__text">{questionAnswer.answer}</p>
        {/* <div className={styles['popularity-container']}>
          <p>Populaire</p>
          <PopularityLevel level={questionAnswer.popularityLevel} />
        </div> */}
      </div>
    </div>
  );
};

export default QuestionAnswer;

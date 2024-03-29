import QuestionAnswer from '@/components/faq/QuestionAnswer';
import TitleHeader from '../../../../components/TitleHeader/TitleHeader';
import styles from './page.module.scss';

export default function Questions() {
  const questionAnswers: QuestionAnswer[] = [
    {
      question: "Le dispositif Pass'Sport de quoi s'agit t'il ?",
      answer:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con laboris nisi ut aliquip ex ea commodo con ',
      popularityLevel: 1,
    },
    {
      question: 'Vous êtes un bénéficiaire ou une famille et vous vous interrogez sur le dispoitif',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
      popularityLevel: 2,
    },
    {
      question:
        'Vous êtes un club, une structure proposant une offre d’activité physique et sportive et vous vous interrogez sur Pass’Sport',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
      popularityLevel: 0,
    },
    {
      question:
        'Vous êtes un acteur de la sphère sportive et vous vous intérrogez sur le dispositif',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
      popularityLevel: 5,
    },
  ];

  return (
    <div className={styles.page}>
      <TitleHeader
        title="Une question?"
        subtitle="Consulté notre FAQ la réponse à votre question s'y trouve peut-être."
      ></TitleHeader>

      <section className={styles.faq}>
        <div className={styles.faq_category_side}>
          <nav className={`fr-summary ${styles.summary}`} role="navigation" aria-labelledby="fr-summary-title">
            <p className="fr-summary__title" id="fr-summary-title">
              CATEGORIES
            </p>
            <ol className="fr-summary__list">
              <li>
                <a className="fr-summary__link" href="#titre-ancre-1">
                  Catégorie Lorem
                </a>
              </li>
              <li>
                <a className="fr-summary__link" href="#titre-ancre-2">
                  Catégorie Lorem
                </a>
              </li>
              <li>
                <a className="fr-summary__link" href="#titre-ancre-3">
                  Catégorie Lorem
                </a>
              </li>
              <li>
                <a className="fr-summary__link" href="#titre-ancre-4">
                  Catégorie Lorem
                </a>
              </li>
              <li>
                <a className="fr-summary__link" href="#titre-ancre-5">
                  Catégorie Lorem
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <div className={styles.faq_questions_side}>
          {questionAnswers.map((qa) => (
            <div key={qa.question} className={styles.faq_questions_side_question}>
              <QuestionAnswer questionAnswer={qa} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

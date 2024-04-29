import PageHeader from '../../../../components/PageHeader/PageHeader';
import EligibilityTestBanner from '../../../../components/eligibility-test-banner/EligibilityTestBanner';
import SocialMediaPanel from '../accueil/components/social-media-panel/SocialMediaPanel';
import ContactForm from './components/ContactForm/ContactForm';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import styles from './styles.module.scss';
import cn from 'classnames';

export default function Questions() {
  const questionAnswers: QuestionAnswer[] = [
    {
      question: "Le dispositif pass Sport de quoi s'agit t'il ?",
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
    <>
      <PageHeader
        title="Une question?"
        subtitle="Consulté notre FAQ la réponse à votre question s'y trouve peut-être."
      ></PageHeader>

      <section className={styles.faq}>
        <div className={styles.faq_category_side}>
          <nav
            className={`fr-summary ${styles.summary}`}
            role="navigation"
            aria-labelledby="fr-summary-title"
          >
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
      <section className={cn('fr-px-3w', styles.contact)}>
        <div>
          <h3>Vous ne trouvez pas de réponse satisfaisante.</h3>
          <p>Contactez-nous directement par e-mail pour que nous puissions trouver une solution</p>
        </div>

        <ContactForm />
      </section>

      <EligibilityTestBanner />
      <SocialMediaPanel />
    </>
  );
}

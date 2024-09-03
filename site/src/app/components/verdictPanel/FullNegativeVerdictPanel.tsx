import VerdictPanel from './VerdictPanel';
import cn from 'classnames';
import rootStyles from '@/app/utilities.module.scss';
import EligibilityCriteriaList from '../eligibility-criteria-list/EligibilityCriteriaList';
import Link from 'next/link';
import { CONTACT_PAGE_QUERYPARAMS } from '@/app/constants/search-query-params';

interface Props {
  isLean: boolean;
}
const FullNegativeVerdictPanel = ({ isLean }: Props) => (
  <VerdictPanel
    title="Nous sommes désolés, d'après les informations que vous nous avez transmises, vous n'êtes pas éligible au pass Sport."
    isSuccess={false}
    isLean={isLean}
  >
    <p
      className={cn(
        'fr-mb-2w',
        'fr-text--lg',
        rootStyles['text--black'],
        rootStyles['text--medium'],
      )}
    >
      Avez-vous vérifié votre éligibilité ? Si non, nous vous invitions à vérifier en réalisant le
      test{' '}
      <Link
        href="/v2/test-eligibilite-base"
        aria-label={"Naviguer vers la page permettant de réaliser un test d'éligibilité"}
      >
        ici
      </Link>
      .
    </p>

    <EligibilityCriteriaList />

    <p className={cn('fr-text--lg', 'fr-text--bold', rootStyles['text--black'])}>
      En cas d&apos;échec persistant, nous vous invitons à{' '}
      <Link
        href={`/v2/une-question?${CONTACT_PAGE_QUERYPARAMS.modalOpened}=1`}
        aria-label="Naviguer vers la page permettant de contacter le support"
      >
        contacter le support
      </Link>{' '}
      pour vous aider en renseignant les informations de votre enfant.
    </p>

    <p className={cn('fr-text--lg', 'fr-text--bold', rootStyles['text--black'])}>
      Vous avez peut-être droit à d&apos;autres aides. N&apos;hésitez pas à vous rapprocher de votre
      région, département ou commune de résidence.
    </p>
  </VerdictPanel>
);

export default FullNegativeVerdictPanel;

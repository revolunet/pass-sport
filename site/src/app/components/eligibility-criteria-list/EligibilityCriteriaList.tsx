import rootStyles from '@/app/utilities.module.scss';
import cn from 'classnames';

const EligibilityCriteriaList = () => {
  return (
    <ul className="fr-ml-2w">
      <li
        className={cn(
          'fr-mb-3w',
          'fr-text--lg',
          rootStyles['text--black'],
          rootStyles['text--medium'],
        )}
      >
        Si vous êtes éligible mais que vous ne parvenez pas à obtenir votre code, vérifiez que les
        informations que vous avez renseignées sont les bonnes, des erreurs peuvent s&apos;y glisser
      </li>
    </ul>
  );
};

export default EligibilityCriteriaList;

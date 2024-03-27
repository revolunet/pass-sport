import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import style from './style.module.scss';

const getClubs = async (): Promise<SportGouvJSONResponse> => {
  const queryString = new URLSearchParams('nom%20is%20not%20null&limit=20');

  const response = await fetch(
    'https://sports-sgsocialgouv.opendatasoft.com/api/explore/v2.1/catalog/datasets/passsports-asso_volontaires/records?+aa' +
      queryString,
  );

  if (!response.ok) {
    return {
      results: [],
      total_count: 0,
    };
  }

  return response.json();
};

export default async function TrouverUnClub() {
  const clubs_response: SportGouvJSONResponse = await getClubs();
  return (
    <div className={style.wrapper}>
      <div>{clubs_response.total_count} clubs labelisés trouvés</div>
      <div className={style.container}>
        {/* <ClubFilterBar></ClubFilterBar> */}
        {clubs_response.results.map((club) => (
          <Card
            key={club.nom}
            className={style.item}
            background
            badge={club.activites.slice(0, 1).map((a) => (
              <Badge key={a} severity="new">
                {a}
              </Badge>
            ))}
            border
            detail={club.adresse + ', ' + club.com_arm_name}
            enlargeLink
            imageAlt="texte alternatif de l’image"
            imageUrl="https://www.systeme-de-design.gouv.fr/img/placeholder.16x9.png"
            linkProps={{
              href: '#',
            }}
            size="medium"
            start={
              <ul className="fr-tags-group">
                <li>
                  <Tag>{club.activites.length} activités</Tag>
                </li>
                {club.handicap === 'Oui' && (
                  <li>
                    <Tag> Handicap</Tag>
                  </li>
                )}
              </ul>
            }
            title={club.nom}
            titleAs="h3"
          />
        ))}
      </div>
    </div>
  );
}

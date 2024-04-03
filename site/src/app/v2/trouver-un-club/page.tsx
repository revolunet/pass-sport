'use client';
import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import style from './style.module.scss';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import { useEffect, useState } from 'react';
import Search from './components/search/Search';

interface SearchParam {
  nom?: string;
}

const getClubs = async (param?: SearchParam): Promise<SportGouvJSONResponse> => {
  const queryString: URLSearchParams = new URLSearchParams('nom%20is%20not%20null&limit=20');

  if (!!param?.nom) {
    queryString.append('where', `nom like '%${param.nom}%'`);
  }

  const response = await fetch(
    'https://sports-sgsocialgouv.opendatasoft.com/api/explore/v2.1/catalog/datasets/passsports-asso_volontaires/records?' +
      queryString,
  );

  if (!response.ok) {
    console.error('Status from sports-sgsocialgouv.opendatasoft.com' + response.status);
    console.error(response.body);
    return {
      results: [],
      total_count: 0,
    };
  }

  return response.json();
};

export default function TrouverUnClub() {
  const [clubs, setClubs] = useState<SportGouvJSONResponse | undefined>();
  const [clubParams, setClubParams] = useState<SearchParam | undefined>({});

  useEffect(() => {
    getClubs(clubParams).then((res) => setClubs(res));
  }, [clubParams]);

  return (
    <div>
      <PageHeader
        title="Trouver un club adhérent"
        subtitle={`Plus de ${clubs ? clubs.total_count : 0} clubs labelisés trouvés`}
      ></PageHeader>
      <Search onTextSearch={(text: string) => setClubParams({ nom: text.toUpperCase() })}></Search>
      <div className={style.wrapper}>
        <div className={style.container}>
          {clubs &&
            clubs.results.map((club) => (
              /** @ts-ignore */
              <Card
                key={club.nom}
                className={style.item}
                background
                badge={
                  !!club.activites &&
                  club.activites.slice(0, 1).map((a) => (
                    <Badge key={a} severity="new">
                      {a}
                    </Badge>
                  ))
                }
                imageAlt=""
                border
                detail={club.adresse + ', ' + club.com_arm_name}
                enlargeLink
                linkProps={{
                  href: '#',
                }}
                size="medium"
                start={
                  <ul className="fr-tags-group">
                    {!!club.activites && club.activites.length > 0 && (
                      <li>
                        <Tag>{club.activites.length} activités</Tag>
                      </li>
                    )}

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
    </div>
  );
}

'use client';
import { Badge } from '@codegouvfr/react-dsfr/Badge';
import { Card } from '@codegouvfr/react-dsfr/Card';
import { Tag } from '@codegouvfr/react-dsfr/Tag';
import style from './style.module.scss';
import PageHeader from '../../../../components/PageHeader/PageHeader';
import { useEffect, useState } from 'react';
import Search from './components/search/Search';
import { SqlSearchParams, getClubs } from './agent';
import { usePathname } from 'next/navigation';
import EligibilityTestBanner from './components/eligibilityTestBanner/EligibilityTestBanner';

export default function TrouverUnClub() {
  const pathName = usePathname();
  const [clubs, setClubs] = useState<SportGouvJSONResponse | undefined>();
  const [clubParams, setClubParams] = useState<SqlSearchParams | undefined>({});

  useEffect(() => {
    getClubs(clubParams).then((res) => setClubs(res));
  }, [clubParams]);

  return (
    <div>
      <PageHeader
        title="Trouver un club adhérent"
        subtitle={`Plus de ${clubs ? clubs.total_count : 0} clubs labelisés trouvés`}
      ></PageHeader>
      <Search
        onTextSearch={(text: string) =>
          setClubParams({ nom: `nom like '%${text.toUpperCase()}%'` })
        }
      ></Search>
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
                  href: `${pathName}/${club.nom}`,
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
      <EligibilityTestBanner />
    </div>
  );
}

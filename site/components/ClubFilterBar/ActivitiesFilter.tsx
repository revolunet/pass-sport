import { Select } from '@codegouvfr/react-dsfr/SelectNext';

async function getAssociationActivities() {
  const res = await fetch(
    'https://sports-sgsocialgouv.opendatasoft.com/api/explore/v2.1/catalog/datasets/passsports-asso_volontaires/records?select=activites&where=activites%20is%20not%20null&group_by=activites&limit=100',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const response: SportGouvJSONResponse = await res.json();

  return response.results.map((a) => a.activites).reduce((acc, val) => acc.concat(val), []);
}

export default async function ActivitiesFilter() {
  const association_activities: string[] = await getAssociationActivities();
  // const [selectedSport, setSelectedSport];
  return (
    <Select
      label="Activité"
      placeholder="Sport"
      //   nativeSelectProps={{
      //     selectedSport,
      //     onChange: (event) => setSelectedSport(event.target.value),
      //   }}
      options={association_activities.map((value) => ({
        value,
        label: `${value}`,
      }))}
    />
  );
}

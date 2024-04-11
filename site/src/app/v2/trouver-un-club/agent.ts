export interface SqlSearchParams {
  nom?: string;
}

export const getClubs = async (param?: SqlSearchParams): Promise<SportGouvJSONResponse> => {
  const queryString: URLSearchParams = new URLSearchParams('nom%20is%20not%20null&limit=20');

  if (param?.nom) {
    queryString.append('where', param.nom);
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

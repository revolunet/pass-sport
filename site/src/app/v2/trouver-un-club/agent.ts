export interface SqlSearchParams {
  nom?: string;
  limit?: number;
  offset?: number;
}

export const getClubs = async (param: SqlSearchParams): Promise<SportGouvJSONResponse> => {
  const queryString: URLSearchParams = new URLSearchParams();

  queryString.append('limit', param.limit ? param.limit.toString() : '20');
  queryString.append('offset', param.offset ? param.offset.toString() : '0');
  queryString.append('where', `nom is not null ${param?.nom ? `AND ${param.nom}` : ''} `);

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

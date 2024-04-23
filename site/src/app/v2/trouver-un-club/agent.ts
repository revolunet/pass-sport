export interface SqlSearchParams {
  nom?: string;
  limit?: number;
  offset: number;
}

export const getClubs = async (param: SqlSearchParams): Promise<SportGouvJSONResponse> => {
  const baseUrl =
    'https://sports-sgsocialgouv.opendatasoft.com/api/explore/v2.1/catalog/datasets/passsports-asso_volontaires/records';

  const params: URLSearchParams = new URLSearchParams();
  params.append('limit', param.limit ? param.limit.toString() : '20');
  params.append('offset', param.offset.toString());
  params.append('where', `nom is not null${param?.nom ? ` AND ${param.nom}` : ''}`);

  const url = new URL(baseUrl);
  url.search = params.toString();
  const response = await fetch(url);

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

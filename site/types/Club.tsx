interface SportGouvJSONResponse {
  results: Club[];
  total_count: number;
}

interface Club {
  nom: string;
  cp: string;
  activites: string[];
  adresse: string;
  com_arm_name: string;
  handicap: 'Oui' | 'Non';
}

export type CrispArticle = {
  article_id: string;
  title: string;
  status: 'published';
  visibility: 'visible';
  featured: false;
  visits: number;
  order: number;
  url: string;
  created_at: number;
  updated_at: number;
  published_at: number;
  category: {
    category_id: string;
    name: string;
    color: string | null;
    section: {
      section_id: string;
      name: string;
    } | null;
  } | null;
};

export type CrispFullArticle = CrispArticle & {
  content: string;
};

export enum Rating {
  HELPFUL = 'helpful',
  UNHELPFUL = 'unhelpful',
}

export type Article = {
  id: string;
  title: string;
  order: number;
  url: string;
  createdAt: number;
  updatedAt: number;
  content: string;
};

export type CategoryWithArticles = {
  id: string;
  name: string;
  articles: Article[];
};

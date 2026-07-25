export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
  content: string;
}

export interface BlogPostMeta {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  tags: string[];
}

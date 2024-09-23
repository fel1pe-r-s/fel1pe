export interface RepoData {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  tags: string[];
  link: string | null;
}

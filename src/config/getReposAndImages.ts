import axios from "axios";

interface RepoData {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string;
  tags: string[];
}

export async function getReposAndImages(): Promise<RepoData[]> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Substitua pelo seu token

  // Passo 1: Listar repositórios
  const repos = await axios.get("https://api.github.com/user/repos", {
    headers: { Authorization: `token ${token}` },
  });

  const repoData: RepoData[] = [];

  for (const repo of repos.data) {
    const { id, name: title, description } = repo;

    // Passo 2: Construir a URL da imagem
    const imageUrl = `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/preview/image.gif`;

    // Passo 3: Verificar se a imagem existe
    try {
      await axios.get(imageUrl); // Tenta acessar a imagem
      console.log(`Image found for ${repo.name}`);

      // Passo 4: Obter as tags (tópicos do repositório)
      let tags: string[] = [];
      try {
        const topics = await axios.get(
          `https://api.github.com/repos/${repo.owner.login}/${repo.name}/topics`,
          {
            headers: {
              Authorization: `token ${token}`,
              Accept: "application/vnd.github.mercy-preview+json",
            },
          }
        );
        tags = topics.data.names; // Tópicos retornam em "names"
      } catch (error) {
        console.log(`No tags found for ${repo.name}, ${error}`);
      }

      // Passo 5: Adicionar repositório ao array final se a imagem existir
      repoData.push({
        id,
        title,
        description,
        imageUrl, // URL para visualização direta
        tags,
      });
    } catch (error) {
      console.log(`No image found for ${repo.name}, ${error} skipping...`);
    }
  }

  return repoData;
}

getReposAndImages().then((repos) => console.log(repos));

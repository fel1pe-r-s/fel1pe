/* eslint-disable @typescript-eslint/no-unused-vars */
import { RepoData } from "@/@types/repoData";
import axios from "axios";

async function fetchImage(imageUrl: string): Promise<boolean> {
  try {
    await axios.get(imageUrl);
    return true;
  } catch {
    return false;
  }
}

async function fetchTags(
  owner: string,
  repoName: string,
  token: string
): Promise<string[]> {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${owner}/${repoName}/topics`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: "application/vnd.github.mercy-preview+json",
        },
      }
    );
    return response.data.names;
  } catch {
    return [];
  }
}

export async function getReposAndImages(): Promise<RepoData[]> {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const reposResponse = await axios.get("https://api.github.com/user/repos", {
    headers: { Authorization: `token ${token}` },
  });

  const repoData: RepoData[] = [];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const repoPromises = reposResponse.data.map(async (repo: any) => {
    const { id, name: title, description, html_url: link, owner } = repo;
    const imageUrl = `https://raw.githubusercontent.com/${owner.login}/${repo.name}/main/preview/image.gif`;

    const imageExists = await fetchImage(imageUrl);
    if (!imageExists) {
      return;
    }

    const tags = await fetchTags(owner.login, repo.name, token as string);

    return {
      id,
      title,
      description,
      imageUrl,
      tags,
      link,
    };
  });
  const results = await Promise.allSettled(repoPromises);
  results.forEach((result) => {
    if (result.status === "fulfilled" && result.value) {
      repoData.push(result.value);
    }
  });

  return repoData;
}

import axios from "axios";

const githubApi = axios.create({
   baseURL: "https://api.github.com",
    headers: {
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28'
    }
  });


export async function getUserReposistories(username) {
  const response = await githubApi.get(`/users/${username}/repos`);
  return response.data;
}

export async function getRepositoriesIssues(username, repo) {
  const response = await githubApi.get(`/repos/${username}/${repo}/issues`);
  return response.data;
}
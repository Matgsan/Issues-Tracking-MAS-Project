import axios from "axios";

const githubApi = axios.create({
   baseURL: "https://api.github.com",
    headers: {
        'Content-Type': 'application/json',
        'X-GitHub-Api-Version': '2022-11-28'
    }
  });

export default githubApi;

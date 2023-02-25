import * as React from 'react';
import gitHub from './GitHub.png'

export const GitHubButton = () => {
  const login = () => {
    const CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID ;
    const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user:email`;
    window.location.assign(url);
  }

  return <img className="gitHub-style" src={gitHub} alt="GitHub-icon" onClick={login}/>

}
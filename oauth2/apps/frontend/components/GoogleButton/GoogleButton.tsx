import * as React from "react";
import google from './google.png'

export const GoogleButton = () => {
  const login = (): void => {
    const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const REDIRECT_URL = process.env.REACT_APP_GOOGLE_REDIRECT_URL
    const scope = 'email profile';
    const url = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${REDIRECT_URL}&client_id=${CLIENT_ID}`;
    window.location.assign(url);
  };

  return <img width={100} height={100} className="google-style" src={google} alt="Google" onClick={login} />;
}
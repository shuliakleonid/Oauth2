import {useEffect} from 'react';

import {useSearchParams} from 'react-router-dom';
import {SOCIAL_NETWORK_LOGIN_TYPE} from "../constants";
import axios from "axios";


export const useOAuthCode = (type: SOCIAL_NETWORK_LOGIN_TYPE): void => {
  const fetchUserByVk = (code: string) => {
    axios.post('http://localhost:5002/api/auth/vk', {code}).then(r => {
      localStorage.setItem('user', JSON.stringify(r.data))
      window.location.assign('/user')
    })
  }
  const fetchUserByGithub = (code: string) => {
    axios.post('http://localhost:5002/api/auth/github', {code}).then(r => {
      localStorage.setItem('user',JSON.stringify(r.data))
      window.location.assign('/user')
    })
  }
  const fetchUserByGoogle = (code: string) => {
    axios.post('http://localhost:5002/api/auth/google', {code}).then(r => {
      localStorage.setItem('user', JSON.stringify(r.data));
      window.location.assign('/user')
    })
  }


  const [searchParams] = useSearchParams(window.location.href);
  const code = searchParams.get('code');

  useEffect(() => {
    try {
      switch (type) {
        case SOCIAL_NETWORK_LOGIN_TYPE.VK:
          fetchUserByVk(code!);
          break;
        case SOCIAL_NETWORK_LOGIN_TYPE.GIT_HUB:
          fetchUserByGithub(code!)
          break;
        case SOCIAL_NETWORK_LOGIN_TYPE.GOOGLE: {
          fetchUserByGoogle(code!)
          break;
        }
        default:
          break;
      }
    } catch (error) {
      console.log("-> error", error);
    }
  }, []);
};

import * as React from "react";
import {SOCIAL_NETWORK_LOGIN_TYPE} from "../constants";
import {useOAuthCode} from "../hooks/useOAuthCode";
import {Link} from "react-router-dom";

export const VkAuthAccess = () => {
  useOAuthCode(SOCIAL_NETWORK_LOGIN_TYPE.VK);

  return <div>
    <div>Loading .....</div>
    <Link to='/singin'>Sing in</Link>
  </div>;
};

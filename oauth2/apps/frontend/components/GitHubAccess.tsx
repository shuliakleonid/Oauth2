import {useOAuthCode} from "../hooks/useOAuthCode";
import {SOCIAL_NETWORK_LOGIN_TYPE} from "../constants";
import * as React from "react";
import {Link} from "react-router-dom";

export const GithubAccess = () => {
    useOAuthCode(SOCIAL_NETWORK_LOGIN_TYPE.GIT_HUB);

    return <div>
        <div>Loading .....</div>
        <Link to='/singin'>Sing in</Link>
    </div>;
}
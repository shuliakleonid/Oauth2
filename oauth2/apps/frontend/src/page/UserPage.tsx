import * as React from "react";
import {Link} from "react-router-dom";

export const UserPage = () => {
  // @ts-ignore
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <div>

      <>Hello {user.name}</>
      <img src={user.avatar_url} alt=""/>
      <div>You email is {user.email}</div>
      <Link to={'/singin'}> SING IN</Link>
    </div>
  );
}
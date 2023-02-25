import * as React from "react";
import {LayoutDefault} from "../../components/LayoutDefault/LayoutDefault";
import {VKButton} from "../../components/VKButton/VKButton";
import {GitHubButton} from "../../components/GitHubButton/GitHubButton";
import {GoogleButton} from "../../components/GoogleButton/GoogleButton";
// import styles from './'

export const SingInPage = () => {
  return (
    <LayoutDefault>
      <div >
        <VKButton />
      </div>
      <div>
        <GitHubButton/>
      </div>
      <div
      style={{width:'200px',height:'200px'}}><GoogleButton/></div>
    </LayoutDefault>
  );
}
import * as React from "react";
import "./App.css";
import { CounterButton, NewTabLink } from "ui";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./page/HomePage";
import {SingInPage} from "./page/SingInPage";
import {ROUTES} from "../constants";
import {VkAuthAccess} from "../components/VKAuthAccess";
import {GithubAccess} from "../components/GitHubAccess";
import {GoogleAuthAccess} from "../components/GoogleAuthAccess";
import {UserPage} from "./page/UserPage";
// import {VkAuthAccess} from "../components/VKAuthAccess";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HomePage/>}  />
      <Route path={'/singin'} element={<SingInPage/>}  />
      <Route path={ROUTES.VK_REDIRECT} element={<VkAuthAccess />} />
      <Route path={ROUTES.GIT_HUB_REDIRECT} element={<GithubAccess />} />
      <Route path={ROUTES.GOOGLE_REDIRECT} element={<GoogleAuthAccess />} />
      <Route path={'/user'} element={<UserPage/>}  />

    </Routes>
  );
}

export default App;

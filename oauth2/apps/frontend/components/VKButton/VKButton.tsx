import * as React from 'react';
import vk from './img.png'
import styles from './VKButton.module.scss'

export const VKButton = () => {
  const login = (): void => {
    const CLIENT_ID = process.env.REACT_APP_VK_CLIENT_ID
    const REDIRECT_URL = process.env.REACT_APP_VK_REDIRECT_URL
    const url = `https://oauth.vk.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&display=popup&scope=email&response_type=code&v=5.131`;
    window.location.assign(url);
  };
  return (
    <div className={styles["vk-button"]}>
      <button className={styles["vk-button__input"]} onClick={login}>
        <img
          src={vk}
          alt="vk logo"
          className={styles["vk-button__input-icon"]}
        />
        Войти через Вконтакте
      </button>
    </div>
  );
}
import * as React from "react";
import {Link} from "react-router-dom";
import styles from './LayoutDefault.module.scss'

export const LayoutDefault = (props:any) => {
  return (
    <div className={styles["layout-default"]}>
      <div className={styles["layout-default__links"]}>
        <Link to="/">Главная</Link>
        <Link to="/singin">Sing in</Link>
        {/*{user ? (*/}
        {/*  <Link to="/user">Мой профиль</Link>*/}
        {/*) : (*/}
        {/*  <Link to="/signin">Войти</Link>*/}
        {/*)}*/}
      </div>
      <div className={styles["layout-default__content"]}>{props.children}</div>
    </div>
  );
}
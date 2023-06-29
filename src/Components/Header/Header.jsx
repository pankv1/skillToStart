import React from "react";

import styles from "./Header.module.scss";

import logo from "./../../assets/logo.png";
import cart from "./../../assets/shopping-bag.svg";
import vector from "./../../assets/Vector.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <a className={styles.logo} href="#">
        <img src={logo} />
      </a>
      <nav className={styles.navigation}>
        <a className={styles.link} href="#">
          Главная
        </a>
        <a className={styles.link} href="#">
          Релокация
        </a>
        <a className={styles.link} href="#">
          Курсы и мастер-классы
        </a>
        <a className={styles.link} href="#">
          Про нас{" "}
        </a>
        <a className={styles.link} href="#">
          Контакты
        </a>
        <a className={styles.link} href="#">
        Блог
        </a>
      </nav>
      <button className={styles.login}>Войти</button>
      <button className={styles.language}>
        RU
        <span>
          <img className={styles.languagechoice} src={vector} />
        </span>
      </button>
      <button className={styles.cart}>
        <img className={styles.cartimg} src={cart} />
      </button>
      </div>
    </header>
  );
};

export default Header;

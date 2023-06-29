import React from "react";

import styles from "./Footer.module.scss";

import logo from "../../assets/logo.png";
import facebook from "../../assets//facebook.svg";
import instagram from "../../assets//instagram.svg";
import telegram from "../../assets//telegram.svg";
import youtube from "../../assets//youtube.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <a href="#">
          <img src={logo} />
        </a>
        <div className={styles.contactinfo}>
          <p>Contact Info</p>
          <a href="#">skilltostart@gmail.com</a>
        </div>
        <p className={styles.copyright}>© Skill to Start 2023 All rights reserved</p>
        <div className={styles.social}>
          <a href="#">
            <img className={styles.socialicon} src={facebook} />
          </a>
          <a href="#">
            <img className={styles.socialicon} src={youtube} />
          </a>
          <a href="#">
            <img className={styles.socialicon} src={instagram} />
          </a>
          <a href="#">
            <img className={styles.socialicon} src={telegram} />
          </a>
        </div>
      </nav>
      <div className={styles.formblock}>
        <div className={styles.content}>
          <h3 className={styles.contacts}>Контакты</h3>
          <div className={styles.form}>
            <h5 className={styles.email}>Email</h5>
            <form action="">
              <input
                className={styles.input}
                type="text"
                placeholder="Напиши свою почту..."
              />
              <button className={styles.submitbtn}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

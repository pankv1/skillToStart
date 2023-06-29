import styles from "./WhatWeCan.module.scss";

import React from "react";

import vector from "../../../../assets/vector2.svg";
import Amsterdamimg from "../../../../assets/Amsterdam.png";
import leafIcon from "../../../../assets/leaf.svg";
import sendIcon from "../../../../assets/send.svg";
import mapIcon from "../../../../assets/map.svg";
import likeIcon from "../../../../assets/like.svg";
import flowers from "../../../../assets/flowers.svg";
import plane from "../../../../assets/plane.svg";

const WhatWeCan = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Что мы можем?</h2>
      <span className={styles.rectangle}></span>
      <ul>
        <li className={styles.listItem}>
          внж по стартап и предпринимательской визе
        </li>
        <li className={styles.listItem}>
          студенческая виза, ориентационный год
        </li>
        <li className={styles.listItem}>
          релокация бизнеса и эмиграция с семьей в Европу
        </li>
        <li className={styles.listItem}>
          мастер классы и онлайн курсы по подготовке заявки на стартап визу
        </li>
        <li className={styles.listItem}>
          получение европейских грантов на бизнес
        </li>
      </ul>
      <img className={styles.vector} src={vector} alt="" />

      <div className={styles.flowers}>
        <img src={flowers} alt="" />
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <img className={styles.amsterdamimg} src={Amsterdamimg} alt="" />
          <p className={styles.city}>Amsterdam |</p>
          <div className={styles.icons}>
            <button className={styles.icon}>
              <img src={leafIcon} alt="" />
            </button>
            <button className={styles.icon}>
              <img src={mapIcon} alt="" />
            </button>
            <button className={styles.icon}>
              <img src={sendIcon} alt="" />
            </button>
          </div>
        </div>
        <button className={styles.likebutton}>
          <img src={likeIcon} alt="" />
        </button>
      </div>
      <div className={styles.plane}>
        <img src={plane} alt="" />
      </div>
    </section>
  );
};

export default WhatWeCan;

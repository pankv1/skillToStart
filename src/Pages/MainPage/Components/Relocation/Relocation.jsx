import React from "react";
import styles from "./Relocations.module.scss";

import canal from "../../../../assets/canal.png";

const Relocation = () => {
  return (
    <section className={styles.root}>
      <img src={canal} />
      <h1 className={styles.title}>Релокация в Нидерланды</h1>
      <div className={styles.subtitleblock}>
        <h3 className={styles.subtitle}>
          ВСЕ ВИДЫ ВНЖ СОПРОВОЖДЕНИЕ СТАРТАПОВ И БИЗНЕСА
        </h3>
      </div>
      <div className={styles.buttonbox}>
        <button className={styles.button}>Записаться на консультацию</button>
      </div>
    </section>
  );
};

export default Relocation;

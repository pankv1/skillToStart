import styles from "./Results.module.scss";

import React from "react";


import circlebg from '../../../../assets/circlebg.png'
import startnow from '../../../../assets/startnow.svg'
import startvector from '../../../../assets/startvector.svg'

const Results = () => {
  return (
    <section className={styles.root}>
      <h3 className={styles.title}>НАШИ РЕЗУЛЬТАТЫ ЗА ПОСЛЕДНИЙ ГОД</h3>
      <div className={styles.container}>
        <div className={`${styles.circlecontainer} ${styles.firstcircle}`}>
          <div className={styles.content}>
          <h5 className={styles.circletitle}>Более 40 стартапов </h5>
          <p>
            получили индивидуальную помощь от нашей команды по вопросам
            получения внж по стартап визе, грантов и инвестиций
          </p>
          </div>
        </div>
        <div className={styles.circlebg}><img src={circlebg} /></div>
        <div className={`${styles.circlecontainer} ${styles.secondcircle}`}>
          <div className={styles.content}>
          <h5 className={styles.circletitle}>Привлекли финансирование</h5>
          <p>
            на сумму более 350.000 евро через гранты в стартапы на ранней
            стадии.
          </p>
          </div>
        </div>
        <div className={`${styles.circlecontainer} ${styles.thirdcircle}`}>
          <div className={styles.content}>
          <h5 className={styles.circletitle}>Более 5 лет опыта </h5>
          <p>
            от идеи до регистрации компании, получения грантов и субсидий,
            оформления международных патентов, участия в международных
            акселлерационных программах.
          </p>
          </div>
        </div>
        <div className={`${styles.circlecontainer} ${styles.fourthcircle}`}>
          <div className={styles.content}>
          <h5 className={styles.circletitle}>90% клиентов получают положительный результат</h5>
          <p>
            Успешно оформляем стартап-визы в Нидерланды, перевозим действующие
            бизнесы и стартап-команды.
          </p>
          </div>
        </div>
        <button className={styles.consultbutton}>Записаться на консультацию</button>
        <button className={styles.showbutton}>Посмотреть программы</button>
      </div>
      <div className={styles.startsvg}>
      <img  src={startnow} />
      <img className={styles.startvector} src={startvector} />
      </div>
    </section>
  );
};

export default Results;

import styles from "./Reviews.module.scss";

import React from "react";

import avatar1 from "../../../../assets/revavatar1.png";
import avatar2 from "../../../../assets/revavatar2.png";
import star from "../../../../assets/starsvg.svg";
import leftarrow from "../../../../assets/buttonleftarrow.svg";
import rightarrow from "../../../../assets/buttonrightarrow.svg";

import buttonvector from "../../../../assets/buttonvector.svg";
import vector from "../../../../assets/infvector.svg";
import moresvg from "../../../../assets/infmore.svg";

import planes from "../../../../assets/lotofplanes.svg";

const Reviews = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <button className={styles.button}>
          Информация о Нидерландах{" "}
          <span>
            <img className={styles.buttonvector} src={buttonvector} />
          </span>
        </button>
        <img className={styles.vectorsvg} src={vector} />
        <img className={styles.moresvg} src={moresvg} />
        <div className={styles.reviews}>
          <div className={styles.review}>
            <div className={styles.content}>
              <img className={styles.avatar} src={avatar1} />
              <p className={styles.description}>
                "Курс дал возможность поработать над идеей с
                бизнес-инструментами. Все это в голове было, но структурировать
                это и заставить себя сделать презентацию было невозможно. Я
                считаю, что этот курс был очень полезный. Теперь меня есть много
                разных наработок для разных областей."
              </p>
              <div className={styles.rating}>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
              </div>
              <h5 className={styles.clientname}>Йоханн Н.</h5>
              <p className={styles.subtitle}>Инструменты для стартапа.</p>
            </div>
          </div>

          <div className={styles.review}>
            <div className={styles.content}>
              <img className={styles.avatar} src={avatar2} />
              <p className={styles.description}>
                "Большое спасибо команде SkillToStart за помощь в подготовке
                документов по стартап-визе. Давно слежу за новостями в этом
                канале и смотрю вебинары. Решила взять консультацию после того,
                как нашла своего фасилитатора, т.к. было очень много вопросов
                что делать дальше. Мне подробно рассказали о том, какие должны
                быть мои следующие шаги, какие документы необходимо подготовить,
                какие актуальные требования по доходу на меня и семью, кроме
                того помогли с лигализацией и переводом документов. Мои самые
                наилучшие пожелания SkillToStart, и еще раз спасибо!"
              </p>
              <div className={styles.rating}>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
                <span>
                  <img src={star} />
                </span>
              </div>
              <h5 className={styles.clientname}>Ирина Я.</h5>
              <p className={styles.subtitle}>Индивидуальная консультация</p>
            </div>
          </div>
        </div>
        <div className={styles.pagination}>
          <button className={styles.buttonpag}>
            <img src={leftarrow} />
          </button>
          <button className={styles.buttonpag}>
            <img src={rightarrow} />
          </button>
        </div>
      </div>
      <img src={planes} />
    </section>
  );
};

export default Reviews;

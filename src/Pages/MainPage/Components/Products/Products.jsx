import styles from "./Products.module.scss";

import React from "react";

import productVector from "../../../../assets/productVector.svg";
import products1 from "../../../../assets/products1.png";
import products2 from "../../../../assets/products2.png";
import products3 from "../../../../assets/products3.png";
import products4 from "../../../../assets/products4.png";

import svg1 from "../../../../assets/productsvg1.svg";
import svg2 from "../../../../assets/productsvg2.svg";
import svg3 from "../../../../assets/productsvg3.svg";
import planes from "../../../../assets/planesproducts.svg";

const Products = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <h3 className={styles.title}>Наши продукты</h3>
        <div className={styles.container}>
          <img src={products1} />
          <div>
            <h4 className={styles.producttitle}>
              РЕЛОКАЦИЯ в Нидерланды без стресса
            </h4>
            <p className={styles.description}>
              Индивидуальное сопровождение по стартап и бизнес визе в
              Нидерланды. Помогаем перевезти семью в безопасную стабильную
              страну. Для тех, кому нужно все и сразу. Мы сделаем все за вас!
              Для команд и одиночек.
            </p>
            <button className={styles.button}>
              Подробнее{" "}
              <span>
                <img className={styles.productvector} src={productVector} />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <h4 className={styles.producttitle}>
              Эффективный онлайн курс по стартап визе - ИНСТРУМЕНТЫ ДЛЯ СТАРТАПА
            </h4>
            <p className={styles.description}>
              Хотите открыть бизнес в ЕС и переехать, но не знаете как
              подготовить заявку и какие документы вложить? На курсе за 6 недель
              научим готовить успешную заявку для стартап визы в Нидерланды.
            </p>
            <button className={styles.button}>
              Подробнее{" "}
              <span>
                <img className={styles.productvector} src={productVector} />
              </span>
            </button>
          </div>
          <img src={products2} />
          <img className={styles.planessvg} src={planes} />
        </div>

        <div className={styles.container}>
          <img src={products3} />
          <div>
            <h4 className={styles.producttitle}>ИНДИВИДУАЛЬНЫЕ КОНСУЛЬТАЦИИ</h4>
            <p className={styles.description}>
              Идеи для бизнеса в Нидерландах, виды внж в Нидерландах, как
              получить внж , стартап виза, презентация стартапа, переезд в
              Европу, релокация бизнеса, гранты в Нидерландах и инвестиции,
              сопровождение иммиграции в Нидерланды.
            </p>
            <button className={styles.button}>
              Подробнее{" "}
              <span>
                <img className={styles.productvector} src={productVector} />
              </span>
            </button>
          </div>
        </div>

        <div className={styles.container}>
          <div>
            <h4 className={styles.producttitle}>
              Авторские онлайн МАСТЕР-КЛАССЫ
            </h4>
            <p className={styles.description}>
              Мастер-классы: как подготовиться к подаче на стартап визу и
              презентации стартап проекта европейским инвесторам. Как привлечь
              гранты в Европе на развитие бизнеса. Мастер класс по составлению
              бизнес плана для стартапа. БОНУС: Рабочие шаблоны и формы к
              каждому мастер-классу.
            </p>
            <button className={styles.button}>
              Подробнее
              <span>
                <img className={styles.productvector} src={productVector} />
              </span>
            </button>
          </div>
          <img src={products4} />
        </div>
      </div>
      <img className={styles.svgvector} src={svg1} />
      <img className={styles.svgteams} src={svg2} />
      <img className={styles.svgclients} src={svg3} />
    </section>
  );
};

export default Products;

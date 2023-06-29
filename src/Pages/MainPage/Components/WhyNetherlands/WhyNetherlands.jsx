import styles from "./WhyNetherlands.module.scss";

import React from "react";

const WhyNetherlands = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Почему Нидерланды?</h2>
      <div className={styles.content}>
        <div className={styles.reasonblock}>
          <h5 className={styles.resnumber}>1</h5>
          <h5 className={styles.reasontitle}>Инвестиции</h5>
          <p className={styles.description}>
            Самая конкурентоспособная экономика в Европе в соответствии с WEF
            Competitiveness Index и одна из лучших стран для инвестиций в
            бизнес.
          </p>
          <span className={styles.stick}></span>
        </div>

        <div className={styles.reasonblock}>
          <h5 className={styles.resnumber}>2</h5>
          <h5 className={styles.reasontitle}>Жизнь</h5>
          <p className={styles.description}>
            1 место в мире по индексу качества жизни. Одна из самых длинных
            средних продолжительностей жизни в мире - 78 лет (мужчины) и 82 года
            (женщины).
          </p>
          <span className={styles.stick}></span>
        </div>

        <div className={styles.reasonblock}>
          <h5 className={styles.resnumber}>3</h5>
          <h5 className={styles.reasontitle}>Ворота в Европу</h5>
          <p className={styles.description}>
            Нидерланды расположены в континентальной Европе и имеют доступ к 170
            миллионам потребителей в пределах 500 км и 244 миллионам
            потребителей в пределах 1000 км.
          </p>
        </div>

        <div className={styles.reasonblock}>
          <h5 className={styles.resnumber}>4</h5>
          <h5 className={styles.reasontitle}>Инновации</h5>
          <p className={styles.description}>
            Лидер в области цифровых технологий. Согласно Глобальному
            инновационному индексу (GII) 2021 года, Нидерланды занимают 6 место
            в мире по инновациям.
          </p>
          <span className={styles.stick}></span>
        </div>

        <div className={styles.reasonblock}>
          <h5 className={styles.resnumber}>5</h5>
          <h5 className={styles.reasontitle}>Уровень счастья</h5>
          <p className={styles.description}>
            Вполне счастлив - 55% населения Очень счастлив - 40% населения.
          </p>
          <span className={styles.stick}></span>
        </div>

        <div className={styles.reasonblock}>
          <h5 className={styles.resnumber}>6</h5>
          <h5 className={styles.reasontitle}>Понятная коммуникация</h5>
          <p className={styles.description}>
            90% населения Нидерландов свободно говорит по-английски. Нет
            необходимости обязательно учить голландский язык.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNetherlands;

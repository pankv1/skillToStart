import styles from "./ForClients.module.scss";

import React from "react";

import avatar1 from "../../../../assets/Avatar1.png";
import avatar2 from "../../../../assets/Avatar2.png";
import avatar3 from "../../../../assets/Avatar3.png";

const ForClients = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Для кого?</h2>
      <div className={styles.container}>
        <div className={styles.clientcontainer}>
          <h5 className={styles.revtitle}>
            Креативно мыслящие люди с предпринимательской жилкой. Даже если у
            вас еще нет идеи и команды - приходите к нам!
          </h5>
          <div className={styles.content}>
            <img className={styles.clientpicture} src={avatar1} alt="" />
            <p className={styles.description}>
              Вот решила переехать - самый простой вариент стартап виза, значит
              нужен проект, к которому присоединюсь и которому нужна европейская
              экспансия. Так вот где его взять? Если вы хотите найти театралов,
              то что вы делаете? Идете в театр. Хотите найти интересный проект?
              Тусите там, где есть стартапы. Я нашла партнера и проект на курсе
              по Стартап визе в Голландию. То есть понимаете, да? Я сначала
              пришла и записалась на курс, а потом уже, "по дороге" и проект
              нашелся:) ." Таисия К.
            </p>
          </div>
        </div>

        <div className={styles.clientcontainer}>
          <h5 className={styles.revtitle}>
            Cтартапы на ранней стадии и предприниматели с инновационной идеей.
            Выход на европейский рынок.
          </h5>
          <div className={styles.content}>
            <img className={styles.clientpicture} src={avatar2} alt="" />
            <p className={styles.description}>
              "Курс помог сформулировать концепцию стартапа из абстрактных идей.
              Андрей Д.
            </p>
          </div>
        </div>

        <div className={styles.clientcontainer}>
          <h5 className={styles.revtitle}>
            Предприниматели с работающим бизнесом и топ менеджеры с идеей для
            бизнеса. Масштабирование на рынок ЕС.
          </h5>
          <div className={styles.content}>
            <img className={styles.clientpicture} src={avatar3} alt="" />
            <p className={styles.description}>
              "Преподаватели помогали не просто правильно подготовить документы,
              а по сути придумать стартап, докрутить из тех идей, что есть."
              Павел Г.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClients;

import styles from "./BusinessInNetherlands.module.scss";

import React from "react";

import city from "../../../../assets/businesscity.png";

const BusinessInNetherlands = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h3 className={styles.title}>Бизнес в Нидерландах</h3>
        <p className={styles.description}>
          Нидерланды занимают <span className={styles.firstplace}>1 место</span>{" "}
          в мире по индексу качества жизни. Самая конкурентноспособная экономика
          Европы, отсутствие бюрократии и коррупции, совершенная образовательная
          система и толерантность и стабильность во всех сферах. Все это делает
          переезд в эту страну заветной и вполне реальной мечтой.
        </p>
        <p className={styles.description}>
          А в качестве бонуса вы получаете потрясающие ландшафты, самую большую
          продолжительность жизни в Европе, самых счастливых детей в мире,
          гармоничное сочетание старины и современных инноваций.
        </p>
        <div className={styles.content}>
          <img src={city} alt="" />
          <p className={styles.desc}>
            И если вы задумываетесь о возможности открыть свой бизнес в
            Нидерландах – мы, компания Skill to Start, знаем, как вам в этом
            помочь.
            <br /> И поверьте, сделать это намного проще, чем может показаться!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessInNetherlands;

import styles from "./YoutubeChannel.module.scss";

import React from "react";

import cover1 from "../../../../assets/video1.png";
import cover2 from "../../../../assets/video2.png";
import cover3 from "../../../../assets/video3.png";

import vectorsvg from "../../../../assets/youtubevector.svg";
import movesvg from "../../../../assets/movevector.svg";
import youtubesvg from "../../../../assets/youtubeIcon.svg";

const YoutubeChannel = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наш You-Tube канал</h2>
        <div className={styles.content}>
          <div className={styles.video}>
            <img src={cover1} />
            <h5>Получили одобрение по стартап визе Нид...</h5>
            <p className={styles.description}>
              Успешный кейс по индивидуальному сопровождению по стартап визе.
              Действующий бизнес с инструмента...
            </p>
          </div>

          <div className={`${styles.video} ${styles.mainvideo}`}>
            <img src={cover2} />
            <h5>Прямой эфир: Игорь Линчевский о том...</h5>
            <p className={styles.description}>
              Как начать бизнес в новой стране. Почему важно учить местный язык
              и как быстрее всего адаптироваться на...
            </p>
          </div>

          <div className={styles.video}>
            <img src={cover3} />
            <h5>Прямой эфир: Юлия Данилейко опыт...</h5>
            <p className={styles.description}>
              Юлия Данилейко. О своем интересном пути в Нидерланды. Юлия
              устроилась в международную...
            </p>
          </div>
          <img className={styles.youtubesvg} src={youtubesvg} />
        </div>
      </div>
      <img className={styles.vectorsvg} src={vectorsvg} />
      <img className={styles.movesvg} src={movesvg} />
    </section>
  );
};

export default YoutubeChannel;

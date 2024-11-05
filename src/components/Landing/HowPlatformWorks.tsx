import styles from './HowPlatformWorks.module.scss';

import { Container } from '../../UI';
import photo from '../../assets/homeImageSVG2.svg';
import { howPlatformsWork } from '../../constants/howPlatformWorks';

export const HowPlatformWorks = () => {
  return (
    <Container>
      <section className={styles.platform}>
        <h2 className={styles.platform__h2}>How our platform works</h2>
        <div className={styles.platform__wrapper}>
          <div className={styles.platform__info}>
            <ul className={styles.platform__list}>
              {howPlatformsWork.map(({ id, title, description }) => (
                <li className={styles.platform__item}>
                  <span className={styles.platform__number}>{id}</span>
                  <div className={styles.platform__mainDescr}>
                    <h3 className={styles.platform__title}>{title}</h3>
                    <p className={styles.platform__description}>
                      {description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.platform__violetLayer}>
            <div className={styles.platform__blueLayer}>
              <img
                className={styles.platform__img}
                src={photo}
                alt="Welcome to our clinic"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

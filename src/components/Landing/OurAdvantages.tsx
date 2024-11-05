import styles from './OurAdvantages.module.scss';

import { Container } from '../../UI';
import { advantages } from '../../constants/advantages';

export const OurAdvantages = () => {
  return (
    <Container>
      <section className={styles.advantages}>
        <h1 className={styles.advantages__title}>Our advantages</h1>
        <div>
          <ul className={styles.advantages__list}>
            {advantages.map(({ icon, title, description, alt }) => (
              <li className={styles.advantages__item}>
                <div className={styles.advantages__img}>
                  <img src={icon} alt={alt} />
                </div>
                <h3 className={styles.advantages__itemTitle}>{title}</h3>
                <p className={styles.advantages__description}>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
};

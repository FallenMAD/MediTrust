import styles from './HealthyJourney.module.scss';

import { Container } from '../../UI';
import homeImage from '../../assets/homeImageSVG.svg';
import { Button } from '../Button';

export const HealthyJourney = () => {
  return (
    <Container>
      <section className={styles.section} id="appointment">
        <div className={styles.section__description}>
          <h1 className={styles.section__title}>
            Your <span className={styles.section__strong}>health</span> journey,
            guided by MediTrust
          </h1>
          <p className={styles.section__paragraph}>
            From preventative medicine to specialized treatments, our
            experienced team of healthcare professionals is committed to guiding
            you through your unique health journey with compassion, expertise,
            and personalized attention.
          </p>

          <Button cl={styles.section__button}>Book appointment</Button>
        </div>
        <div className={styles.section__whiteLayer}>
          <div className={styles.section__blueLayer}>
            <img
              className={styles.section__img}
              src={homeImage}
              alt="Welcome to our clinic"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

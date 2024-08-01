import styles from './HowPlatformWorks.module.scss';

import { Container } from '../../UI';
import photo from '../../assets/homeImageSVG2.svg';

type howPlatformsWork = {
  id: number;
  title: string;
  description: string;
};

export const HowPlatformWorks = () => {
  const howPlatformsWork: howPlatformsWork[] = [
    {
      id: 1,
      title: 'Create your profile',
      description:
        'Begin by signing up and creating your personal profile on our platform, providing essential information to streamline your future visits.',
    },
    {
      id: 2,
      title: 'Choose a specialist and book an appointment',
      description:
        'Browse our extensive list of expert specialists, select the one that best suits your needs, and conveniently book an appointment at a time that works for you.',
    },
    {
      id: 3,
      title: 'Meet your doctor',
      description:
        'Attend your scheduled appointment, either in-person or via telemedicine, and receive top-quality care from your chosen healthcare professional.',
    },
  ];
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

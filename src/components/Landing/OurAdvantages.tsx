import styles from './OurAdvantages.module.scss';

import heart from '../../../public/heart-outline.svg';
import doctor from '../../../public/main-doctor.svg';
import calendar from '../../../public/minicalendar.svg';
import { Container } from '../../UI';

type Advantages = {
  icon: string;
  title: string;
  description: string;
  alt: string;
};

export const OurAdvantages = () => {
  const advantages: Advantages[] = [
    {
      icon: doctor,
      title: 'Expert medical staff',
      alt: 'Doctor',
      description:
        'Our team of highly qualified doctors and healthcare professionals ensures you receive the best possible care.',
    },
    {
      icon: calendar,
      title: 'Online appointment booking',
      alt: 'Calendar',
      description:
        'Schedule appointments anytime, reducing wait times and streamlining your visit.',
    },
    {
      icon: heart,
      alt: 'Heart',
      title: 'Patient-centered approach',
      description:
        'We prioritize building trusting relationships and providing compassionate care in a comfortable environment.',
    },
  ];

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

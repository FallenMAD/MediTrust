import styles from './DoctorsPage.module.scss';

import { Container } from '../../UI';
import { Categories } from '../../components/Categories';
import { Search } from '../../components/Search';
import { Doctors } from '../../components/Doctors';

interface Doctors {
  id: number;
  name: string;
  category: string;
  image: string;
}

export const DoctorsPage = () => {
  return (
    <Container>
      <section className={styles.doctorsPage}>
        <div className={styles.doctorsPage__header}>
          <h1 className={styles.doctorsPage__title}>
            Discover your <span className={styles.doctorsPage__highlighted}>doctor</span>, book instantly
          </h1>
          <p className={styles.doctorsPage__description}>
            Finding the right doctor has never been easier with our online
            appointment booking system.
          </p>
          <Search cln={styles.doctorsPage__search}/>
        </div>

        <div className={styles.doctorsPage__categories}>
          <Categories />
        </div>
        <div>
          <Doctors />
        </div>
      </section>
    </Container>
  );
};

import { DoctorCard } from './DoctorCard';
import styles from './Doctors.module.scss';

export const Doctors = () => {
  return (
    <section>
      <h1>Doctors</h1>
      <ul className={styles.doctors__list}>
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
        <DoctorCard />
      </ul>
    </section>
  );
};

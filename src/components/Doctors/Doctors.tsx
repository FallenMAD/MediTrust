import { Doctor } from "./Doctor";
import styles from './Doctors.module.scss';

export const Doctors = () => {
  return (
    <section>
     <h1>Doctors</h1>
     <ul className={styles.doctors__list}>
        <Doctor />
        <Doctor />
        <Doctor />
        <Doctor />
     </ul>
    </section>
  );
};
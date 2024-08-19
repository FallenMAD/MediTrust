import { Button } from '../Button';
import styles from './Doctor.module.scss';

export const Doctor = () => {
  return (
    <li className={styles.doctor}>
      <div className={styles.doctor__top}>
        <p>rating</p>
        <p>reviews</p>
        <img src='' alt='' />
      </div>
      
      <div className={styles.doctor__bottom}>
        <p>name</p>
        <p>experience</p>
        <p>specialty</p>
        <Button cln=''>Book appointment</Button>
      </div>
    </li>
  );
};
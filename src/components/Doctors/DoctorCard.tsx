import { Link } from 'react-router-dom';

import star from '/public/starYellow.svg';

import styles from './DoctorCard.module.scss';

import { Icon } from '../../UI';
import { Button } from '../Button';

export const DoctorCard = () => {
  return (
    <li className={styles.doctor}>
      <Link to="1" className={styles.doctor__link}>
        <div className={styles.doctor__top}>
          <div className={styles.doctor__reviews}>
            <Icon svg={star} id="starYellow" cl={styles.doctor__star} />
            <p>reviews</p>
          </div>
          <img src="" alt="" className={styles.doctor__img} />
        </div>

        <div className={styles.doctor__bottom}>
          <p className={styles.doctor__name}>Dr. Roger Jacson </p>
          <p className={styles.doctor__experience}>experience: 15 years</p>
          <p className={styles.doctor__specialty}>specialty</p>
          <Button
            cln={styles.doctor__btn}
            onClick={() => {
              console.log(1);
            }}
          >
            Appointment
          </Button>
        </div>
      </Link>
    </li>
  );
};

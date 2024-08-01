import styles from '../../App.module.scss';
import {
  HealthyJourney,
  HowPlatformWorks,
  ModernClinic,
  OurAdvantages,
} from '../../components/Landing/';
import { TopDoctors } from '../../components/Landing/TopDoctors';
import { Search } from '../../components/Search';

export const HomePage = () => {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <Search />

      <div className={styles.main}>
        <HealthyJourney />
        <ModernClinic />
        <OurAdvantages />
        <TopDoctors />
        <HowPlatformWorks />
      </div>
    </div>
  );
};

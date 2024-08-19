import styles from '../../App.module.scss';
import {
  FrequentlyAskedQuestions,
  HealthyJourney,
  HowPlatformWorks,
  ModernClinic,
  OurAdvantages,
  Blog
} from '../../components/Landing/';
import { TopDoctors } from '../../components/Landing/TopDoctors';
import { RequestCallback } from '../../components/RequestCallback';
import { Search } from '../../components/Search';

export const HomePage = () => {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <Search cln={styles.search}/>

      <div className={styles.main}>
        <HealthyJourney />
        <ModernClinic />
        <OurAdvantages />
        <TopDoctors />
        <HowPlatformWorks />
        <RequestCallback />
        <FrequentlyAskedQuestions />
        <Blog />
      </div>
    </div>
  );
};

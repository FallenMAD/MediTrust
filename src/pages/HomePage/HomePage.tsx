import styles from '../../App.module.scss';
import {
  Blog,
  FrequentlyAskedQuestions,
  HealthyJourney,
  HowPlatformWorks,
  ModernClinic,
  OurAdvantages,
} from '../../components/Landing/';
import { TopDoctors } from '../../components/Landing/TopDoctors';
import { RequestCallback } from '../../components/RequestCallback';
import { Search } from '../../components/Search';

export const HomePage = () => {
  return (
    <div>
      <Search cln={styles.search} />

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

export default HomePage;

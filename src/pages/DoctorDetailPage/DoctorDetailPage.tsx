import styles from '../../App.module.scss';
import { Container } from '../../UI';
import { DoctorDetailCard } from '../../components/Doctors';
import { Search } from '../../components/Search';

export const DoctorDetailPage = () => {
  return (
    <Container>
      <Search cln={styles.search} />

      <DoctorDetailCard />
    </Container>
  );
};

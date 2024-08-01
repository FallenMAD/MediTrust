import styles from './Search.module.scss';

import search from '../../../public/Search.svg';
import { Container, Icon } from '../../UI';

export const Search = () => {
  return (
    <Container cl={styles.search}>
      <div className={styles.search__wrapper}>
        <Icon svg={search} id="search" />
        <input
          className={styles.search__input}
          type="search"
          placeholder="Enter doctor's name, specialization"
        />
      </div>
    </Container>
  );
};

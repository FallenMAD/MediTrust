import styles from './Search.module.scss';
import cn from 'classnames';

import search from '../../../public/Search.svg';
import { Container, Icon } from '../../UI';
import { FC } from 'react';

interface SearchProps { 
  cln?: string
}

export const Search:FC<SearchProps> = ({ cln }) => {
  return (
    <Container cl={styles.search}>
      <div className={cn(styles.search__wrapper, cln)}>
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

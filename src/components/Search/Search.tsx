import { FC } from 'react';

import cn from 'classnames';

import styles from './Search.module.scss';

import search from '../../../public/Search.svg';
import { Container, Icon } from '../../UI';

interface SearchProps {
  cln?: string;
}

export const Search: FC<SearchProps> = ({ cln }) => {
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

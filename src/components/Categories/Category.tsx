import { FC } from 'react';

import { Categories } from './Categories';
import styles from './Category.module.scss';
import { Button } from '../Button';

type CategoryProps = {
  category: Categories;
};

export const Category: FC<CategoryProps> = ({ category }) => {
  return (
    <li className={styles.category}>
      <Button cln={styles.category__btn}>
        <img src={category.svg} alt={category.title} />
        <p className={styles.category__title}>{category.title}</p>
      </Button>
    </li>
  );
};

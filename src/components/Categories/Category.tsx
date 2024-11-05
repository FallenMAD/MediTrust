import { FC } from 'react';

import styles from './Category.module.scss';

import { Categories } from '../../constants/categories';
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

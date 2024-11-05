import styles from './Categories.module.scss';
import { Category } from './Category';

import { categories } from '../../constants/categories';

export const Categories = () => {
  return (
    <section className={styles.categories}>
      <h3 className={styles.categories__categoriesTitle}>Categories</h3>
      <ul className={styles.categories__list}>
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </ul>
      <button className={styles.categories__button}>View all</button>
    </section>
  );
};

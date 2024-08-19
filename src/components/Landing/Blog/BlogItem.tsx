import { FC } from 'react';

import { BlogData } from './Blog';
import style from './BlogItem.module.scss';

type Props = {
  item: BlogData;
};

export const BlogItem: FC<Props> = ({ item }) => {
  return (
    <div className={style.blogItem}>
      <img
        className={style.blogItem__img}
        src={item.img}
        alt="Image about blog topic"
      />

      <div className={style.blogItem__bottom}>
        <p className={style.blogItem__type}>{item.type}</p>
        <h4 className={style.blogItem__title}>{item.title}</h4>
        <p className={style.blogItem__date}>{item.date}</p>
      </div>
    </div>
  );
};

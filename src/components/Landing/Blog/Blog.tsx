import style from './Blog.module.scss';
import { BlogItem } from './BlogItem';

import { blogData } from '../../../constants';

export const Blog = () => {
  return (
    <section className={style.blog} id="blog">
      <div className={style.blog__topWrapper}>
        <h2 className={style.blog__title}>Blog</h2>
        <p className={style.blog__descryption}>
          Here, our team of medical experts and practitioners share valuable
          insights, cutting-edge research, and practical advice to help you lead
          a healthier life.
        </p>
      </div>
      <div className={style.blog__items}>
        {blogData.map(item => (
          <BlogItem item={item} key={item.img} />
        ))}
      </div>
      <button className={style.blog__button}>View all</button>
    </section>
  );
};

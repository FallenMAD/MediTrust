import { Link } from 'react-router-dom';

import style from './Footer.module.scss';

export const QuickLinks = () => {
  return (
    <div>
      <h4 className={style.footer__linksTitle}>Quick links</h4>
      <ul className={style.footer__linksList}>
        <li className={style.footer__linksItem}>
          <Link to="/doctors">Doctors</Link>
        </li>
        <li className={style.footer__linksItem}>
          <a href="#appointment">Book appointment</a>
        </li>
        <li className={style.footer__linksItem}>
          <a href="#request_a_call">Request a call</a>
        </li>
        <li className={style.footer__linksItem}>
          <a href="#reviews">Reviews</a>
        </li>
        <li className={style.footer__linksItem}>
          <a href="frequenly_question">Frequenly asked question</a>
        </li>
        <li className={style.footer__linksItem}>
          <a href="/home/blog">Blog</a>
        </li>
        <li className={style.footer__linksItem}>
          <Link to="/contacts">Visit & Contact us</Link>
        </li>
        <li className={style.footer__linksItem}>
          <Link to="/about-us">About us</Link>
        </li>
      </ul>
    </div>
  );
};

import { Link } from 'react-router-dom';

import cn from 'classnames';

import style from './Footer.module.scss';

import BuildingSVG from '../../../public/buidingFooter.svg';
import CalendarSVG from '../../../public/calendar.svg';
import FacebookSVG from '../../../public/facebook.svg';
import InstagramSVG from '../../../public/instagram.svg';
import PhoneSVG from '../../../public/phone.svg';
import TelegramSVG from '../../../public/telegram.svg';
import ViberSVG from '../../../public/viber.svg';
import { Container, Icon } from '../../UI';
import { Logo } from '../Header/Logo';

const policies: { title: string }[] = [
  { title: 'Privacy policy' },
  { title: 'Terms & Conditions' },
  { title: 'Cookie policy' },
];

type Networks = {
  title: string;
  icon: string;
  id: string;
  link: string;
};

const networks: Networks[] = [
  {
    title: 'Facebook',
    icon: FacebookSVG,
    id: 'facebook',
    link: 'https://www.facebook.com/',
  },
  {
    title: 'Instagram',
    icon: InstagramSVG,
    id: 'instagram',
    link: 'https://www.instagram.com/',
  },
  {
    title: 'Telegram',
    icon: TelegramSVG,
    id: 'telegram',
    link: 'https://web.telegram.org/k/',
  },
  {
    title: 'Viber',
    icon: ViberSVG,
    id: 'viber',
    link: 'https://www.viber.com/en/',
  },
];

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container cl={style.footer__container}>
        <section className={style.footer__info}>
          <Logo hasFooter={true} />
          <div className={style.footer__links}>
            <a
              href="https://maps.app.goo.gl/uE8XD96ZZ7ZQgyPZA"
              target="_blank"
              className={cn(style.footer__link, style.footer__position)}
            >
              <Icon svg={BuildingSVG} id="buidingFooter" />
              22 Devonshire Pl, London, WE456EV, GB
            </a>
            <a
              href="tel:+442045270671"
              target="_blank"
              className={style.footer__link}
            >
              <Icon svg={PhoneSVG} id="phone" />
              +44 20 4527 0671
            </a>

            <div className={style.footer__schedule}>
              <Icon svg={CalendarSVG} id="calendar" />
              <ul className={style.footer__scheduleList}>
                <li>Monday to Friday: 08:00 - 18:00</li>
                <li>Saturdays: 10:00 - 14:00</li>
                <li>Sundays: 10:00 - 13:00</li>
              </ul>
            </div>

            <p className={style.footer__copyright}>
              Copyright ©2024 MediTrust medical center Ltd. All rights reserved
            </p>
          </div>
        </section>

        <section className={style.footer__quickLinks}>
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
                <a href="#blog">Blog</a>
              </li>
              <li className={style.footer__linksItem}>
                <Link to="/contacts">Visit & Contact us</Link>
              </li>
              <li className={style.footer__linksItem}>
                <Link to="/about-us">About us</Link>
              </li>
            </ul>
          </div>

          <div className={style.footer__networks}>
            <div>
              <h4 className={style.footer__linksTitle}>Policies</h4>
              <ul className={style.footer__linksList}>
                {policies.map(({ title }) => (
                  <li>{title}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={style.footer__linksTitle}>Networks</h4>
              <ul className={style.footer__linksList}>
                {networks.map(({ title, id, icon, link }) => (
                  <li className={style.footer__linksItem}>
                    <a href={link} target="_blank" className={style.footer__networkLink}>
                      <Icon id={id} svg={icon} />
                      <p>{title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};

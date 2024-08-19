import cn from 'classnames';

import style from './Footer.module.scss';

import BuildingSVG from '../../../public/buidingFooter.svg';
import CalendarSVG from '../../../public/calendar.svg';
import PhoneSVG from '../../../public/phone.svg';
import { Container, Icon } from '../../UI';
import { Logo } from '../Header/Logo';
import { QuickLinks } from './QuickLinks';
import { Policies } from './Policies';
import { Networks } from './Networks';


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
          <QuickLinks />
          <div className={style.footer__wrapper}>
            <Policies />
            <Networks />
          </div>
        </section>
      </Container>
    </footer>
  );
};

import style from './Footer.module.scss';

import FacebookSVG from '../../../public/facebook.svg';
import InstagramSVG from '../../../public/instagram.svg';
import TelegramSVG from '../../../public/telegram.svg';
import ViberSVG from '../../../public/viber.svg';
import { Icon } from '../../UI';

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

export const Networks = () => {
  return (
    <div>
      <h4 className={style.footer__linksTitle}>Networks</h4>
      <ul className={style.footer__linksList}>
        {networks.map(({ title, id, icon, link }) => (
          <li className={style.footer__linksItem} key={id}>
            <a
              href={link}
              target="_blank"
              className={style.footer__networkLink}
            >
              <Icon id={id} svg={icon} />
              <p>{title}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

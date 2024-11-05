import FacebookSVG from '../../public/facebook.svg';
import InstagramSVG from '../../public/instagram.svg';
import TelegramSVG from '../../public/telegram.svg';
import ViberSVG from '../../public/viber.svg';

type Networks = {
  title: string;
  icon: string;
  id: string;
  link: string;
};

export const networks: Networks[] = [
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

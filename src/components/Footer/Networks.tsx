import style from './Footer.module.scss';

import { Icon } from '../../UI';
import { networks } from '../../constants/networks';

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

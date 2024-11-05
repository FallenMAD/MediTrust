import style from './Footer.module.scss';

import { policies } from '../../constants/policy';

export const Policies = () => {
  return (
    <div>
      <h4 className={style.footer__linksTitle}>Policies</h4>
      <ul className={style.footer__linksList}>
        {policies.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import styles from './Logo.module.scss';

import LogoPhoto from '../../../public/Logo.svg';

type Props = {
  hasFooter?: boolean;
};

export const Logo: FC<Props> = ({ hasFooter }) => {
  return (
    <NavLink to="/" className={cn(styles.logo__item, styles.logo__logoImg)}>
      <img src={LogoPhoto} alt="MediTrust Logo" className={styles.logo__img} />
      <div>
        <h2
          className={cn(
            hasFooter ? styles.logo__titleFooter : styles.logo__title
          )}
        >
          MediTrust
        </h2>
        <p
          className={cn(
            hasFooter ? styles.logo__paragraphFooter : styles.logo__paragraph
          )}
        >
          medical center
        </p>
      </div>
    </NavLink>
  );
};

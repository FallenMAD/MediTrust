import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import styles from './Header.module.scss';
import { Logo } from './Logo';

import { Container } from '../../UI';

export type Pages = {
  name: string;
  path: string;
};

export const Header = () => {
  const pages: Pages[] = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Visit & Contacts us', path: '/contacts' },
    { name: 'About us', path: '/about-us' },
  ];

  return (
    <Container>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <div className={styles.header__logoWrapper}>
            <Logo />
          </div>

          <ul className={styles.header__list}>
            {pages.map(page => (
              <li className={styles.header__link}>
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                    cn(
                      styles.header__item,
                      styles.header__page,
                      isActive ? styles.active : ''
                    )
                  }
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className={styles.header__buttonList}>
            <li className={styles.header__buttonLink}>
              <NavLink to="/">
                <button className={styles.header__button}>Log in</button>
              </NavLink>
            </li>
            <li className={styles.header__buttonLink}>
              <NavLink to="/">
                <button
                  className={cn(
                    styles.header__button,
                    styles.header__buttonBlue
                  )}
                >
                  Register
                </button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Container>
  );
};

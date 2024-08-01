import { FC, ReactNode } from 'react';

import cn from 'classnames';

import styles from './Container.module.scss';

type Props = {
  children: ReactNode;
  cl?: string;
};

export const Container: FC<Props> = ({ children, cl = '' }) => {
  return <div className={cn(styles.box, cl)}>{children}</div>;
};

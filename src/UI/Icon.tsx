import { FC } from 'react';

import cn from 'classnames';

import styles from '../App.module.scss';

type Props = {
  svg: string;
  id: string;
  cl?: string;
};

export const Icon: FC<Props> = ({ svg, id, cl }) => {
  return (
    <svg className={cn(styles.link, cl)}>
      <use href={`${svg}#${id}`} />
    </svg>
  );
};

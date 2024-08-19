import { FC, ReactNode } from 'react';

type Props = {
  cln: string;
  children: ReactNode;
};

export const Button: FC<Props> = ({ cln, children }) => {
  return <button className={cln}>{children} </button>;
};

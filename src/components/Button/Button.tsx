import { FC, ReactNode } from 'react';

type Props = {
  cl: string;
  children: ReactNode;
};

export const Button: FC<Props> = ({ cl, children }) => {
  return <button className={cl}>{children}</button>;
};

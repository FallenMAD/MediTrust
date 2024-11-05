import { FC, ReactNode } from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  cln: string;
  children: ReactNode;
};

export const Button: FC<Props> = ({ cln, children, ...props }) => {
  return (
    <button className={cln} {...props}>
      {children}
    </button>
  );
};

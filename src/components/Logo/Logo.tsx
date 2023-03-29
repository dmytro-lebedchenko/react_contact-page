import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { LogoType } from '../../types/LogoType';
import './Logo.scss';

type Props = {
  type: LogoType;
  addClassName?: string,
};

export const Logo: React.FC<Props> = ({ type, addClassName }) => {
  return (
    <Link
      to="/"
      className={classNames(
        'logo',
        addClassName,
        { 'logo--big': type === 'big' },
        { 'logo--normal': type === 'normal' },
        { 'logo--small-black': type === 'small-black' },
        { 'logo--small-white': type === 'small-white' },
      )}
    >
      Logo Hear
    </Link>
  );
};

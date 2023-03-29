import { Link } from 'react-router-dom';

import navList from '../../api/headerNav.json';
import { useWindowSize } from '../../app/hooks';
import { IconType } from '../../types/IconType';
import { Icon } from '../Icon';
import { Logo } from '../Logo';
import { Selector } from '../Selector';
import './Header.scss';

type Props = {
  handleMenuClick: () => void,
  handleMenuKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void,
};

export const Header: React.FC<Props> = ({
  handleMenuClick, handleMenuKeyDown,
}) => {
  const { width } = useWindowSize();

  return (
    <header className="header">
      <div className="header__top-actions">
        {width > 640 ? (
          <Logo type="big" />
        ) : (
          <Logo type="small-black" />
        )}

        <nav className="header__nav nav">
          <div className="nav__list">
            {navList.map(navItem => {
              if (!navItem.options) {
                return (
                  <Link
                    key={`${navItem.title}--header--${Math.random()}`}
                    to={navItem.link}
                    className="nav__link"
                  >
                    {navItem.title}
                  </Link>
                );
              }

              return (
                <Selector
                  key={`${navItem.title}--header--${Math.random()}`}
                  title={navItem.title}
                  list={navItem.options}
                  type="header"
                />
              );
            })}
          </div>

          <div className="nav__icon-container">
            <div className="nav__icon-wrapper">
              <Icon
                type={IconType.USER}
                addClassName="nav__icon--user"
              />
            </div>

            <div className="nav__icon-wrapper">
              <Icon
                type={IconType.CART}
                addClassName="nav__icon--cart"
              />
            </div>
          </div>
        </nav>

        <div
          role="button"
          tabIndex={0}
          className="header__menu"
          onClick={() => handleMenuClick()}
          onKeyDown={(event) => handleMenuKeyDown(event)}
        >
          <Icon
            type={IconType.MENU}
            addClassName="header__menu-icon"
          />
        </div>
      </div>
    </header>
  );
};

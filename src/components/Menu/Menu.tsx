import classNames from 'classnames';
import { Link } from 'react-router-dom';

import navList from '../../api/headerNav.json';
import { IconType } from '../../types/IconType';
import { Icon } from '../Icon';
import { Logo } from '../Logo';
import { Selector } from '../Selector';
import './Menu.scss';

type Props = {
  isMenu: boolean,
  handleMenuClick: () => void,
  handleMenuKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void,
};

export const Menu: React.FC<Props> = ({
  isMenu, handleMenuClick, handleMenuKeyDown,
}) => {
  const handleMenuItemClick = (item: string) => {
    if (item === 'Home') {
      handleMenuClick();
    }
  };

  return (
    <nav
      className={
        classNames(
          'page__menu',
          'menu',
          { 'page__menu--is-opened': isMenu },
        )
      }
    >
      <div className="container">
        <div className="menu__content">
          <div className="menu__top-actions top-actions">
            <Logo type="small-white" />

            <div
              role="button"
              tabIndex={0}
              className="top-actions__icon-wrapper"
              onClick={() => handleMenuClick()}
              onKeyDown={(event) => handleMenuKeyDown(event)}
            >
              <Icon
                type={IconType.CLOSE}
                addClassName="top-actions__icon"
              />
            </div>
          </div>

          <div className="menu__list">
            {navList.map(navItem => {
              if (!navItem.options) {
                return (
                  <Link
                    key={`${navItem.title}--menu--${Math.random()}`}
                    to={navItem.link}
                    className="menu__item"
                    onClick={() => handleMenuItemClick(navItem.title)}
                  >
                    {navItem.title}
                  </Link>
                );
              }

              return (
                <Selector
                  key={`${navItem.title}--menu--${Math.random()}`}
                  title={navItem.title}
                  list={navItem.options}
                  type="menu"
                />
              );
            })}
          </div>

          <div className="menu__icon-container">
            <div className="menu__icon-wrapper">
              <Icon
                type={IconType.USER_HOVER}
                addClassName="menu__icon--user"
              />
            </div>

            <div className="menu__icon-wrapper">
              <Icon
                type={IconType.CART_HOVER}
                addClassName="menu__icon--cart"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

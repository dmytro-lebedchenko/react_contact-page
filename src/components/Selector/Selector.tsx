import classNames from 'classnames';
import { useState } from 'react';
import {
  Link,
} from 'react-router-dom';

import { IconType } from '../../types/IconType';
import { SelectorType } from '../../types/SelectorType';
import { Icon } from '../Icon';
import './Selector.scss';

type Props = {
  title: string,
  list: {
    title: string;
    link: string;
  }[],
  type: SelectorType,
};

export const Selector: React.FC<Props> = ({
  title, list, type,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      return;
    }

    if (event.key === 'Enter') {
      setIsOpened(!isOpened);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={
        classNames(
          'filters__sort-filter',
          { nav__link: type === 'header' },
          { 'menu__item--selector': type === 'menu' },
        )
      }
      onClick={() => setIsOpened(!isOpened)}
      onKeyDown={(event) => handleMenuKeyDown(event)}
      onMouseLeave={() => setIsOpened(false)}
    >
      <div className="filters__subtitle">
        {title}
      </div>

      <div className="filters__filter">
        <div className="selector">
          <button
            className={classNames(
              'selector__picker',
              { 'selector__picker--menu': type === 'menu' },
            )}
            type="button"
          >
            <div className="selector__picker--arrow">
              {!isOpened
                && (
                  <Icon
                    type={type === 'menu'
                      ? IconType.ARROW_DOWN_HOVER
                      : IconType.ARROW_DOWN}
                  />
                )}

              {isOpened
                && (
                  <Icon
                    type={type === 'menu'
                      ? IconType.ARROW_UP_HOVER
                      : IconType.ARROW_UP}
                  />
                )}
            </div>
          </button>

          <ul
            className={classNames(
              'selector__list',
              { 'selector__list--is-hidden': !isOpened },
              { 'selector__list--menu': type === 'menu' },
            )}
          >
            {list.map(option => (
              <Link
                to={option.link}
                key={`${option.title}--${Math.random()}`}
                className="selector__item"
              >
                {option.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

import classNames from 'classnames';
import { useCallback, useState } from 'react';

import { useWindowSize } from '../../app/hooks';
import { ContactForm } from '../../components/ContactForm';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';

export const ContactPage: React.FC = () => {
  const [isMenu, setIsMenu] = useState(false);

  const { width } = useWindowSize();

  const handleMenuClick = useCallback(() => {
    setIsMenu(!isMenu);
  }, [isMenu]);

  const handleMenuKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      return;
    }

    if (event.key === 'Enter') {
      handleMenuClick();
    }
  };

  return (
    <div
      className={
        classNames(
          'page',
          { 'page--with-menu': isMenu && width < 640 },
        )
      }
    >
      <Header
        handleMenuClick={handleMenuClick}
        handleMenuKeyDown={handleMenuKeyDown}
      />

      <Menu
        isMenu={isMenu}
        handleMenuClick={handleMenuClick}
        handleMenuKeyDown={handleMenuKeyDown}
      />

      <main className="page__main">
        <div className="page__container">
          <section className="page__section">
            <div className="page__section-title">
              Contact us
            </div>

            <div className="page__section-subtitle">
              <p>Any question or remarks?</p>
              <p>Just write us a message!</p>
            </div>

            <ContactForm />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

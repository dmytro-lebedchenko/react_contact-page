import { useState } from 'react';
import { Link } from 'react-router-dom';

import navList from '../../api/footerNav.json';
import { IconType } from '../../types/IconType';
import { Icon } from '../Icon';
import { Logo } from '../Logo';
import './Footer.scss';

export const Footer: React.FC = () => {
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSubscribeEmail(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // There should be a function for submitting a filled-out form.
    // It is also a good choice to use Formik and Yup for validation.
    // for example: dispatch(createSubscribe(subscribeEmail));

    // I will display the filled-out form in the console in order to check if the form is valid.
    // eslint-disable-next-line no-console
    console.log(subscribeEmail);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-wrapper">
          <Logo
            type="normal"
            addClassName="footer__logo"
          />
        </div>

        <div className="footer__contacts">
          <div className="footer__block-wrapper">
            <div className="footer__block contacts">
              <div className="contacts__title footer__title">
                Reach us
              </div>

              <div className="contacts__list contacts-list">
                <div className="contacts-list__item">
                  <Icon
                    type={IconType.PHONE}
                    addClassName="contacts-list__item-icon"
                  />

                  <Link
                    to="tel:+10123456789"
                    className="contacts-list__item-text"
                  >
                    +1012 3456 789
                  </Link>
                </div>

                <div className="contacts-list__item">
                  <Icon
                    type={IconType.MAIL}
                    addClassName="contacts-list__item-icon"
                  />

                  <Link
                    to="mailto:demo@gmail.com"
                    className="contacts-list__item-text"
                  >
                    demo@gmail.com
                  </Link>
                </div>

                <div className="contacts-list__item">
                  <Icon
                    type={IconType.GEO_POINT}
                    addClassName="contacts-list__item-icon"
                  />

                  <Link
                    to="https://goo.gl/maps/K6Pqi6g55qpMnrqE7"
                    className="contacts-list__item-text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    132 Dartmouth Street Boston,
                    Massachusetts 02156 United States
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-nav__block">
              <div className="footer-nav__title footer__title">
                Company
              </div>

              {navList.company.map(item => (
                <Link
                  to={item.link}
                  key={item.title}
                  className="footer-nav__link"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer__block-wrapper">
            <div className="footer-nav__block">
              <div className="footer-nav__title footer__title">
                Legal
              </div>

              {navList.legal.map(item => (
                <Link
                  to={item.link}
                  key={item.title}
                  className="footer-nav__link"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="footer-nav__block">
              <div className="footer-nav__title footer__title">
                Quick Links
              </div>

              {navList.links.map(item => (
                <Link
                  to={item.link}
                  key={item.title}
                  className="footer-nav__link"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div
            className="
              footer__block-wrapper
              footer__block-wrapper--subscribe"
          >
            <div className="footer__block subscribe">
              <div className="subscribe__title footer__title">
                Join Our Newsletter
              </div>

              <form
                className="subscribe__input-container"
                onSubmit={event => handleSubmit(event)}
              >
                <input
                  className="subscribe__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  onChange={event => handleChange(event)}
                />

                <button
                  type="submit"
                  className="subscribe__button"
                >
                  Subscribe
                </button>
              </form>

              <p className="subscribe__note">
                * Will send you weekly updates for your better tool management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

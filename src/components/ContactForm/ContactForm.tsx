import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Comment } from '../../types/Comment';
import { IconType } from '../../types/IconType';
import { Icon } from '../Icon';
import './ContactForm.scss';

export const ContactForm: React.FC = () => {
  const initComment: Comment = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    checkbox: {
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
    },
    message: '',
  };

  const [newComment, setNewComment] = useState<Comment>(initComment);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    isCheckBox?: boolean,
  ) => {
    const { value, name } = event.target;

    if (isCheckBox) {
      setNewComment(prev => ({
        ...prev,
        checkbox: {
          ...prev.checkbox,
          [name]: true,
        },
      }));
    } else {
      setNewComment(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // There should be a function for submitting a filled-out form.
    // It is also a good choice to use Formik and Yup for validation.
    // for example: dispatch(createComment(newComment));

    // I will display the filled-out form in the console in order to check if the form is valid.
    // eslint-disable-next-line no-console
    console.log(newComment);
  };

  return (
    <div className="contact-form">
      <div className="contact-form__info info">
        <div className="info__header">
          <div className="info__title">
            Contact Information
          </div>

          <div className="info__subtitle">
            Say something to start a live chat!
          </div>
        </div>

        <div className="info__list info-list">
          <div className="info-list__item">
            <Icon
              type={IconType.PHONE}
              addClassName="info-list__item-icon"
            />

            <Link
              to="tel:+10123456789"
              className="info-list__item-text"
            >
              +1012 3456 789
            </Link>
          </div>

          <div className="info-list__item">
            <Icon
              type={IconType.MAIL}
              addClassName="info-list__item-icon"
            />

            <Link
              to="mailto:demo@gmail.com"
              className="info-list__item-text"
            >
              demo@gmail.com
            </Link>
          </div>

          <div className="info-list__item">
            <Icon
              type={IconType.GEO_POINT}
              addClassName="info-list__item-icon"
            />

            <Link
              to="https://goo.gl/maps/K6Pqi6g55qpMnrqE7"
              className="info-list__item-text"
              target="_blank"
              rel="noreferrer"
            >
              132 Dartmouth Street Boston,
              Massachusetts 02156 United States
            </Link>
          </div>
        </div>

        <div className="info-list__social social">
          <div className="social__icon-wrapper">
            <Icon
              type={IconType.TWITTER}
              addClassName="social__icon--twitter"
            />
          </div>

          <div className="social__icon-wrapper">
            <Icon
              type={IconType.INSTAGRAM}
              addClassName="social__icon--instagram"
            />
          </div>

          <div className="social__icon-wrapper">
            <Icon
              type={IconType.SOCIAL}
              addClassName="social__icon--social"
            />
          </div>
        </div>
      </div>

      <div className="contact-form__form form">
        <div className="form__container">
          <form
            className="form__block block"
            onSubmit={event => handleSubmit(event)}
          >
            <div className="block__container">
              <div className="block__item field">
                <label className="field__title" htmlFor="name">
                  First Name
                </label>

                <input
                  className="field__input"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="I"
                  required
                  onChange={event => handleChange(event)}
                />
              </div>

              <div className="block__item field">
                <label
                  className="
                    field__title
                    field__title--black"
                  htmlFor="surname"
                >
                  Last Name
                </label>

                <input
                  className="field__input"
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Doe"
                  required
                  onChange={event => handleChange(event)}
                />
              </div>
            </div>

            <div className="block__container">
              <div className="block__item field">
                <label className="field__title" htmlFor="email">
                  Email
                </label>

                <input
                  className="field__input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={event => handleChange(event)}
                />
              </div>

              <div className="block__item field">
                <label
                  className="
                    field__title
                    field__title--black"
                  htmlFor="phone"
                >
                  Phone number
                </label>

                <input
                  className="field__input"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  required
                  onChange={event => handleChange(event)}
                />
              </div>
            </div>

            <div
              className="
                block__item
                field
                checkbox"
            >
              <p className="field__title checkbox__title">
                Select Subject?
              </p>

              <div className="checkbox__container">
                <div className="checkbox__checkbox-item checkbox-item">
                  <input
                    className="checkbox-item__input"
                    type="checkbox"
                    id="checkbox1"
                    name="checkbox1"
                    value="checkbox1"
                    onChange={event => handleChange(event, true)}
                  />

                  <label className="checkbox-item__title" htmlFor="checkbox-1">
                    General Inquiry
                  </label>
                </div>

                <div className="checkbox__checkbox-item checkbox-item">
                  <input
                    className="checkbox-item__input"
                    type="checkbox"
                    id="checkbox2"
                    name="checkbox2"
                    value="checkbox2"
                    onChange={event => handleChange(event, true)}
                  />

                  <label className="checkbox-item__title" htmlFor="checkbox-2">
                    General Inquiry
                  </label>
                </div>

                <div className="checkbox__checkbox-item checkbox-item">
                  <input
                    className="checkbox-item__input"
                    type="checkbox"
                    id="checkbox3"
                    name="checkbox3"
                    value="checkbox3"
                    onChange={event => handleChange(event, true)}
                  />

                  <label className="checkbox-item__title" htmlFor="checkbox-3">
                    General Inquiry
                  </label>
                </div>

                <div className="checkbox__checkbox-item checkbox-item">
                  <input
                    className="checkbox-item__input"
                    type="checkbox"
                    id="checkbox4"
                    name="checkbox4"
                    value="checkbox4"
                    onChange={event => handleChange(event, true)}
                  />

                  <label className="checkbox-item__title" htmlFor="checkbox-4">
                    General Inquiry
                  </label>
                </div>
              </div>
            </div>

            <div
              className="
                block__item
                field
                field--message"
            >
              <label className="field__title" htmlFor="message">
                Message
              </label>

              <input
                className="field__input field__input--message"
                id="message"
                name="message"
                type="text"
                placeholder="Write your message.."
                required
                onChange={event => handleChange(event)}
              />
            </div>

            <div className="block__item block__item--button">
              <button type="submit" className="block__button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

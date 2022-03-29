import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container-div grid">
        <div className="footer__content">
          <a href="#home" className="footer__logo">
            <h4 className="footer__title">CONTACT</h4>
          </a>
          <p className="footer__description">
            329 Queensberry Street, North Melbourne
          </p>
          <p className="footer__description">VIC 3051, Australia.</p>
          <p className="footer__description">123 456 7890</p>
          <p className="footer__description">support@edumy.com</p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">COMPANY</h3>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                About Us
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Contact
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Become a Teacher
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">PROGRAMS</h3>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Nanodegree Plus
              </a>
            </li>

            <li>
              <a href="#home" className="footer__link">
                Veterans
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Georgia
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Self-Driving Car
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">SUPPORT</h3>
          <ul className="footer__links">
            <li>
              <a href="#home" className="footer__link">
                Documentation
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Forums
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Language Packs
              </a>
            </li>
            <li>
              <a href="#home" className="footer__link">
                Release Status
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <p>
            Subscribe to our newsletter and <br /> get 10% off your first
            purchase
          </p>
          <form action="" className="footer__social__form">
            <div className="footer__social__form__subscribe">
              <input type="email" name="email" id="" />
              <button>
                <AiOutlineArrowRight className="footer__social__form__subscribe-icon" />
              </button>
            </div>
          </form>
          <a href="#home" className="footer__social-link">
            {/* <img src={payment} alt="" /> */}
          </a>
        </div>
      </div>
      <p className="footer__copyright">&copy; EDUMY. All Right Reserved 2022</p>
    </footer>
  );
};

export default Footer;

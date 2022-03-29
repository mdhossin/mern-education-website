import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";

import { HiX } from "react-icons/hi";
import { BiMenuAltRight } from "react-icons/bi";

import { Link, useNavigate } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("scroll-header");
      } else {
        headerRef.current.classList.remove("scroll-header");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  const auth = useSelector((state) => state.auth);
  // console.log(auth);

  const { user, isLogged } = auth;
  console.log(user);

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/login";
    } catch (err) {
      window.location.href = "/";
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav container-div">
        <a href="#home" className="nav__logo">
          <img width="80" src={logo} alt="shop" />
        </a>

        <div className={"nav__menu " + (menuOpen && "show-menu")}>
          <ul className="nav__list nav__menu__list">
            <li className="nav__item">
              <Link
                to="/"
                className="nav__link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Services
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="nav__link"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div
            className="nav__close"
            id="nav-close"
            onClick={() => setMenuOpen(false)}
          >
            <HiX />
          </div>
        </div>

        <div className="nav__btns">
          <div
            className="nav__btns__toggle"
            id="nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <BiMenuAltRight />
          </div>
        </div>

        <div className="nav__icons">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__mobileMenu nav__link">
                <AiOutlineHome />
              </Link>
            </li>

            <NavDropdown
              title={
                isLogged ? (
                  <img
                    title={user?.name}
                    style={{ borderRadius: "50%" }}
                    width="22"
                    height="22"
                    src={user?.avatar}
                    alt=""
                  />
                ) : (
                  <AiOutlineUser className="nav__dropdown-icon" />
                )
              }
              id="collasible-nav-dropdown"
            >
              {isLogged ? (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    // onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/login")}
                  >
                    login
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__dropdown__item"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

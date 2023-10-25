import React from "react";
import Link from "next/link";
const logo = "/img/desktop/navbar/logo.png";

const LandingPageWebNavbar = ({ activeLink }) => {
  return (
    <div className="row mx-0 flex-nowrap align-items-baseline web-navbar">
      <nav>
        <Link href="/">
          <img src={logo} alt="web logo" className="desktop-logo" />
        </Link>
      </nav>
      <ul className="web-navbar-page-link-div">
        <li>
          <Link href="/">
            <a>
              <h5
                className={
                  activeLink === "home"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                HOME
              </h5>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/price">
            <a>
              <h5
                className={
                  activeLink === "price"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                PRICING
              </h5>
            </a>
          </Link>
        </li>
        {/* <li>
          <Link href="/features">
            <a>
              <h5
                className={
                  activeLink === "features"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                FEATURES
              </h5>
            </a>
          </Link>
        </li> */}
        <li>
          <Link href="/blog">
            <a>
              <h5
                className={
                  activeLink === "blog"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                BLOG
              </h5>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/help">
            <a>
              <h5
                className={
                  activeLink === "help"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                HELP
              </h5>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/new-updates">
            <a>
              <h5
                className={
                  activeLink === "newUpdates"
                    ? "nav-link nav-link--active"
                    : "nav-link"
                }
              >
                NEW UPDATES
              </h5>
            </a>
          </Link>
        </li>
      </ul>
      <div className="row mx-0 align-items-baseline">
        <a
          href={process.env.NEXT_PUBLIC_LOGIN_URL}
          target="_self"
          rel="noopener noreferrer"
        >
          <div className="web-login-button">
            <span className="web-login-button-text">Login / Sign Up</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LandingPageWebNavbar;

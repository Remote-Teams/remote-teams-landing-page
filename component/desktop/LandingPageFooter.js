import React from "react";
import Link from "next/link";

const logo = "./img/mobile/logo.png";
const icon1 = "./img/desktop/footer/icon1.png";
const icon2 = "./img/desktop/footer/icon2.png";
const icon3 = "./img/desktop/footer/icon3.png";

const LandingPageFooter = () => {
  return (
    <footer className="row mx-0 align-items-start footer-new">
      <div className="col-6 px-0">
        <div className="footer-new__logo">
          <Link href="/">
            <a>
              <img src={logo} alt="remote teams" />
            </a>
          </Link>
        </div>
        <h5 className="footer-new__text">
          <span className="footer-new__text1"> Work Remotely, Effectively</span>{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </h5>
        <div className="row mx-0 align-items-center footer-new-social-media">
          <img
            src={icon1}
            alt="twitter"
            className="footer-new-social-media__twitter footer-new-social-media__mr"
          />
          <img
            src={icon2}
            alt="facebook"
            className="footer-new-social-media__facebook footer-new-social-media__mr"
          />
          <img
            src={icon3}
            alt="instagram"
            className="footer-new-social-media__instagram"
          />
        </div>
      </div>
      <div className="col-6 px-0 footer-new__row__colm2">
        <div className="row mx-0 align-items-start">
          <div className="col-6 px-0">
            <Link href="/price">
              <a>
                <span className="footer-new-link-text">Pricing</span>
              </a>
            </Link>
            <br />
            <Link href="/terms-and-conditions">
              <a>
                <span className="footer-new-link-text">
                  Terms and Conditions
                </span>
              </a>
            </Link>
            <br />
            <Link href="/privacy-policy">
              <a>
                <span className="footer-new-link-text">Our Privacy Policy</span>
              </a>
            </Link>
          </div>
          <div className="col-6 px-0">
            <Link href="/blog">
              <a>
                <span className="footer-new-link-text">Blogs</span>
              </a>
            </Link>
            <br />
            <Link href="/help">
              <a>
                <span className="footer-new-link-text">Help &amp; Support</span>
              </a>
            </Link>
            <br />
            <Link href="/new-updates">
              <a>
                <span className="footer-new-link-text">New Updates!</span>
              </a>
            </Link>
          </div>
          <div className="col-12 px-0">
            <h6 className="footer-new-copyright-text">
              Copyrighted all rights reserved 2024
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingPageFooter;

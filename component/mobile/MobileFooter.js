import React from "react";
import Link from "next/link";

const logo = "./img/mobile/logo.png";
const icon1 = "./img/mobile/footer/icon1.png";
const icon2 = "./img/mobile/footer/icon2.png";
const icon3 = "./img/mobile/footer/icon3.png";

const MobileFooter = () => {
  return (
    <footer className="footer-new">
      <div className="d-flex flex-nowrap align-items-center footer-new__row1">
        <div className="footer-new__logo">
          <Link href="/">
            <a>
              <img src={logo} alt="remote teams" />
            </a>
          </Link>
        </div>

        <div className="row mx-0 flex-nowrap align-items-center footer-new-social-media">
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
      <h5 className="footer-new__text">
        <span className="footer-new__text1"> Work Remotely, Effectively.</span>
      </h5>

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
              <span className="footer-new-link-text">Terms and Conditions</span>
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
      </div>
      <h6 className="footer-new-copyright-text text-center">
        Copyrighted all rights reserved 2024
      </h6>
    </footer>
  );
};

export default MobileFooter;

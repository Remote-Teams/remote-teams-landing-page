import React from "react";
import Link from "next/link";
import MobileBurgerMenu from "./MobileBurgerMenu";

const logo = "./img/mobile/mobile-logo.png";

const MobileNavbar = () => {
  return (
    <div className="row mx-0 mobile-navbar-outer-div justify-content-between align-items-center">
      <Link href="/">
        <a>
          <div className="mobile-logo-div">
            <img src={logo} alt="mobile logo" className="img-fluid" />
          </div>
        </a>
      </Link>
      <MobileBurgerMenu />
    </div>
  );
};

export default MobileNavbar;

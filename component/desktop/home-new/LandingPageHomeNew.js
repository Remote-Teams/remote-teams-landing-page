import React from "react";
import LandingPageFooter from "../LandingPageFooter";
import LandingPageWebNavbar from "../LandingPageWebNavbar";
import LandingPageHomeNewFold1 from "./LandingPageHomeNewFold1";
import LandingPageHomeNewFold2 from "./LandingPageHomeNewFold2";
import LandingPageHomeNewFold3 from "./LandingPageHomeNewFold3";
import LandingPageHomeNewFold4 from "./LandingPageHomeNewFold4";
import LandingPageHomeNewLastFold from "./LandingPageHomeNewLastFold";

export default function LandingPageHomeNew() {
  return (
    <>
      <LandingPageWebNavbar activeLink="home" />
      <div className="dashboard-img-div">
        <img
          src="./img/desktop/home-new/dashboard.svg"
          alt="dashboard"
          className="dashboard-img"
        />
      </div>
      <LandingPageHomeNewFold1 />
      <div className="home-new-fold2-afterBlock">
        <LandingPageHomeNewFold2 />
        <LandingPageHomeNewFold3 />
      </div>
      <LandingPageHomeNewFold4 />
      <LandingPageHomeNewLastFold />
      <LandingPageFooter />
    </>
  );
}

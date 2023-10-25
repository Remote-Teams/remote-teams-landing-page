import React from "react";
import MobileFooter from "../MobileFooter";
import MobileNavbar from "../MobileNavbar";
import MobileLandingPageHomeFold1 from "./MobileLandingPageHomeFold1";
import MobileLandingPageHomeFold2 from "./MobileLandingPageHomeFold2";
import MobileLandingPageHomeFold3 from "./MobileLandingPageHomeFold3";

const MobileLandingPageHome = () => {
  return (
    <div>
      <MobileNavbar />
      <MobileLandingPageHomeFold1 />
      <MobileLandingPageHomeFold2 />
      <MobileLandingPageHomeFold3 />
      <MobileFooter />
    </div>
  );
};

export default MobileLandingPageHome;

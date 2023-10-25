import React from "react";
import MobileFooter from "../MobileFooter";
import MobileNavbar from "../MobileNavbar";
import MobileLandingPageHomeNewFold1 from "./MobileLandingPageHomeNewFold1";
import MobileLandingPageHomeNewFold2 from "./MobileLandingPageHomeNewFold2";
import MobileLandingPageHomeNewFold3 from "./MobileLandingPageHomeNewFold3";
import MobileLandingPageHomeNewLastFold from "./MobileLandingPageHomeNewLastFold";

const MobileLandingPageHomeNew = () => {
  return (
    <div>
      <MobileNavbar />
      <MobileLandingPageHomeNewFold1 />
      <MobileLandingPageHomeNewFold2 />
      <MobileLandingPageHomeNewFold3 />
      <MobileLandingPageHomeNewLastFold />
      <MobileFooter />
    </div>
  );
};

export default MobileLandingPageHomeNew;

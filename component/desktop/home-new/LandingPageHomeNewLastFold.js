import React from "react";
import HomePageVideo from "../HomePageVideo";

const LandingPageHomeNewLastFold = () => {
  return (
    <>
      <h2 className="home-new-last-fold-title">
        A Quick Video Of All Our Features.
      </h2>
      <div className="home-new-last-fold-arrow-block">
        <img src="./img/desktop/home-new/blue-arrow-1.svg" alt="" />
      </div>
      <div className="home-new-video-fold-block1">
        <HomePageVideo />
      </div>
    </>
  );
};

export default LandingPageHomeNewLastFold;

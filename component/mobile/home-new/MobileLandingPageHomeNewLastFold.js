import React from "react";
import HomePageVideo from "../../desktop/HomePageVideo";

const MobileLandingPageHomeNewLastFold = () => {
  return (
    <>
      <h2 className="home-new-last-fold-title">
        A Quick Video Of All <br />
        Our Features.
      </h2>
      <div className="home-new-last-fold-arrow-block">
        <img src="/img/mobile/home-new/video-spiral-arrow.svg" alt="" />
      </div>
      <div className="home-new-video-fold-block1">
        <HomePageVideo />
      </div>
    </>
  );
};

export default MobileLandingPageHomeNewLastFold;

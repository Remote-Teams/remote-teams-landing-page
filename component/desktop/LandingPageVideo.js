import React from "react";
import HomePageVideo from "./HomePageVideo";
//const poly = "/img/desktop/features/poly.png";

function LandingPageVideo() {
  return (
    <div className="column-div">
      <h1 className="font-18-semibold">
        Here's our detailed video showcasing all of our awesome features,
        <br />
        <br /> we have new features coming up almost every week!
      </h1>
      <div className="web-video-div column-div mt-50">
        {/*<img src={poly} alt="web poly" className="poly-img" />*/}
        <HomePageVideo />
      </div>
    </div>
  );
}

export default LandingPageVideo;

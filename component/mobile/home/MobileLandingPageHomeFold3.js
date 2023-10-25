import React from "react";
import HomePageVideo from "../HomePageVideo";

//const poly = "/img/mobile/home/poly.png";
const app = "./img/mobile/home/app.png";
const gradient = "./img/mobile/home/gradient.png";
const play = "./img/mobile/home/play.png";

const MobileLandingPageHomeFold3 = () => {
  return (
    <div className="column-div">
      <h1 className="pt-60 font-18-semibold">Work Remotely &amp; Smartly.</h1>
      <div className="mt-24 mobile-video-div column-div">
        {/*<img src={poly} alt="poly" className="poly-img" />*/}
        <HomePageVideo />
      </div>
      <div className="row mx-0 justify-content-between mt-30">
        <div className="play-store-img-div">
          <img src={play} alt="media" className="img-fluid" />
        </div>
        <div className="app-store-img-div">
          <img src={app} alt="media" className="img-fluid" />
        </div>
      </div>
      <div className="gradient-img-div">
        <img src={gradient} alt="gradient" className="img-fluid" />
      </div>
    </div>
  );
};

export default MobileLandingPageHomeFold3;

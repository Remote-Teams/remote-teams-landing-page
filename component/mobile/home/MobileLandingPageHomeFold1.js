import React from "react";
import Link from "next/link";

const img1 = "./img/mobile/home/home-fold1.png";
const arrow = "./img/mobile/home/arrow.png";

const MobileLandingPageHomeFold1 = () => {
  return (
    <div>
      <div className="mobile-home-fold1-outer-div">
        <h1 className="mobile-page-title">Remote Teams</h1>
        <h3 className="font-14-medium">
          Engineering process management
          <br />
          for teams that work remotely
        </h3>
        <div className="row mx-0 pt-34">
          <button className="mobile-gradient-btn">
            <span>
              {" "}
              Start Using{" "}
              <img src={arrow} alt="arrow" className="button-arrow" />
            </span>{" "}
          </button>
          <Link href="/contact">
            <a>
              <div className="mobile-grey-btn ml-20">
                <span>Book a demo</span>
              </div>
            </a>
          </Link>
        </div>
        <div className="row mx-0 justify-content-center mobile-fold1-img-div">
          <img src={img1} alt="mobile home main" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default MobileLandingPageHomeFold1;

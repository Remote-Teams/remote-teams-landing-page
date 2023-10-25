import React from "react";
import {
  workingStyle1,
  workingStyle2,
} from "../../desktop/home-new/remoteWorkingStyles";

export default function MobileLandingPageHomeNewFold2() {
  return (
    <>
      <h2 className="home-new-fold2-title">For all remote working styles</h2>
      <div className="home-new-fold2-row">
        <h3 className="home-new-fold2-text1">old school</h3>
        <div className="row mx-auto home-new-fold2-row__card-colm1-row">
          {workingStyle1.map((data, key) => (
            <div key={key} className="home-new-fold2-card">
              <div className={data.imgClassName}>
                <img src={data.imgPath} alt={data.name} />
              </div>
              <h4 className="home-new-fold2-card-text">{data.name}</h4>
            </div>
          ))}
        </div>

        <h3 className="home-new-fold2-text2">or</h3>
        <h3 className="home-new-fold2-text1 home-new-fold2-text1--new">
          new age
        </h3>
        <div className="row mx-auto home-new-fold2-row__card-colm2-row">
          {workingStyle2.map((data, key) => (
            <div key={key} className="home-new-fold2-card">
              <div className={data.imgClassName}>
                <img src={data.imgPath} alt={data.name} />
              </div>
              <h4 className="home-new-fold2-card-text">{data.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

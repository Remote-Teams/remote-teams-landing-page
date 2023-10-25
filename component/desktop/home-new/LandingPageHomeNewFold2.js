import React from "react";
import { workingStyle1, workingStyle2 } from "./remoteWorkingStyles";

export default function LandingPageHomeNewFold2() {
  return (
    <>
      <h2 className="home-new-fold2-title">For all remote working styles</h2>
      <div className="d-flex align-items-start home-new-fold2-row">
        <div className="home-new-fold2-row__card-colm1">
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
        </div>
        <h3 className="home-new-fold2-text2">or</h3>
        <div className="home-new-fold2-row__card-colm2">
          <h3 className="home-new-fold2-text1">new age</h3>
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
      </div>
    </>
  );
}

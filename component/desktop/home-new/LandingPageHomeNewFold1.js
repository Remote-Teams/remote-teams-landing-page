import React from "react";

export default function LandingPageHomeNewFold1() {
  return (
    <>
      <div className="home-new-fold1-div">
        <h2 className="home-64-extrabold-font">Remote Teams</h2>
        <p className="home-30-semiBold-font">
          The Ultimate Set of Productivity Tools for <br /> Tech Teams Working
          Remotely.
        </p>
        <div className="d-flex align-items-center home-new-fold1-btn-text-row">
          <button className="home-new-fold1-btn">Use Forever FREE.</button>
          <p>
            Your entire team, upto <b>10 users</b> <br /> can use for{" "}
            <b>free forever!</b>
          </p>
        </div>

        <div className="home-new-fold1-companies">
          <img src="/img/desktop/home-new/logo-revolut.svg" alt="revolut" />
          <img src="/img/desktop/home-new/logo-motorola.svg" alt="motorola" />
          <img src="/img/desktop/home-new/logo-hp.svg" alt="hp" />
          <img src="/img/desktop/home-new/logo-fedex.svg" alt="fedex" />
          <img src="/img/desktop/home-new/logo-canva.svg" alt="canva" />
          <img
            src="/img/desktop/home-new/logo-thought-works.svg"
            alt="thought works"
          />
          <img src="/img/desktop/home-new/logo-avanade.svg" alt="avanade" />
          <img src="/img/desktop/home-new/logo-sapient.svg" alt="sapient" />
        </div>
      </div>

      <div className="home-new-fold1-card-img">
        <img
          src="/img/desktop/home-new/fold-1-last-card-img.png"
          alt="A Platform where your team can Collaborate, Coordinate, Communicate"
        />
      </div>
    </>
  );
}

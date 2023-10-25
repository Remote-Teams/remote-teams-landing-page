import React, { useState } from "react";
const arrow = "/img/desktop/help/arrow.png";

const LandingPageHelpFaqs = ({ que, ans, img }) => {
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    setIsShowing(!isShowing);
  }
  return (
    <div>
      <div className="row mx-0 align-items-start pb-20">
        <div className="help-que-img-div">
          <img src={img} alt="help" className="img-fluid" />
        </div>
        <div>
          <div className="pt-25 pl-23">
            <h5 className="help-18-semibold">{que}</h5>
          </div>
          <div className="pt-6">
            {isShowing === true ? (
              <div>
                <div onClick={toggle} className="row mx-0 align-items-center">
                  <h2 className="font-14-bold">CLOSE ANSWER {""} x</h2>
                </div>
                <h2 className="help-answer-div">{ans}</h2>
              </div>
            ) : (
              <div onClick={toggle} className="row mx-0 align-items-center">
                <h2 className="font-14-bold">CHECK ANSWER</h2>
                <img src={arrow} alt="arrow" className="home-arrow-img" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageHelpFaqs;

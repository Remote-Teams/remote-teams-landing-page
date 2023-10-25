import React from "react";
import LandingPageWebNavbar from "./LandingPageWebNavbar";
import LandingPageFooter from "./LandingPageFooter";
import WriteModal from "./modal/WriteModal";

const p1 = "/img/desktop/price/p1.png";
const p2 = "/img/desktop/price/p2.png";
const p3 = "/img/desktop/price/p3.png";
const p4 = "/img/desktop/price/p4.png";
const p5 = "/img/desktop/price/p5.png";

const price = [
  {
    imgPath: p1,
    imgClass: "price1-img",
    name: "ASTRONAUT",
    user: "2-5",
    money: "$ 20/Mo",
  },
  {
    imgPath: p2,
    imgClass: "price2-img",
    name: "ROVER",
    user: "6-10",
    money: "$ 80/Mo",
  },
  {
    imgPath: p3,
    imgClass: "price3-img",
    name: "SPACESHIP",
    user: "11-15",
    money: "$ 160/Mo",
  },
  {
    imgPath: p4,
    imgClass: "price4-img",
    name: "SPACESTATION",
    user: "16-20",
    money: "$ 240/Mo",
  },
];

const LandingPagePrice = () => {
  return (
    <div>
      <LandingPageWebNavbar activeLink="price" />
      <div className="pl-200 pr-93 position-relative pt-130">
        <h1 className="web-page-title web-page-title--price text-uppercase ">
          Pricing
        </h1>

        <div className="row mx-0">
          {price.map((data, key) => (
            <div key={key} className="column-div mr-60">
              <div className="row mx-0 justify-content-center">
                <h5 className="price-font-24-extrabold pr-20">{data.name}</h5>
              </div>
              <div className="web-price-card-div">
                <div className="web-price-img-block">
                  <img
                    src={data.imgPath}
                    alt={data.name}
                    className={data.imgClass}
                  />
                </div>
                <div className="web-price-text-div">
                  <h5 className="price-font-14-semibold">{data.user} Users</h5>
                  <h5 className="price-font-18-semibold">{data.money}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mx-0 justify-content-center pt-55">
        <a
          href={process.env.NEXT_PUBLIC_LOGIN_URL}
          target="_self"
          rel="noopener noreferrer"
        >
          <div className="pink-gradient-button">Start Free Trial</div>
        </a>
      </div>
      <div className="row mx-0 justify-content-center">
        <div className="price-gradient-div"></div>
      </div>
      <div className="row mx-0 justify-content-center pt-33">
        <div className="column-div">
          <h5 className="price-font-24-extrabold pr-20">
            For enterprise solutions
          </h5>

          <div className="web-price-card-div">
            <div className="web-price-img-block">
              <img
                src={p5}
                alt="For enterprise solutions"
                className="price5-img-div"
              />
            </div>
            <div className="web-price-text-div web-price-text-div--price5">
              <h5 className="price-font-14-semibold">
                if your team size is above 20 and you plan on growing fast, we
                have bespoke plans for you
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mx-0 justify-content-center pt-45 pb-79">
        <WriteModal extraClass="price-grey-button" text="CONTACT US" />
      </div>
      <div className="pb-94">
        <LandingPageFooter />
      </div>
    </div>
  );
};

export default LandingPagePrice;

import React from "react";
import MobileNavbar from "../MobileNavbar";
import MobileFooter from "../MobileFooter";
import Link from "next/link";

const arrow = "./img/mobile/arrow.png";
const price1 = "./img/mobile/price/price1.png";
const price2 = "./img/mobile/price/price2.png";
const price3 = "./img/mobile/price/price3.png";
const price4 = "./img/mobile/price/price4.png";
const price5 = "./img/mobile/price/price5.png";

const price = [
  {
    imgPath: price1,
    imgClass: "price1-img",
    name: "ASTRONAUT",
    user: "2-5",
    money: "$ 20/Mo",
  },
  {
    imgPath: price2,
    imgClass: "price2-img",
    name: "ROVER",
    user: "6-10",
    money: "$ 80/Mo",
  },
  {
    imgPath: price3,
    imgClass: "price3-img",
    name: "SPACESHIP",
    user: "11-15",
    money: "$ 160/Mo",
  },
  {
    imgPath: price4,
    imgClass: "price4-img",
    name: "SPACESTATION",
    user: "16-20",
    money: "$ 240/Mo",
  },
];
const MobilePrice = () => {
  return (
    <div>
      <MobileNavbar />
      <div className="row align-items-end mx-0 pl-39">
        <Link href="/">
          <a>
            <img src={arrow} alt="back arrow" className="back-arrow" />
          </a>
        </Link>
        <h5 className="font-14-bold">GO BACK</h5>
      </div>
      <div className="postion-relative">
        <h5 className="font-96-extrabold">Pricing</h5>
        <h2 className="mobile-page-title mobile-page-title--pricing">
          Pricing
        </h2>
      </div>
      <div className="row mx-0 pl-39">
        {price.map((data, key) => (
          <div key={key} className="column-div">
            <h5 className="price-font-14-extrabold pr-28">{data.name}</h5>
            <div className="mobile-price-card-div">
              <div className="mobile-price-img-block">
                <img
                  src={data.imgPath}
                  alt={data.name}
                  className={data.imgClass}
                />
              </div>
              <div className="mobile-price-text-div">
                <h5 className="price-font-12-semibold">{data.user} Users</h5>
                <h5 className="price-font-14-semibold">{data.money}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row mx-0 justify-content-center align-items-start mt-15">
        <button className="mobile-gradient-btn mobile-gradient-btn--price">
          <span> Start Free Trial </span>{" "}
        </button>
      </div>
      <div className="column-div mt-29">
        <h5 className="price-font-14-extrabold ">For enterprise solutions</h5>
        <div className="mobile-price-card-div m-0">
          <div className="mobile-price-img-block">
            <img
              src={price5}
              alt="For enterprise solutions"
              className="price5-img-div"
            />
          </div>
          <div className="mobile-price-text-div">
            <h5 className="price-font-12-semibold">Lorem Ipsum</h5>
          </div>
        </div>
      </div>
      <div className="row mx-0 justify-content-center mt-30">
        <Link href="/contact">
          <a>
            <div className="mobile-grey-btn">
              <span>Contact Us</span>
            </div>
          </a>
        </Link>
      </div>
      <MobileFooter />
    </div>
  );
};

export default MobilePrice;

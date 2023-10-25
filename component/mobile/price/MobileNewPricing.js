import React, { useState } from "react";
import MobileNavbar from "../MobileNavbar";
import MobileFooter from "../MobileFooter";
import Link from "next/link";
import { Fragment } from "react";
import ReactFlagsSelect from "react-flags-select";
import { priceData } from "../../../store/data/priceData";
import isEmpty from "../../../store/validation/is-empty";

const arrow = "./img/mobile/arrow.png";

export default function MobileNewPricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [values, setValues] = useState({
    currency: "US",
  });
  const [currencyData, setCurrencyData] = useState(priceData);
  //==================== priceArray =====================//
  const priceArray = [
    {
      name: "Forever Free",
      price: "Free",
      desc: "Use our forever free plan with your team that gives you access to essential features to get your projects off the ground.",
      listTitle: "In Free plan you will get",
      list: [
        "10 users",
        "Project Management",
        "Members Management",
        "Client Management",
        "Calendar",
      ],
    },
    {
      name: "The Ark",
      price: "$12",
      desc: "Features that help you track projects better, get granular control over the tasks and time management for the team.",
      listTitle: "All of Free plus:",
      list: [
        "200 Users",
        "Presentations",
        "Finances",
        "Schedules",
        "Timesheets",
      ],
    },
    {
      name: "The Metaverse",
      price: "$23",
      desc: "Advanced features for highly efficient project management. Follow the best practices of the giants and minimize probability of failure.",
      listTitle: "All of Basic plus:",
      list: ["200 Users", "Workboard", "Presentation", "Finance", "Workflow"],
    },
  ];

  //==================== userCount =====================//
  const userCountArray = ["1 user", "10 users", "100 users", "200+ users"];

  /*===============================
  
            handleSlider 
  
  ======================================*/
  const handleSlider = (index) => {
    setActiveIndex(index);
  };

  /*====================================================
 
                renderPricingCard

======================================================*/
  const renderPricingCard = () => {
    let filterdata = [];
    if (!isEmpty(values.currency)) {
      let trimStr = values.currency.trim();
      let uperStr = trimStr.toUpperCase();
      let searchData = new RegExp(uperStr, "i");
      console.log(values.currency);
      filterdata = currencyData.filter((Data) => {
        if (searchData.test(Data.country)) {
          return Data;
        }
      });
    } else {
      filterdata = currencyData;
    }
    console.log(filterdata, "filteData");
    return (
      <>
        {priceArray.map((data, index) => (
          <Fragment key={index}>
            <div className="new-pricing-card">
              <h3 className="new-pricing-card__name">{data.name}</h3>
              {index === 0 ? (
                <h3 className="new-pricing-card__price">
                  <span> Free</span>/month
                </h3>
              ) : (
                <>
                  {filterdata.map((data, key) => (
                    <div className="price-cost-div" key={key}>
                      {/*getSymbolFromCurrency("USD")*/}
                      {index === 1 ? (
                        <h3 className="new-pricing-card__price">
                          <span>
                            {" "}
                            {data.symbol} {data.priceArk}
                          </span>
                          /month
                        </h3>
                      ) : index === 2 ? (
                        <h3 className="new-pricing-card__price">
                          <span>
                            {" "}
                            {data.symbol} {data.priceMetaverse}
                          </span>
                          /month
                        </h3>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </>
              )}
              {/* <h5 className="new-pricing-card__price">
                <span>{data.price}</span>/month
              </h5> */}{" "}
              <p className="new-pricing-card__desc">{data.desc}</p>
              <h4 className="new-pricing-card__list-title">{data.listTitle}</h4>
              <div className="new-pricing-card__list">
                {data.list.map((data, index) => (
                  <ul key={index}>
                    <li className="new-pricing-card__list-content">
                      <i className="fa fa-check" aria-hidden="true" />
                      {data}
                    </li>
                  </ul>
                ))}
              </div>
              <a
                href={process.env.NEXT_PUBLIC_LOGIN_URL}
                target="_self"
                rel="noopener noreferrer"
              >
                <div
                  className={
                    index === activeIndex
                      ? "new-pricing-card__btn new-pricing-card__btn--active"
                      : "new-pricing-card__btn"
                  }
                  onClick={() => handleSlider(index)}
                >
                  <span>Choose Plan</span>
                </div>
              </a>
            </div>
          </Fragment>
        ))}
      </>
    );
  };

  /*====================================================
 
                renderEnterpriceCard

======================================================*/
  const renderEnterpriceCard = () => {
    return (
      <>
        <div className="new-pricing-card">
          <h3 className="new-pricing-card__name">The Enterprise</h3>
          <p className="new-pricing-card__desc">
            For teams that want to scale their operations to the moon. We have
            custom plans for you. Get in touch with us and let's talk?
          </p>
          <Link href="/contact">
            <div
              className={
                activeIndex === 3
                  ? "new-pricing-card__btn new-pricing-card__btn--enterprise new-pricing-card__btn--active "
                  : "new-pricing-card__btn new-pricing-card__btn--enterprise"
              }
            >
              Contact Us
            </div>
          </Link>
        </div>
      </>
    );
  };

  /*====================================================
 
                return

======================================================*/
  return (
    <>
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
      <div className="pricing-main-div">
        <div className="row mx-0 align-items-center justify-content-between  pt-40">
          <div className="row mx-0 align-items-center flex-nowrap ">
            <h5 className="new-pricing-select-cureency-text">
              Select Currency
            </h5>
            <div className="currency-dropdown">
              <ReactFlagsSelect
                // selected={selected}
                // onSelect={(code) => setSelected(code)}
                selected={values.currency}
                onSelect={(code) =>
                  setValues({
                    currency: code,
                  })
                }
                //searchable
                countries={["US", "IN", "DE", "GB", "CA", "AU", "AE", "ZA"]}
                customLabels={{
                  US: "United States (USD)",
                  IN: "India (INR)",
                  DE: "Germany (EUR)",
                  GB: "United Kingdom (GBP)",
                  CA: "Canada (CAD)",
                  AU: "Australia (AUD)",
                  AE: "United Arab Emirates (AED)",
                  ZA: "South Africa (ZAR)",
                }}
                placeholder="Currency"
              />{" "}
            </div>
          </div>
          <div>
            <div
              className={
                activeIndex === 1
                  ? "new-pricing-slider new-pricing-slider--10users"
                  : activeIndex === 2
                  ? "new-pricing-slider new-pricing-slider--100users"
                  : activeIndex === 3
                  ? "new-pricing-slider new-pricing-slider--200users"
                  : "new-pricing-slider"
              }
            >
              {userCountArray.map((data, key) => (
                <Fragment key={key}>
                  <button
                    className={
                      key < activeIndex
                        ? "new-pricing-slider-btn new-pricing-slider-btn--inactive"
                        : key === activeIndex
                        ? "new-pricing-slider-btn new-pricing-slider-btn--active"
                        : "new-pricing-slider-btn"
                    }
                    onClick={() => handleSlider(key)}
                  ></button>
                </Fragment>
              ))}
            </div>
            {userCountArray.map((data, key) => (
              <Fragment key={key}>
                <span
                  className={
                    key === 3
                      ? "new-pricing-slider-text mr-0"
                      : "new-pricing-slider-text"
                  }
                  onClick={() => handleSlider(key)}
                >
                  {data}
                </span>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="pricing-card-div justify-content-between row mx-0  ">
          {renderPricingCard()}
          {renderEnterpriceCard()}
        </div>
      </div>{" "}
      <MobileFooter />
    </>
  );
}

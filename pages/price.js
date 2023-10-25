import React from "react";
import HeadTag from "../component/common/HeadTag";
import LandingPageNewPricing from "../component/desktop/LandingPageNewPricing";
import MobileNewPricing from "../component/mobile/price/MobileNewPricing";
// import LandingPagePrice from "../component/desktop/LandingPagePrice";
// import MobilePrice from "../component/mobile/price/MobilePrice";

export default function price() {
  return (
    <>
      <HeadTag
        pageTitle="Pricing for Remote Teams"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/price`}
      />

      <div className="d-none d-md-block">
        {/* <LandingPagePrice /> */}
        <LandingPageNewPricing />
      </div>

      <div className="d-block d-md-none">
        {/* <MobilePrice /> */}
        <MobileNewPricing />
      </div>
    </>
  );
}

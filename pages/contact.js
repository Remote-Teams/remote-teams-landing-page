import React from "react";
import HeadTag from "../component/common/HeadTag";
import MobileLandingPageContact from "../component/mobile/contact/MobileLandingPageContact";

export default function contact() {
  return (
    <>
      <HeadTag
        pageTitle="Contact Us at Remote Teams"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/contact`}
      />

      <div className="d-block d-md-none">
        <MobileLandingPageContact />
      </div>
    </>
  );
}

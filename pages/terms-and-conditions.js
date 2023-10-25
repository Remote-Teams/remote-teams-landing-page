import React from "react";
import HeadTag from "../component/common/HeadTag";
import LandingPageTermsAndConditions from "../component/desktop/LandingPageTermsAndConditions";

export default function termsAndConditions() {
  return (
    <>
      <HeadTag
        pageTitle="Terms and Conditions"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/terms-and-conditions`}
      />

      <div className="d-none d-md-block">
        <LandingPageTermsAndConditions />
      </div>
    </>
  );
}

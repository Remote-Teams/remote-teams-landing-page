import React from "react";
import HeadTag from "../component/common/HeadTag";
import LandingPageFeatures from "../component/desktop/LandingPageFeatures";

export default function features() {
  return (
    <>
      <HeadTag
        pageTitle="Features of Remote Teams"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/features`}
      />

      <div className="d-none d-md-block">
        <LandingPageFeatures />
      </div>
    </>
  );
}

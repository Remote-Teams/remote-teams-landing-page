import React from "react";
import HeadTag from "../component/common/HeadTag";
import LandingPagePrivacy from "../component/desktop/LandingPagePrivacy";

export default function privacyPolicy() {
  return (
    <>
      <HeadTag
        pageTitle="Remote Teams Privacy Policy"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/privacy-policy`}
      />

      <div className="d-none d-md-block">
        <LandingPagePrivacy />
      </div>
    </>
  );
}

import React from "react";
import HeadTag from "../component/common/HeadTag";
import LandingPageNewUpdates from "../component/desktop/LandingPageNewUpdates";

export default function NewUpdates() {
  return (
    <>
      <HeadTag
        pageTitle="New Updates"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/new-updates`}
      />

      <div className="d-none d-md-block">
        <LandingPageNewUpdates />
      </div>
    </>
  );
}

import React from "react";
import HeadTag from "../component/common/HeadTag";
import LandingPageHelp from "../component/desktop/LandingPageHelp";

export default function help() {
  return (
    <>
      <HeadTag
        pageTitle="Help and FAQs"
        canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/help`}
      />

      <div className="d-none d-md-block">
        <LandingPageHelp />
      </div>
    </>
  );
}

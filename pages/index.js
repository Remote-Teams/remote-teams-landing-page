import HeadTag from "../component/common/HeadTag";
import LandingPageHomeNew from "../component/desktop/home-new/LandingPageHomeNew";
import MobileLandingPageHomeNew from "../component/mobile/home-new/MobileLandingPageHomeNew";
// import LandingPageHome from "../component/desktop/LandingPageHome";
import MobileLandingPageHome from "../component/mobile/home/MobileLandingPageHome";

export default function Home() {
  return (
    <>
      <HeadTag />

      <div className="d-none d-md-block">
        {/* <LandingPageHome /> */}
        <LandingPageHomeNew />
      </div>
      <div className="d-block d-md-none">
        {/* <MobileLandingPageHome /> */}
        <MobileLandingPageHomeNew />
      </div>
    </>
  );
}

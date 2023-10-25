import React from "react";
import LandingPageWebNavbar from "./LandingPageWebNavbar";
import LandingPageVideo from "./LandingPageVideo";
import LandingPageFooter from "./LandingPageFooter";

const f1 = "./img/desktop/features/f1.png";
const f2 = "./img/desktop/features/f2.png";
const f3 = "./img/desktop/features/f3.png";
const f4 = "./img/desktop/features/f4.png";
const f5 = "./img/desktop/features/f5.png";
const f6 = "./img/desktop/features/f6.png";
const f7 = "./img/desktop/features/f7.png";
const f8 = "./img/desktop/features/f8.png";
const f9 = "./img/desktop/features/f9.png";
const f10 = "./img/desktop/features/f10.png";
const f11 = "./img/desktop/features/f11.png";
const f12 = "./img/desktop/features/f12.png";
const f13 = "./img/desktop/features/f13.png";
const f14 = "./img/desktop/features/f14.png";
const f15 = "./img/desktop/features/f15.png";
const f16 = "./img/desktop/features/f16.png";
const f17 = "./img/desktop/features/f17.png";
const f18 = "./img/desktop/features/f18.png";
const f19 = "./img/desktop/features/f19.png";
const f20 = "./img/desktop/features/f20.png";
const f21 = "./img/desktop/features/f21.png";
const f22 = "./img/desktop/features/f22.png";
const f23 = "./img/desktop/features/f23.png";
const f24 = "./img/desktop/features/f24.png";

const features1 = [
  {
    imgPath: f1,
    imgClassName: "feature-img1",
    name: "Gantt chart",
  },
  {
    imgPath: f2,
    imgClassName: "feature-img2",
    name: "Kanban Board",
  },
  {
    imgPath: f3,
    imgClassName: "feature-img3",
    name: "Task Scheduling",
  },
  {
    imgPath: f4,
    imgClassName: "feature-img4",
    name: "Scrum Scheduling",
  },
  {
    imgPath: f5,
    imgClassName: "feature-img5",
    name: "Discussion Forum",
  },
  {
    imgPath: f6,
    imgClassName: "feature-img6",
    name: "Subscriptions",
  },
];
const features2 = [
  {
    imgPath: f7,
    imgClassName: "feature-img7",
    name: "Workflows",
  },
  {
    imgPath: f8,
    imgClassName: "feature-img8",
    name: "Timesheet",
  },
  {
    imgPath: f9,
    imgClassName: "feature-img9",
    name: "Video Conference",
  },
  {
    imgPath: f10,
    imgClassName: "feature-img10",
    name: "To-Do List",
  },
  {
    imgPath: f11,
    imgClassName: "feature-img11",
    name: "Announcements",
  },
  {
    imgPath: f12,
    imgClassName: "feature-img12",
    name: "Files Vault",
  },
];
const features3 = [
  {
    imgPath: f13,
    imgClassName: "feature-img13",
    name: "Chat Assistants",
  },
  {
    imgPath: f14,
    imgClassName: "feature-img14",
    name: "High End Reports",
  },
  {
    imgPath: f15,
    imgClassName: "feature-img15",
    name: "Proposals",
  },

  {
    imgPath: f16,
    imgClassName: "feature-img16",
    name: "Access Roles",
  },
  {
    imgPath: f17,
    imgClassName: "feature-img17",
    name: "Provide Support",
  },
  {
    imgPath: f18,
    imgClassName: "feature-img18",
    name: "Drawboard",
  },
];

const features4 = [
  {
    imgPath: f19,
    imgClassName: "feature-img19",
    name: "Expense Tracking",
  },
  {
    imgPath: f20,
    imgClassName: "feature-img20",
    name: "Calendar",
  },
  {
    imgPath: f21,
    imgClassName: "feature-img21",
    name: "Invoicing",
  },
  {
    imgPath: f22,
    imgClassName: "feature-img22",
    name: "Real Time Chat",
  },
  {
    imgPath: f23,
    imgClassName: "feature-img23",
    name: "Notes",
  },
  {
    imgPath: f24,
    imgClassName: "feature-img24",
    name: "Manage Clients",
  },
];

const LandingPageFeatures = () => {
  return (
    <div>
      <LandingPageWebNavbar activeLink="features" />
      <div className="pl-81 position-relative">
        <h1 className="web-page-title text-uppercase">features</h1>
        <h5 className="font-36-semibold">
          Hundreds of features in store for you
        </h5>
      </div>
      <div className="row mx-0 pl-135 pr-200 pt-40">
        {features1.map((data, key) => (
          <div key={key}>
            <div className="feature-card ml-40">
              <div className={data.imgClassName}>
                <img src={data.imgPath} alt={data.name} className="img-fluid" />
              </div>
              <h5 className="font-12-semiBold">{data.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="row mx-0 pl-81 pr-200">
        {features2.map((data, key) => (
          <div key={key}>
            <div className="feature-card ml-40">
              <div className={data.imgClassName}>
                <img src={data.imgPath} alt={data.name} className="img-fluid" />
              </div>
              <h5 className="font-12-semiBold">{data.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="row mx-0 pl-135 pr-200">
        {features3.map((data, key) => (
          <div key={key}>
            <div className="feature-card ml-40">
              <div className={data.imgClassName}>
                <img src={data.imgPath} alt={data.name} className="img-fluid" />
              </div>
              <h5 className="font-12-semiBold">{data.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="row mx-0 pl-81 pr-200">
        {features4.map((data, key) => (
          <div key={key}>
            <div className="feature-card ml-40">
              <div className={data.imgClassName}>
                <img src={data.imgPath} alt={data.name} className="img-fluid" />
              </div>
              <h5 className="font-12-semiBold">{data.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="row mx-0 justify-content-center pb-86 pt-50">
        <button className="pink-gradient-button">try now</button>
      </div>
      <LandingPageVideo />
      <div className="mt-94 mb-150">
        <LandingPageFooter />
      </div>
    </div>
  );
};

export default LandingPageFeatures;

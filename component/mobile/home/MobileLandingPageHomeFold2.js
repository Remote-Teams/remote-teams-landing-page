import React from "react";
const icon1 = "/img/mobile/features/icon1.png";
const icon2 = "/img/mobile/features/icon2.png";
const icon3 = "/img/mobile/features/icon3.png";
const icon4 = "/img/mobile/features/icon4.png";
const icon5 = "/img/mobile/features/icon5.png";
const icon6 = "/img/mobile/features/icon6.png";
const icon7 = "/img/mobile/features/icon7.png";
const icon8 = "/img/mobile/features/icon8.png";
const icon9 = "/img/mobile/features/icon9.png";
const icon10 = "/img/mobile/features/icon10.png";
const icon11 = "/img/mobile/features/icon11.png";
const icon12 = "/img/mobile/features/icon12.png";

const features = [
  {
    imgPath: icon1,
    imgClass: "icon1-div",
    name: "Gantt chart",
  },
  {
    imgPath: icon2,
    imgClass: "icon2-div",
    name: "Kanban Board",
  },
  {
    imgPath: icon3,
    imgClass: "icon3-div",
    name: "Task Scheduling",
  },
  {
    imgPath: icon4,
    imgClass: "icon4-div",
    name: "Workflows",
  },
  {
    imgPath: icon5,
    imgClass: "icon5-div",
    name: "Timesheet",
  },
  {
    imgPath: icon6,
    imgClass: "icon6-div",
    name: "Video Conference",
  },
  {
    imgPath: icon7,
    imgClass: "icon7-div",
    name: "Chat Assistants",
  },
  {
    imgPath: icon8,
    imgClass: "icon8-div",
    name: "High End Reports",
  },
  {
    imgPath: icon9,
    imgClass: "icon9-div",
    name: "Proposals",
  },
  {
    imgPath: icon10,
    imgClass: "icon10-div",
    name: "Expense Tracking",
  },
  {
    imgPath: icon11,
    imgClass: "icon11-div",
    name: "Calendar",
  },
  {
    imgPath: icon12,
    imgClass: "icon12-div",
    name: "Invoicing",
  },
];

const MobileLandingPageHomeFold2 = () => {
  return (
    <>
      <div className="pl-30">
        <h5 className="font-16-medium pt-34">Hundreds of</h5>
        <h5 className="font-24-bold">
          Features in store <br />
          for you.
        </h5>
      </div>
      <div className="row mx-0 pt-22">
        {features.map((data, key) => (
          <div key={key}>
            {key === 0 || key === 6 ? (
              <div className="mobile-home-features-div ml-50">
                <div className={data.imgClass}>
                  <img
                    src={data.imgPath}
                    alt="mobile icon"
                    className="img-fluid"
                  />
                </div>
                <h5 className="font-9-semibold">{data.name}</h5>
              </div>
            ) : (
              <div className="mobile-home-features-div ml-10">
                <div className={data.imgClass}>
                  <img
                    src={data.imgPath}
                    alt="mobile icon"
                    className="img-fluid"
                  />
                </div>
                <h5 className="font-9-semibold">{data.name}</h5>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileLandingPageHomeFold2;

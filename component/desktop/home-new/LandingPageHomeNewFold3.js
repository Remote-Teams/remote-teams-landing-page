import React from "react";

export default function LandingPageHomeNewFold3() {
  return (
    <div className="home-new-fold3">
      <h2 className="home-new-fold3__title1">
        Take Remote Productivity <br /> into the Future.
      </h2>
      <p className="home-new-fold3__desc1">
        With Our Proprietary Bots Available On{" "}
        <img src="/img/desktop/home-new/slack-icon.svg" alt="slack" /> Slack,
        <br />{" "}
        <img src="/img/desktop/home-new/discord-icon.svg" alt="discord" />{" "}
        Discord and{" "}
        <img
          src="/img/desktop/home-new/remote-teams-icon.svg"
          alt="remote teams"
        />{" "}
        Remote Teams.
      </p>

      {/* 1 */}
      <section className="home-new-fold3-section1">
        <div className="home-new-fold3__text1Block home-new-fold3__text1Block--borderBottom">
          <h3 className="home-new-fold3__text1-count">1</h3>
          <h3 className="home-new-fold3__text1 ml-auto">
            <span className="home-new-fold3__text1--span">
              Save Time With Our
            </span>
            <br />
            Task Assignment Bot
          </h3>
        </div>
        <div className="home-new-fold3__img1-block">
          <img src="/img/desktop/home-new/task-assignment-bot-new.png" alt="" />
        </div>
      </section>

      {/* 2 */}
      <section className="home-new-fold3-section2">
        <div className="home-new-fold3__text1Block home-new-fold3__text1Block--borderBottom-2">
          <h3 className="home-new-fold3__text1-count">2</h3>
          <h3 className="home-new-fold3__text1">
            <span className="home-new-fold3__text1--span">
              Eliminate Follow up with our
            </span>
            <br />
            Task Assistant Bot
          </h3>
        </div>
        <p className="home-new-fold3__text1-desc">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
          Your project managers can now spend more time &#34;managing&#34; and
          don&apos;t have to &#34;coordinate&#34; anymore. Our task assistant
          bots do that for them
        </p>
        <div className="home-new-fold3__img2-block">
          <img src="/img/desktop/home-new/task-assistant-bot.png" alt="" />
        </div>
      </section>

      {/* 3 */}
      <section className="home-new-fold3-section3">
        <div className="home-new-fold3__text1Block home-new-fold3__text1Block--borderBottom-3">
          <h3 className="home-new-fold3__text1-count">3</h3>
          <h3 className="home-new-fold3__text1 ml-auto">
            <span className="home-new-fold3__text1--span">
              Automate Reminders with our
            </span>
            <br />
            Reminder Assistance Bot
          </h3>
          <p className="home-new-fold3__text1-desc float-right mt-50">
            It&apos;s common to forget tasks and deadlines. And this is why our
            reminder assistant stays with you to remind them about impending
            deadlines.{" "}
          </p>
        </div>
        <div className="home-new-fold3__img3-block">
          <img src="/img/desktop/home-new/reminder-assistance-bot.png" alt="" />
        </div>
      </section>

      {/* 4 */}
      <section className="home-new-fold3-section4">
        <div className="home-new-fold3__text1Block home-new-fold3__text1Block--borderBottom-4">
          <h3 className="home-new-fold3__text1-count">4</h3>
          <h3 className="home-new-fold3__text1">
            <span className="home-new-fold3__text1--span">
              Plan Effectively with our
            </span>
            <br />
            <span className="home-new-fold3-border-1">
              Planning Assistance Bot
            </span>{" "}
            {/* <br /> */}
            {/* <span className="home-new-fold3-border-2"></span> */}
          </h3>
          <p className="home-new-fold3__text1-desc home-new-fold3__text1-desc--4  mt-50 ">
            New product features require planning - in terms of time and
            resources. Work with our planning assistance bot to help you find
            availablity on team member&apos;s calendars, finding common times
            and setting up meetings.{" "}
          </p>
        </div>
        <div className="home-new-fold3__img4-block">
          <img src="/img/desktop/home-new/planning-assistance-bot.svg" alt="" />
        </div>
      </section>
    </div>
  );
}

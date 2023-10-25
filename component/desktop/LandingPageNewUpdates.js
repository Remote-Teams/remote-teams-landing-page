import React from "react";
import { Fragment } from "react";
import LandingPageFooter from "./LandingPageFooter";
import LandingPageWebNavbar from "./LandingPageWebNavbar";
const data = [
  {
    title: "Deep Integration with Airtable Launched! ",
    icon: "🚀",
    label: "rocket",
    para: "We’ve just launched our airtable deep integration. Now work seamlessly and more smoothly between Remote Teams and AirTable.",
    // date: "10th Dec 2021.",
    date: "30 Apr 2022",
  },
  {
    title: "New Slack Bots for Task Assignment Workflow ✔",
    icon: "☀️",
    label: "sun",
    para: "Users can now simple tell their bot to create the project and tasks and then the bot will also assign the tasks to the relevant memebers of the team.",
    // date: "5th Dec 2021.",
    date: "5th Apr 2022",
  },
  {
    title: "Launched 2 new Slack Bots.",
    icon: "🎌",
    label: "flag",
    para: "Reminder assistance and Planning assistance bots launched by us today to help your team work remotely more effectively.",
    // date: "25th Nov 2021.",
    date: "26th Mar 2022",
  },
  {
    title: "Workflows launched ",
    icon: "🎿🎿",
    label: "shoe",
    para: "Our biggest feature yet - workflows - complete and ready to be used. We plan to refine this feature every few weeks and also add new workflows.",
    // date: "18th Nov 2021.",
    date: "18th Feb 2022",
  },
  {
    title: "Fixed 3 bugs in Gantt Charts ",
    icon: "🐛",
    label: "ant",
    para: "We were facing some bugs in the front end gantt chart components. We have now gone ahead and fixed them. Here’s to a smoother gantt charts experience 🥂",
    // date: "1st Nov 2021.",
    date: "5th Jan 2022",
  },
  {
    title: "Our Task Follow Up Bot Launched ",
    icon: "⏱️",
    label: "clock",
    para: "Automate your followups with your team with the help of our task follow up bot. Go ahead and use it - it’s now available on Slack, Discord and your Remote Teams dashboard.",
    // date: "21st Oct 2021.",
    date: "21st Dec 2021",
  },

  {
    title: "We’re Now Integrated With Zapier ",
    icon: "🏅",
    label: "medal",
    para: "All the tools that you love using are now integrated with Remote Teams. After many requests to be able to build custom workflows, we’ve gone ahead and integrated with zapier so you can be 10x more productive.",
    // date: "12th Oct 2021.",
    date: "12th Nov 2021",
  },
  {
    title: "We exited Alpha today ",
    icon: "💯",
    label: "number",
    para: "We’ve been in alpha for quite some time now, testing, fixing and buildig basic stability. We’re stoked to announce that we’re now entering Beta 😀",
    // date: "3rd Oct 2021.",
    date: "3rd Nov 2021",
  },
  {
    title: "Onboarded 10 new teams to Remote Teams ✨",
    icon: "🎉",
    label: "emoji",
    para: "In just a week’s time, 10 new tech teams that work remotely have been onboarded onto Remote Teams. We wish them luck and 100x productivity on our platform.",
    // date: "23rd Sept 2021.",
    date: "23rd Oct 2021",
  },
  {
    title: "Lauching Time Trackers ⏰",
    icon: "🏹",
    label: "arrow ",
    para: "Project Managers and Product Owners need to track time and related expenses of their teams. We’ve now launched a feature that helps them do exactly that.",
    // date: "12th Aug 2021.",
    date: "12th Sep 2021",
  },
  {
    title: "Discord Bots for Better Productivity ",
    icon: "🤖",
    label: "robot",
    para: "We’ve always been on Slack but have recently started seeing the immense value that comes by being part of the discord network. We’re glad to announce that we’re on Discord as well.",
    date: "4th Aug 2021.",
  },
];
export default function LandingPageNewUpdates() {
  return (
    <>
      <LandingPageWebNavbar activeLink="newUpdates" />
      <div className="new-updates-main">
        <img
          src="/img/desktop/new-updates/confetti.png"
          alt="confetti"
          className="new-updates-confetti-img"
        />
        <h1 className="home-new-fold2-title home-new-fold2-title--new-updates">
          New Updates!!
        </h1>
        {/* card 1 */}
        {data.map((data, key) => (
          <Fragment key={key}>
            <div className="new-updates-main-card-all">
              <div className="new-updates-main-card">
                <div className="d-flex align-items-end justify-content-between new-updates-main-card__row">
                  <h2 className="new-updates-main-card__text1">
                    {/* Deep Integration with Airtable Launched!{" "} */}
                    {data.title}
                    <span role="img" aria-label={data.label}>
                      {/* 🚀 */}
                      {data.icon}
                    </span>
                  </h2>
                  <p className="new-updates-main-card__text2">
                    {/* 10th Dec 2021. */}
                    {data.date}
                  </p>
                </div>
                <p className="new-updates-main-card__text3">
                  {/* We’ve just launched our airtable deep integration. Now work
                  seamlessly and more smoothly between Remote Teams and
                  AirTable! */}
                  {data.para}
                </p>
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      <LandingPageFooter />
    </>
  );
}

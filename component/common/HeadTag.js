import React from "react";
import Head from "next/head";

export default function HeadTag({
  pageTitle,
  pageDescription,
  keywords,
  canonical,
  ogType,
  ogImage,
  ogTitle,
  ogDesription,
  ogSiteName,
}) {
  return (
    <Head>
      {/* title */}
      <title>{pageTitle}</title>

      {/* description */}
      <meta name="description" content={pageDescription} />

      {/* keywords */}
      <meta name="keywords" content={keywords} />

      {/* robots */}
      <meta name="robots" content="index,follow" />

      {/* canonical */}
      <link rel="canonical" href={canonical} />

      {/* og tags */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="600" />
      <meta property="og:image:height" content="315" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={ogSiteName} />
    </Head>
  );
}

HeadTag.defaultProps = {
  pageTitle:
    "Remote Teams | World's best productivity management tool for teams that work remotely.",
  pageDescription:
    "Free Team Productivity Tool for Startup teams that work remotely. Enables teams to work on projects remotely and virtually by helping to track, manage and organize tasks. Use modern project management tools like gantt charts, kanban boards, priority matrix, tables, schedules. Manage your team's time using time tracking and timesheets. Work remotely, effectively.",
  keywords:
    "project management, productivity tool, collaboration, remote work, kanban, gantt chart, timesheet tracking, calendar and scheduling, kanban board, agile project management, microsoft project, trello alternatives, monday alternatives, free project management tool, free time tracking, asana alternative, asana competitor, trello competitor, wrike alternative, ms project alternative, best project management tool, simple project management, project management for startups, tech project management, project management tool for india, indian project management tool, project management for service company, project management for tech services, clickup pricing, clickup alternative, clickup competitor, basecamp alternative, jira alternative, agile project management, jira competitor, agile methodology, agile scrum, agile project management tool, project management for agile, agile development, agile software development, agile process, agile teams.",
  canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/`,
  ogType: "website",
  ogImage:
    "https://res.cloudinary.com/dd4krpktw/image/upload/v1622466532/meta-og-image/meta-og-img-remote-teams_ekmrrp.png",
  ogTitle: "Remote Teams - Remote Project Management.",
  ogDesription:
    "Free Team Productivity Tool for Startup teams that work remotely. Enables teams to work on projects remotely and virtually by helping to track, manage and organize tasks. Use modern project management tools like gantt charts, kanban boards, priority matrix, tables, schedules. Manage your team's time using time tracking and timesheets. Work remotely, effectively.",
  ogSiteName: "www.remote-teams.io",
};

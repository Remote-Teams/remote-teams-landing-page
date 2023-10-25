// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { fetchAPI } from "../api/blogs";
import isEmpty from "../../store/validation/is-empty";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const [articles] = await Promise.all([fetchAPI("/domblogs")]);

  const fields = [];

  !isEmpty(articles) &&
    articles.map((data, index) =>
      fields.push({
        loc: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${data.slug}`, // Absolute url
        lastmod: new Date().toISOString(),
        // changefreq
        // priority
      })
    );

  // console.log("fields", fields);

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const ServerSitemap = () => <></>;
export default ServerSitemap;

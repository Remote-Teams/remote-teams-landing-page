import React, { useState, useEffect } from "react";
import HeadTag from "../component/common/HeadTag";
// import LandingPageTermsAndConditions from "../component/desktop/LandingPageTermsAndConditions";
import BlogDetailMain from "../component/desktop/blog-detail/BlogDetailMain";
import BlogDetailMobileMain from "../component/mobile/blog-detail/BlogDetailMobileMain";

export default function termsAndConditions() {
  const [blogDetailData, setBlogDetailData] = useState({});
  useEffect(() => {
    let blogDetails = JSON.parse(localStorage.getItem("selectedBlog"));
    console.log("blogDetails", blogDetails);
    setBlogDetailData(blogDetails);
  }, []);

  return (
    <>
      {/* {console.log("article:", article)} */}
      {/* <h1>{article.title}</h1> */}

      {/* {!isEmpty(article) && (
        <HeadTag
          pageTitle="Blogs And Knowledge - Remote Teams"
          pageDescription={article.description}
          canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${article.slug}`}
          ogType="blog"
          ogTitle={article.title}
          ogDesription={article.description}
        />
      )} */}

      <div className="d-none d-md-block blog-bg">
        <BlogDetailMain
          blogDetails={blogDetailData}
          latestBlog={blogDetailData}
          recommendedBlogs={blogDetailData}
        />
      </div>
      <div className="d-block d-md-none blog-bg">
        <BlogDetailMobileMain
          blogDetails={blogDetailData}
          latestBlog={blogDetailData}
          recommendedBlogs={blogDetailData}
        />
      </div>
    </>
  );
}

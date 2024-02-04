import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import isEmpty from "../../../store/validation/is-empty";
import MobileNavbar from "../MobileNavbar";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";
import BlogMainAuthorBlock from "../../desktop/blog/BlogMainAuthorBlock";

export default function BlogDetailMobileMain({
  blogDetails,
  latestBlog,
  recommendedBlogs,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MobileNavbar />
      <article>
        <div className="blog-fold-1--detail">
          <Link href="/blog">
            <a className="blog-details-social-media-block__text blog-go-back">
              <img
                src="/img/desktop/blog-detail/left-arrow.svg"
                alt="left arrow"
              />
              BACK TO BLOGS
            </a>
          </Link>
          <div className="blog-fold-1__colm1">
            <div className="blog-fold-2-img-block">
              <img
                // src="/img/desktop/blog/blog-fold2-img.svg"
                src={blogDetails.imgUrl}
                // alt={blogDetails.featured_image[0].alternativeText}
              />
            </div>
            <div className="mobile-blog-detail-fold-1-text-content">
              <div className="blog-fold-1-tags-block row mx-0 align-items-center">
                {!isEmpty(blogDetails.tag1) && (
                  <div className="new-blog-technology-div">
                    <span>{blogDetails.tag1}</span>
                  </div>
                )}
                {!isEmpty(blogDetails.tag2) && (
                  <div className="new-blog-technology-div">
                    <span>{blogDetails.tag2}</span>
                  </div>
                )}
              </div>
              <div className={"blog-fold-2__colm1-blog-content"}>
                <h2 className="blog-title-1 blog-title-1--blogDetail">
                  {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
                  {blogDetails.title}
                </h2>

                <BlogMainAuthorBlock
                  displayImage={isEmpty(blogDetails.authorImg) ? false : true}
                  authorImg={
                    !isEmpty(blogDetails.authorImg) ? blogDetails.authorImg : ""
                  }
                  authorName={blogDetails.author}
                  blogUpatedAt={blogDetails.datePosted}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="blog-detail-content-desc">
          <ReactMarkdown source={blogDetails.description} escapeHtml={false} />
        </div>
        {/* <BlogDetailsFooterSocialMedia blogSlug={blogDetails.slug} /> */}

        {/* {!isEmpty(recommendedBlogs) || !isEmpty(latestBlog) ? (
          <div className="blog-detail-suggest-blog-row row mx-0 flex-nowrap align-items-stretch">
            {!isEmpty(recommendedBlogs) && (
              <div
                className={
                  !isEmpty(latestBlog)
                    ? "blog-detail-suggest-blog-row__colm1 flex-shrink-0"
                    : "blog-detail-suggest-blog-row__colm1 flex-grow-1"
                }
              >
                <h3 className="blog-details-social-media-block__text">
                  recommended post
                </h3>
               
                <Link
                  as={`/blog/${recommendedBlogs[0].slug}`}
                  href="/blog/[id]"
                >
                  <a>
                    <h4 className="blog-detail-suggest-blog-row__blogTitle">
                      {recommendedBlogs[0].title}
                    </h4>
                  </a>
                </Link>
              </div>
            )}
            {!isEmpty(latestBlog) && (
              <div
                className={
                  !isEmpty(recommendedBlogs)
                    ? "blog-detail-suggest-blog-row__colm2"
                    : "blog-detail-suggest-blog-row__colm2 flex-grow-1"
                }
              >
                <h3 className="blog-details-social-media-block__text">
                  latest post
                </h3>
                <Link as={`/blog/${latestBlog.slug}`} href="/blog/[id]">
                  <a>
                    <h4 className="blog-detail-suggest-blog-row__blogTitle">
                      
                      {latestBlog.title}
                    </h4>
                  </a>
                </Link>
              </div>
            )}
          </div>
        ) : (
          ""
        )} */}
      </article>
    </>
  );
}

import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import LandingPageWebNavbar from "../LandingPageWebNavbar";
import isEmpty from "../../../store/validation/is-empty";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";
import BlogMainAuthorBlock from "../blog/BlogMainAuthorBlock";
import LandingPageFooter from "../LandingPageFooter";

export default function BlogDetailMain({
  blogDetail,
  latestBlog,
  recommendedBlogs,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LandingPageWebNavbar activeLink={"blog"} />

      <article>
        <div className="blog-fold-1 blog-fold-1--detail">
          <Link href="/blog">
            <a className="blog-details-social-media-block__text blog-go-back">
              <img
                src="./img/desktop/blog-detail/left-arrow.svg"
                alt="left arrow"
              />
              BACK TO BLOGS
            </a>
          </Link>
          <div className="blog-fold-1__colm1">
            <div className="blog-fold-1-tags-block row mx-0 align-items-center">
              {!isEmpty(blogDetail.tag1) && (
                <div className="new-blog-technology-div">
                  <span>{blogDetail.tag1}</span>
                </div>
              )}
              {!isEmpty(blogDetail.tag2) && (
                <div className="new-blog-technology-div">
                  <span>{blogDetail.tag2}</span>
                </div>
              )}
            </div>
            <img
              // src="/img/desktop/blog/blog-fold1-img.png"
              src={blogDetail.featured_image[0].url}
              alt={blogDetail.featured_image[0].alternativeText}
              className="blog-fold-1-img"
            />
            <h2 className="blog-title-1">{blogDetail.title}</h2>
            <p className="blog-desc-text">
              <i>{blogDetail.description}</i>
            </p>
            <BlogMainAuthorBlock
              displayImage={
                !isEmpty(blogDetail.author_image.url) ? true : false
              }
              authorImg={
                !isEmpty(blogDetail.author_image)
                  ? blogDetail.author_image.url
                  : ""
              }
              authorName={blogDetail.author}
              blogUpatedAt={blogDetail.updatedAt}
            />
          </div>
        </div>
        <div className="blog-detail-content-desc">
          <ReactMarkdown source={blogDetail.article_body} escapeHtml={false} />
        </div>
        <BlogDetailsFooterSocialMedia blogSlug={blogDetail.slug} />

        {!isEmpty(recommendedBlogs) || !isEmpty(latestBlog) ? (
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
                {/* {recommendedBlogs.map((data, index) => (
                  <Fragment key={index}>
                    <Link as={`/blog/${data.slug}`} href="/blog/[id]">
                      <a>
                        <h4 className="blog-detail-suggest-blog-row__blogTitle">
                          {data.title}
                        </h4>
                      </a>
                    </Link>
                  </Fragment>
                ))} */}
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
                    ? "text-right blog-detail-suggest-blog-row__colm2"
                    : "text-left blog-detail-suggest-blog-row__colm2 flex-grow-1"
                }
              >
                <h3 className="blog-details-social-media-block__text">
                  latest post
                </h3>
                <Link as={`/blog/${latestBlog.slug}`} href="/blog/[id]">
                  <a>
                    <h4 className="blog-detail-suggest-blog-row__blogTitle">
                      {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
                      {latestBlog.title}
                    </h4>
                  </a>
                </Link>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </article>
      <div className="blog-detail-footer-block">
        <LandingPageFooter />
      </div>
    </>
  );
}

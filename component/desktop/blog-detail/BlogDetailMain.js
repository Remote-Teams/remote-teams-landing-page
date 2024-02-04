import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import LandingPageWebNavbar from "../LandingPageWebNavbar";
import isEmpty from "../../../store/validation/is-empty";
import BlogDetailsFooterSocialMedia from "../../common/BlogDetailsFooterSocialMedia";
import BlogMainAuthorBlock from "../blog/BlogMainAuthorBlock";
import LandingPageFooter from "../LandingPageFooter";

let markDonw = `
# Exploring the Wonders of DynamoDB: A Comprehensive Guide

## Overview

Dive into the world of Amazon DynamoDB, a fully managed NoSQL database service that powers some of the most scalable and performant applications. In this comprehensive guide, we'll explore the key features, use cases, and best practices for leveraging DynamoDB in your projects.

## Key Topics Covered

- **Introduction to DynamoDB:**
  - Understand the fundamentals and architecture of DynamoDB.

- **Scalability and Performance:**
  - Learn how DynamoDB ensures consistent, low-latency performance at any scale.

- **Security Measures:**
  - Explore built-in security features, encryption options, and access control mechanisms.

- **Global Tables:**
  - Discover the power of multi-region replication for enhanced availability.

- **Use Cases:**
  - Explore real-world use cases, including web and mobile applications, gaming, IoT, and more.

- **Advanced Features:**
  - Delve into features like DynamoDB Accelerator (DAX) and DynamoDB Streams.

## Who Should Read?

This guide is perfect for developers, architects, and anyone interested in understanding and maximizing the potential of Amazon DynamoDB. Whether you're new to NoSQL databases or a seasoned pro, there's something here for everyone.

## Why DynamoDB?

Find out why DynamoDB is a popular choice for developers and businesses worldwide. From its serverless options to seamless scalability, DynamoDB offers a robust solution for diverse application needs.

Ready to embark on a journey through the intricacies of DynamoDB? Let's get started!


`;

export default function BlogDetailMain({
  blogDetails,
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
                src="/img/desktop/blog-detail/left-arrow.svg"
                alt="left arrow"
              />
              BACK TO BLOGS
            </a>
          </Link>
          <div className="blog-fold-1__colm1">
            <div className="blog-fold-1-tags-block row mx-0 align-items-center">
              {!isEmpty(blogDetails.tag1) && (
                <div className="new-blog-technology-div">
                  <span>{blogDetails.tag1}</span>
                </div>
              )}
              {!isEmpty(blogDetails.tag2) && (
                <div className="new-blog-technology-div">
                  <span>{blogDetails.tag1}</span>
                </div>
              )}
            </div>
            <img
              // src="/img/desktop/blog/blog-fold1-img.png"
              src={`${blogDetails.imgUrl}`}
              // alt={blogDetail.featured_image[0].alternativeText}
              className="blog-fold-1-img"
            />
            <h2 className="blog-title-1">{blogDetails.title}</h2>
            <p className="blog-desc-text">
              <i>{blogDetails.shortDescription}</i>
            </p>
            <BlogMainAuthorBlock
              displayImage={!isEmpty(blogDetails.authorImg) ? true : false}
              authorImg={
                !isEmpty(blogDetails.authorImg) ? blogDetails.authorImg : ""
              }
              authorName={blogDetails.author}
              blogUpatedAt={blogDetails.datePosted}
            />
          </div>
        </div>
        <div className="blog-detail-content-desc">
          <ReactMarkdown source={blogDetails.description} escapeHtml={false} />
        </div>
        {/* <BlogDetailsFooterSocialMedia blogSlug={blogDetail.slug} /> */}

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
                      YouTube Previews Upcoming Improvements for YouTube Studio
                     
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
      <div className="blog-detail-footer-block">
        <LandingPageFooter />
      </div>
    </>
  );
}

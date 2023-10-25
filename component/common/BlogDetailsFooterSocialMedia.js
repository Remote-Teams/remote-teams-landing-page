import React from "react";

export default function BlogDetailsFooterSocialMedia({ blogSlug }) {
  const handleOnClickCopyUrl = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${blogSlug}`
    );
  };

  return (
    <div className="row mx-0 align-items-center blog-details-social-media-block">
      <p className="blog-details-social-media-block__text">share</p>
      <p className="blog-details-social-media-block__text">-</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://twitter.com/intent/tweet?url=https%3A%2F%2F${process.env.NEXT_PUBLIC_SOCIAL_MEDIA_WEBSITE_LINK_TEXT}%2Fblog%2F${blogSlug}`}
      >
        <div className="blog-details-social-media-block__text">twitter</div>
      </a>
      <p className="blog-details-social-media-block__text">/</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.facebook.com/sharer.php?u=https%3A%2F%2F${process.env.NEXT_PUBLIC_SOCIAL_MEDIA_WEBSITE_LINK_TEXT}%2Fblog%2F${blogSlug}`}
      >
        <div className="blog-details-social-media-block__text">facebook</div>
      </a>
      <p className="blog-details-social-media-block__text">/</p>
      <button
        className="blog-details-social-media-block__copy"
        onClick={handleOnClickCopyUrl}
      >
        <span className="blog-details-social-media-block__text">copy link</span>
      </button>
    </div>
  );
}

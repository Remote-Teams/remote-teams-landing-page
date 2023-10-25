import React from "react";
import format from "date-fns/format";

export default function BlogMainAuthorBlock({
  displayImage,
  authorImg,
  authorName,
  blogUpatedAt,
}) {
  return (
    <div className="row mx-0 flex-nowrap align-items-center">
      {displayImage && (
        <div className="flex-shrink-0 blog-author-img-block">
          <img src={authorImg} alt={`author ${authorName}`} />
        </div>
      )}
      <div className="blog-author-text-content">
        <p className="blog-author-name">
          {!displayImage && "by "}
          <span>{authorName}</span>
        </p>
        {/* <p className="blog-published-text">3 days ago</p> */}
        <p className="blog-published-text">
          - {format(new Date(blogUpatedAt), "MMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
}

BlogMainAuthorBlock.defaultProps = {
  displayImage: false,
  authorImg: "./img/desktop/blog/blog-author-dummy-img.png",
  authorName: "Author Name",
  blogUpatedAt: new Date(),
};

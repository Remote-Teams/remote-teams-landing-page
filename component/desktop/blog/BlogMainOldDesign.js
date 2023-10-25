// import React, { Fragment, useState, useEffect } from "react";
// import Link from "next/link";
// import LandingPageWebNavbar from "../LandingPageWebNavbar";
// import BlogMainAuthorBlock from "./BlogMainAuthorBlock";
// import isEmpty from "../../../store/validation/is-empty";
// import { compareAsc } from "date-fns";

// export default function BlogMainOldDesign({ blogs }) {
//   // const [values, setValues] = useState({
//   //   blogSearch: "",
//   // });

//   // console.log("blogs", blogs);

//   const [searchResult, setSearchResult] = useState(blogs);

//   const cardOneData = searchResult.slice(0, 1)[0];
//   // const blogCardsArrayOne = searchResult.slice(0, 1);
//   // const blogCardsArrayTwo = searchResult.slice(0, 1);
//   const blogCardsArrayOne = searchResult.slice(1, searchResult.length / 2 + 1);
//   const blogCardsArrayTwo = searchResult.slice(
//     searchResult.length / 2 + 1,
//     searchResult.length
//   );

//   // console.log(cardOneData, blogCardsArrayOne, blogCardsArrayTwo);

//   useEffect(() => {
//     if (!isEmpty(blogs)) {
//       let newLatestBlogs = setLatestBlogsFirst(blogs);
//       setSearchResult(newLatestBlogs);
//     }
//   }, [blogs]);

//   /*=======================================
//               handler
//   ======================================*/
//   const setLatestBlogsFirst = (result) => {
//     // descendign order as per updated date
//     let newLatestBlogsArray = result.sort((a, b) =>
//       compareAsc(new Date(b.updatedAt), new Date(a.updatedAt))
//     );

//     return newLatestBlogsArray;
//   };

//   // const handleChange = (e) => {
//   //   setValues({
//   //     ...values,
//   //     [e.target.name]: e.target.value,
//   //   });

//   //   let searchStr = e.target.value.toLowerCase();

//   //   if (!isEmpty(searchStr)) {
//   //     let newLatestBlogs = setLatestBlogsFirst(
//   //       blogs.filter(
//   //         (a) =>
//   //           (!isEmpty(a.article_body) &&
//   //             a.article_body.toLowerCase().match(searchStr)) ||
//   //           (!isEmpty(a.title) && a.title.toLowerCase().match(searchStr)) ||
//   //           (!isEmpty(a.description) &&
//   //             a.description.toLowerCase().match(searchStr))
//   //       )
//   //     );
//   //     setSearchResult(newLatestBlogs);
//   //   } else {
//   //     let newLatestBlogs = setLatestBlogsFirst(blogs);
//   //     setSearchResult(newLatestBlogs);
//   //   }
//   // };

//   // const handleSubmitSearch = (e) => {
//   //   e.preventDefault();
//   //   setValues({
//   //     ...values,
//   //     [e.target.name]: e.target.value,
//   //   });
//   //   console.log(values);
//   // };

//   /*=======================================
//               renderSearchBlock
//   ======================================*/
//   // const renderSearchBlock = () => {
//   //   return (
//   //     <div className="new-blog-main-div">
//   //       <div className="new-blog-newslatter-serach-div">
//   //         <form onSubmit={handleSubmitSearch}>
//   //           <input
//   //             name="blogSearch"
//   //             value={values.blogSearch}
//   //             onChange={handleChange}
//   //             placeholder="Search"
//   //             autoComplete="off"
//   //           />
//   //           <button type="submit" className="new-blog-search-btn">
//   //             <i className="fa fa-search" />
//   //           </button>
//   //         </form>
//   //       </div>
//   //     </div>
//   //   );
//   // };

//   /*============================================
//              renderFoldOneBlog
//   =============================================*/
//   const renderFoldOneBlog = () => {
//     return (
//       !isEmpty(cardOneData) && (
//         <article className="blog-fold-1__colm1 flex-shrink-0">
//           <div className="blog-fold-1-tags-block row mx-0 align-items-center">
//             {!isEmpty(cardOneData.tag1) && (
//               <div className="new-blog-technology-div">
//                 <span>{cardOneData.tag1}</span>
//               </div>
//             )}
//             {!isEmpty(cardOneData.tag2) && (
//               <div className="new-blog-technology-div">
//                 <span>{cardOneData.tag2}</span>
//               </div>
//             )}
//           </div>
//           {/* <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
//           <a> */}
//           <img
//             // src="/img/desktop/blog/blog-fold1-img.png"
//             src={cardOneData.featured_image[0].url}
//             alt={cardOneData.featured_image[0].alternativeText}
//             className="blog-fold-1-img"
//           />
//           {/* </a>
//         </Link> */}
//           <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
//             <a>
//               <h2 className="blog-title-1">
//                 {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
//                 {cardOneData.title}
//               </h2>
//             </a>
//           </Link>
//           <p className="blog-desc-text">
//             <i>
//               {/* Facebook's New 'Smart Crop' Feature for Automated Video Editing */}
//               {cardOneData.description}
//             </i>
//           </p>
//           <BlogMainAuthorBlock
//             displayImage={isEmpty(cardOneData.author_image) ? false : true}
//             authorImg={
//               !isEmpty(cardOneData.author_image)
//                 ? cardOneData.author_image.url
//                 : ""
//             }
//             authorName={cardOneData.author}
//             blogUpatedAt={cardOneData.updatedAt}
//           />
//         </article>
//       )
//     );
//   };

//   /*============================================
//              renderFoldTwoComl1Blogs
//   =============================================*/
//   const renderFoldTwoComl1Blogs = (blogDataFold2, conditionValue) => {
//     return (
//       !isEmpty(blogDataFold2) &&
//       blogDataFold2.map((data, index) => (
//         <article
//           key={`blog-fold-colm-${conditionValue}${index}`}
//           className="blog-fold-2__colm1-blog"
//         >
//           {index % 2 === conditionValue && (
//             <Link as={`/blog/${data.slug}`} href="/blog/[id]">
//               <a>
//                 <div className="blog-fold-2-img-block">
//                   <img
//                     // src="/img/desktop/blog/blog-fold2-img.svg"
//                     src={data.featured_image[0].url}
//                     alt={data.featured_image[0].alternativeText}
//                   />
//                 </div>
//               </a>
//             </Link>
//           )}
//           <div
//             className={
//               index % 2 === conditionValue
//                 ? "blog-fold-2__colm1-blog-content"
//                 : "blog-fold-2__colm1-blog-content blog-fold-2__colm1-blog-content--featuredImgNone"
//             }
//           >
//             <Link as={`/blog/${data.slug}`} href="/blog/[id]">
//               <a>
//                 <h2 className="blog-title-1">
//                   {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
//                   {data.title}
//                 </h2>
//               </a>
//             </Link>
//             <p className="blog-desc-text">
//               <i>
//                 {/* Facebook's New 'Smart Crop' Feature for Automated Video Editing */}
//                 {data.description}
//               </i>
//             </p>
//             <div
//               className={
//                 index % 2 === conditionValue
//                   ? "blog-author-block-mb-no-img"
//                   : "blog-author-block-mb"
//               }
//             >
//               <BlogMainAuthorBlock
//                 displayImage={
//                   index % 2 === conditionValue || isEmpty(data.author_image)
//                     ? false
//                     : true
//                 }
//                 authorImg={
//                   !isEmpty(data.author_image) ? data.author_image.url : ""
//                 }
//                 authorName={data.author}
//                 blogUpatedAt={data.updatedAt}
//               />
//             </div>
//             <div className="blog-fold-1-tags-block row mx-0 align-items-center">
//               {index % 2 === conditionValue ? (
//                 <>
//                   {!isEmpty(data.tag1) && (
//                     <div className="new-blog-technology-div">
//                       <span>{data.tag1}</span>
//                     </div>
//                   )}
//                   {!isEmpty(data.tag2) && (
//                     <div className="new-blog-technology-div">
//                       <span>{data.tag2}</span>
//                     </div>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   {!isEmpty(data.tag1) && (
//                     <div className="new-blog-technology-div">
//                       <span>{data.tag1}</span>
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           </div>
//         </article>
//       ))
//     );
//   };

//   /*============================================
//              return
//   =============================================*/
//   const featuredArticles = !isEmpty(blogs)
//     ? blogs.filter((a) => a.featured === true)
//     : [];

//   return (
//     <>
//       <LandingPageWebNavbar activeLink={"blog"} />
//       {/* {renderSearchBlock()} */}
//       {/* {renderBlockOne()} */}
//       <div className="blog-fold-1 row mx-0 flex-nowrap align-items-start">
//         {isEmpty(blogs) && (
//           <p className="blog-author-name w-100 text-center">No Blogs Found</p>
//         )}

//         {renderFoldOneBlog()}

//         {!isEmpty(featuredArticles) && (
//           <div className="blog-fold-1__colm2">
//             <h2 className="blog-featured-text">featured</h2>
//             {featuredArticles.map((data, index) => (
//               <Fragment key={index}>
//                 <Link as={`/blog/${data.slug}`} href="/blog/[id]">
//                   <a>
//                     <p className="blog-featured-blog-title">
//                       {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
//                       {data.title}
//                     </p>
//                   </a>
//                 </Link>
//               </Fragment>
//             ))}
//             {/* <p className="blog-featured-blog-title">
//               YouTube has shared some insight into
//             </p>
//             <p className="blog-featured-blog-title">
//               Facebook's New 'Smart Crop' Feature for Automated Video Editing
//             </p>
//             <p className="blog-featured-blog-title">
//               The World's Top 50 Social Media Influencers by Number of Followers
//             </p> */}
//           </div>
//         )}
//       </div>
//       <div className="blog-fold-2 row flex-nowrap mx-0 align-items-start justify-content-between">
//         <div className="blog-fold-2__colm1 flex-shrink-0">
//           {renderFoldTwoComl1Blogs(blogCardsArrayOne, 0)}
//         </div>
//         <div className="blog-fold-2__colm2">
//           {renderFoldTwoComl1Blogs(blogCardsArrayTwo, 1)}
//         </div>
//       </div>
//     </>
//   );
// }

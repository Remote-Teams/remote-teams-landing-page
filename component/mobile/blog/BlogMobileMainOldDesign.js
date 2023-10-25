// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import BlogMainAuthorBlock from "../../desktop/blog/BlogMainAuthorBlock";
// import MobileNavbar from "../MobileNavbar";
// import isEmpty from "../../../store/validation/is-empty";
// import { compareAsc } from "date-fns";

// export default function BlogMobileMainOldDesign({ blogs }) {
//   const [searchResult, setSearchResult] = useState(blogs);

//   useEffect(() => {
//     if (!isEmpty(blogs)) {
//       let newLatestBlogs = setLatestBlogsFirst(blogs);
//       setSearchResult(newLatestBlogs);
//     }
//   }, [blogs]);

//   const cardOneData = searchResult.slice(0, 1)[0];
//   // const blogCardsArrayOne = searchResult.slice(0, 1);
//   // const lastCardData = searchResult.slice(0, 1)[0];
//   const blogCardsArrayOne = searchResult.slice(1, searchResult.length - 1);
//   const lastCardData =
//     searchResult.length > 1
//       ? searchResult.slice(searchResult.length - 1, searchResult.length)[0]
//       : [];

//   // console.log(cardOneData, blogCardsArrayOne, lastCardData);

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

//   /*============================================
//              renderCardOne
//   =============================================*/
//   const renderCardOne = () => {
//     return (
//       !isEmpty(cardOneData) && (
//         <article className="blog-fold-2__colm1-blog">
//           <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
//             <a>
//               <div className="blog-fold-2-img-block">
//                 <img
//                   // src="/img/desktop/blog/blog-fold2-img.svg"
//                   src={cardOneData.featured_image[0].url}
//                   alt={cardOneData.featured_image[0].alternativeText}
//                 />
//               </div>
//             </a>
//           </Link>
//           <div className={"blog-fold-2__colm1-blog-content"}>
//             <Link as={`/blog/${cardOneData.slug}`} href="/blog/[id]">
//               <a>
//                 <h2 className="blog-title-1">
//                   {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
//                   {cardOneData.title}
//                 </h2>
//               </a>
//             </Link>
//             <p className="blog-desc-text blog-desc-text--fold1">
//               <i>
//                 {/* Facebook's New 'Smart Crop' Feature for Automated Video Editing */}
//                 {cardOneData.description}
//               </i>
//             </p>
//             <div className="blog-author-block-mb-no-img blog-author-block--fold1">
//               <BlogMainAuthorBlock
//                 displayImage={isEmpty(cardOneData.author_image) ? false : true}
//                 authorImg={
//                   !isEmpty(cardOneData.author_image)
//                     ? cardOneData.author_image.url
//                     : ""
//                 }
//                 authorName={cardOneData.author}
//                 blogUpatedAt={cardOneData.updatedAt}
//               />
//             </div>
//             <div className="blog-fold-1-tags-block row mx-0 align-items-center">
//               {!isEmpty(cardOneData.tag1) && (
//                 <div className="new-blog-technology-div">
//                   <span>{cardOneData.tag1}</span>
//                 </div>
//               )}
//               {!isEmpty(cardOneData.tag2) && (
//                 <div className="new-blog-technology-div">
//                   <span>{cardOneData.tag2}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </article>
//       )
//     );
//   };

//   /*============================================
//              renderFoldTwo
//   =============================================*/
//   const renderFoldTwo = () => {
//     return (
//       !isEmpty(blogCardsArrayOne) &&
//       blogCardsArrayOne.map((data, index) => (
//         <article key={index} className="blog-fold-2__colm1-blog">
//           <div
//             className={
//               "blog-fold-2__colm1-blog-content blog-fold-2__colm1-blog-content--featuredImgNone"
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
//             <div className={"blog-author-block-mb-no-img"}>
//               <BlogMainAuthorBlock
//                 displayImage={isEmpty(data.author_image) ? false : true}
//                 authorImg={
//                   !isEmpty(data.author_image) ? data.author_image.url : ""
//                 }
//                 authorName={data.author}
//                 blogUpatedAt={data.updatedAt}
//               />
//             </div>
//             <div className="blog-fold-1-tags-block row mx-0 align-items-center">
//               {!isEmpty(data.tag1) && (
//                 <div className="new-blog-technology-div">
//                   <span>{data.tag1}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </article>
//       ))
//     );
//   };

//   /*============================================
//              renderLastFold
//   =============================================*/
//   const renderLastFold = () => {
//     return (
//       !isEmpty(lastCardData) && (
//         <article className="blog-fold-2__colm1-blog blog-fold-2__colm1-blog--fold3">
//           <Link as={`/blog/${lastCardData.slug}`} href="/blog/[id]">
//             <a>
//               <div className="blog-fold-2-img-block">
//                 <img
//                   // src="/img/desktop/blog/blog-fold2-img.svg"
//                   src={lastCardData.featured_image[0].url}
//                   alt={lastCardData.featured_image[0].alternativeText}
//                 />
//               </div>
//             </a>
//           </Link>
//           <div className={"blog-fold-2__colm1-blog-content"}>
//             <Link as={`/blog/${lastCardData.slug}`} href="/blog/[id]">
//               <a>
//                 <h2 className="blog-title-1 blog-title-1--fold3">
//                   {/* YouTube Previews Upcoming Improvements for YouTube Studio */}
//                   {lastCardData.title}
//                 </h2>
//               </a>
//             </Link>
//             <div className={"blog-author-block-mb-no-img"}>
//               <BlogMainAuthorBlock
//                 displayImage={isEmpty(lastCardData.author_image) ? false : true}
//                 authorImg={
//                   !isEmpty(lastCardData.author_image)
//                     ? lastCardData.author_image.url
//                     : ""
//                 }
//                 authorName={lastCardData.author}
//                 blogUpatedAt={lastCardData.updatedAt}
//               />
//             </div>
//             <div className="blog-fold-1-tags-block row mx-0 align-items-center">
//               {!isEmpty(lastCardData.tag1) && (
//                 <div className="new-blog-technology-div">
//                   <span>{lastCardData.tag1}</span>
//                 </div>
//               )}
//               {!isEmpty(lastCardData.tag2) && (
//                 <div className="new-blog-technology-div">
//                   <span>{lastCardData.tag2}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </article>
//       )
//     );
//   };

//   /*============================================
//              return
//   =============================================*/
//   return (
//     <>
//       <MobileNavbar />
//       <div className="mobile-blog-main-content">
//         {isEmpty(blogs) && (
//           <p className="blog-author-name w-100 text-center">No Blogs Found</p>
//         )}
//         {renderCardOne()}
//         {renderFoldTwo()}
//         {renderLastFold()}
//       </div>
//     </>
//   );
// }

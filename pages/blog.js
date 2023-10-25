import React from "react";

function Blog() {
  return <div>Cooming Soon</div>;
}

export default Blog;

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import Pagination from "rc-pagination";
// import "rc-pagination/assets/index.css";
// // import { Fragment } from "react";
// // import Link from "next/link";

// // import { fetchAPI } from "./api/blogs";

// import BlogMain from "../component/desktop/blog/BlogMain";
// import BlogMobileMain from "../component/mobile/blog/BlogMobileMain";
// import HeadTag from "../component/common/HeadTag";
// import MobileFooter from "../component/mobile/MobileFooter";
// import isEmpty from "../store/validation/is-empty";

// const totalRecordsInOnePage = 10;

// export default function blogs({ articles, count }) {
//   const router = useRouter();
//   const [currentPagination, setCurrentPagination] = useState(1);

//   const totalRecords = count;

//   useEffect(() => {
//     if (router.query.page) {
//       setCurrentPagination(parseInt(router.query.page));
//     } else {
//       setCurrentPagination(1);
//     }
//   }, [articles]);

//   /*=================================================================================
//         renderPagination
//   =================================================================================*/
//   const onChangePaginationModule = (page) => {
//     // setCurrentPagination(page);
//     const path = router.pathname;
//     const query = router.query;
//     query.page = page;
//     router.push({
//       pathname: path,
//       query: query,
//     });
//   };

//   const renderPagination = () => {
//     return (
//       <div className="custom-pagination">
//         <Pagination
//           onChange={onChangePaginationModule}
//           current={currentPagination}
//           defaultPageSize={totalRecordsInOnePage}
//           total={totalRecords}
//           showTitle={false}
//         />
//       </div>
//     );
//   };

//   /*=================================================================================
//         main
//   =================================================================================*/
//   return (
//     <>
//       {/* {console.log(featuredArticles)} */}
//       {/* {console.log("articles", articles)} */}
//       {/* <div className="d-none d-md-block">
//         {articles.map((article, i) => {
//           return (
//             <Fragment key={`article-${article.id}`}>
//               <Link as={`/blog/${article.slug}`} href="/blog/[id]">
//                 <a>
//                   <p>{article.title}</p>
//                 </a>
//               </Link>
//             </Fragment>
//           );
//         })}
//       </div> */}
//       <HeadTag
//         pageTitle="Blogs And Knowledge - Remote Teams"
//         canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog`}
//         ogType="blog"
//       />
//       {/* {console.log(articles)} */}
//       {!isEmpty(articles) && (
//         <>
//           <div className="d-none d-md-block blog-bg">
//             <BlogMain blogs={articles} />
//             {renderPagination()}
//           </div>
//           <div className="d-block d-md-none blog-bg">
//             <BlogMobileMain blogs={articles} />
//             {renderPagination()}
//             <MobileFooter />
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// /*===============================================
//     client side rendering
// ================================================*/

// // export async function getStaticProps() {
// //   // Run API calls in parallel
// //   const [articles] = await Promise.all([fetchAPI("/remblogs")]);

// //   return {
// //     props: { articles }, // will be passed to the page component as props
// //     revalidate: 1,
// //   };
// // }

// /*===============================================
//     server side rendering
// ================================================*/

// export async function getServerSideProps({ query }) {
//   let current = query.page || 1;
//   const start = current === 1 ? 0 : (current - 1) * totalRecordsInOnePage;

//   // const [articles] = await Promise.all([
//   //   fetchAPI(`/remblogs?_limit=${totalRecordsInOnePage}&_start=${start}`),
//   // ]);

//   // const count = await Promise.all([fetchAPI(`/remblogs/count`)]);

//   const articles = await fetch(
//     `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/remblogs?_limit=${totalRecordsInOnePage}&_start=${start}`
//   );
//   const articlesData = await articles.json();

//   const count = await fetch(
//     `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/remblogs/count`
//   );
//   const countData = await count.json();

//   return {
//     props: { articles: articlesData, count: countData }, // will be passed to the page component as props
//   };
// }

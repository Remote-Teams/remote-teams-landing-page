import BlogDetailMain from "../../component/desktop/blog-detail/BlogDetailMain";
import BlogDetailMobileMain from "../../component/mobile/blog-detail/BlogDetailMobileMain";
// import { fetchAPI } from "../api/blogs";
import HeadTag from "../../component/common/HeadTag";
import isEmpty from "../../store/validation/is-empty";
import { compareAsc } from "date-fns";
// import { dummyBlogObj } from "./dummyBlogObj";

const Article = ({ article, allArticles }) => {
  // remove current article from list
  const articlesFilteredCurrent = !isEmpty(allArticles)
    ? allArticles.filter((a) => a.title !== article.title)
    : [];

  // sort articles as latest first
  const latestArticles = !isEmpty(articlesFilteredCurrent)
    ? articlesFilteredCurrent.sort((a, b) =>
        compareAsc(new Date(b.updatedAt), new Date(a.updatedAt))
      )
    : [];

  const latestArticleFirst = !isEmpty(latestArticles) ? latestArticles[0] : [];

  // remove latest article from articlesFilteredCurrent list
  const recommendedArticlesFilteredLatest =
    !isEmpty(articlesFilteredCurrent) && !isEmpty(latestArticleFirst)
      ? articlesFilteredCurrent.filter(
          (a) => a.title !== latestArticleFirst.title
        )
      : [];

  // recommended articles
  const recommendedArticles = !isEmpty(recommendedArticlesFilteredLatest)
    ? recommendedArticlesFilteredLatest.filter((a) => a.recommended === true)
    : [];

  return (
    <>
      {/* {console.log("article:", article)} */}
      {/* <h1>{article.title}</h1> */}

      {!isEmpty(article) && (
        <HeadTag
          pageTitle="Blogs And Knowledge - Remote Teams"
          pageDescription={article.description}
          canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/${article.slug}`}
          ogType="blog"
          ogTitle={article.title}
          ogDesription={article.description}
        />
      )}

      <div className="d-none d-md-block blog-bg">
        <BlogDetailMain
          blogDetail={article}
          latestBlog={latestArticleFirst}
          recommendedBlogs={recommendedArticles}
        />
      </div>
      <div className="d-block d-md-none blog-bg">
        <BlogDetailMobileMain
          blogDetail={article}
          latestBlog={latestArticleFirst}
          recommendedBlogs={recommendedArticles}
        />
      </div>
    </>
  );
};

/*===============================================
    client side rendering
================================================*/

// export async function getStaticPaths() {
//   const articles = await fetchAPI("/remblogs");

//   return {
//     paths: articles.map((article) => ({
//       params: {
//         slug: article.slug,
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const articles = await fetchAPI(`/remblogs?slug=${params.slug}`);

//   return {
//     props: {
//       article: articles[0],
//     },
//     revalidate: 1,
//   };
// }

/*===============================================
    server side rendering
================================================*/

export async function getServerSideProps(context) {
  // Run API calls in parallel
  // const articles = await fetchAPI(`/remblogs?slug=${context.params.slug}`);

  // all articles
  // const [allArticles] = await Promise.all([fetchAPI("/remblogs")]);

  const singleBlog = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/remblogs?slug=${context.params.slug}`
  );
  const singleBlogData = await singleBlog.json();

  const allBlogs = await fetch(
    `${process.env.NEXT_PUBLIC_BLOG_SERVER_URL}/remblogs`
  );
  const allBlogsData = await allBlogs.json();

  // const allBlogsData = [dummyBlogObj];

  if (isEmpty(allBlogsData)) {
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  } else {
    return {
      props: { article: singleBlogData[0], allArticles: allBlogsData }, // will be passed to the page component as props
    };
  }
}

export default Article;

import FirstArticle from "./BlogArticles/FiirstArticle";
import SecondArticle from "./BlogArticles/SecondArticle";
const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className="lg:justify-between lg:items-center lg:flex lg:flex-col justify-center ">
      <div className="xl:px-64 px-4 py-4 xl:py-10">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div>
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  );
};
export default BlogArticles;

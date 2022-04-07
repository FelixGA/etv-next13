import FirstArticle from "./FiirstArticle";
import SecondArticle from "./SecondArticle";
const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className="lg:justify-between lg:items-center lg:flex lg:flex-col justify-center ">
      <div className="xl:px-64 px-8 xs:px-18 pt-8 xl:py-10">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div className="xl:px-32 my-8 xl:my-10">
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  );
};
export default BlogArticles;

import FirstArticle from "./FiirstArticle";
import SecondArticle from "./SecondArticle";
const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className="  lg:flex lg:flex-col h-fit">
      <div className="">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div className="2xl:px-56 mt-8 xl:mt-10">
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  );
};
export default BlogArticles;

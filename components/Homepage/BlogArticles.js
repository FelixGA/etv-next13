import FirstArticle from "./FiirstArticle";
import SecondArticle from "./SecondArticle";
const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className="lg:justify-between lg:items-center lg:flex lg:flex-col justify-center ">
      <div className="">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div className="2xl:px-56 my-8 xl:my-10">
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  );
};
export default BlogArticles;

import FirstArticle from "./FiirstArticle";
import SecondArticle from "./SecondArticle";

const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className=" lg:flex lg:flex-col h-fit">
      <div className="">
        <FirstArticle getMarkdownContext={getMarkdownContext} />
      </div>
      <div className="mt-8 2xl:px-56">
        <SecondArticle getMarkdownContext={getMarkdownContext} />
      </div>
    </div>
  );
};
export default BlogArticles;

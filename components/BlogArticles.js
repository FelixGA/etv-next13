import Image from "next/image";
const BlogArticles = (props) => {
  return (
    <div className="lg:justify-between lg:items-center lg:flex lg:flex-col">
      <div className="blog-article-one p-10 lg:py-28 flex lg:flex-row justify-center w-3/4 items-center">
        <div>
          <span>
            <div className="h-8 w-24 flex items-center flex-wrap justify-center bg-orange-light text-white font-bold rounded">
              {props.getContent.content[2].details}
            </div>
            <h2 className="text-grey-darkest text-2xl font-bold py-5">
              {props.getContent.content[2].name}
            </h2>
          </span>
          <p className="tracking-wide font-bold text-grey-dark pb-6 pr-3">
            {props.getContent.content[2].markdown}
          </p>
          <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-3 text-sm rounded-lg">
            Zum Kaufberater
          </button>{" "}
        </div>
        <div className="hidden xl:flex xl:w-full xl:scale-125 ">
          <Image
            src="/images/berater.png"
            width={400}
            height={300}
            className="blog-article-two-image"
          />
        </div>
      </div>

      <div className="blog-article-two p-10 xl:py-28 xl:flex xl:flex-row xl:justify-center xl:w-3/4  bg-grey-lightest xl:items-center">
        <div className=" xl:w-full xl:scale-125 xl:mx-16">
          <Image
            src="/images/schweinFull.jpeg"
            width={300}
            height={300}
            className="blog-article-two-image"
          />
        </div>
        <span>
          <h2 className="text-grey-darkest text-2xl font-bold py-5">
            {props.getContent.content[3].name}
          </h2>
          <p className="tracking-wide font-bold text-grey-dark pb-6">
            {props.getContent.content[3].markdown}
          </p>
          <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-6 text-sm rounded-lg">
            Mehr erfahren
          </button>
        </span>
      </div>
    </div>
  );
};
export default BlogArticles;

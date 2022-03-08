import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className="lg:justify-between lg:items-center lg:flex lg:flex-col">
      <div className="blog-article-one p-10 lg:py-28 flex lg:flex-row justify-center w-3/4 items-center">
        <div>
          <span>
            <div className="h-8 w-24 flex items-center flex-wrap justify-center bg-orange-light text-white font-bold rounded">
              Jetzt neue
            </div>
            {/* <h2 className="text-grey-darkest text-2xl font-bold">
              {getContent.content[2].name}
            </h2>*/}

            <div className="tracking-wide  py-5 font-bold text-grey-darkest pb-6 pr-3">
              <MDXRemote {...getMarkdownContext.eAutoAdvisor} />
            </div>
          </span>
          <Link href="/caradvisor">
            <a>
              <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-3 text-sm rounded-lg">
                Zum Kaufberater
              </button>
            </a>
          </Link>
        </div>
        <div className="hidden xl:flex xl:w-full xl:scale-125 ">
          <Image
            src="/images/etvberaterwithcar.png"
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
          {/* <h2 className="text-grey-darkest text-2xl font-bold ">
           dfg
          </h2> */}
          <div className="tracking-wide font-bold text-grey-darkest pb-6 py-5">
            <MDXRemote {...getMarkdownContext.substities} />
          </div>
          <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-6 text-sm rounded-lg">
            Mehr erfahren
          </button>
        </span>
      </div>
    </div>
  );
};
export default BlogArticles;

import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
const BlogArticles = ({ getMarkdownContext, getContent }) => {
  return (
    <div className="lg:justify-between lg:items-center lg:flex lg:flex-col justify-center ">
      <div className="blog-article-one flex xl:px-72 pt-20 pb-10">
        <div className=" flex flex-col justify-evenly">
          <div className="mt-4">
            <div className="h-8 w-24 flex items-center flex-wrap justify-center bg-orange-light text-white font-bold rounded">
              Jetzt neue
            </div>
            {/* <h2 className="text-grey-darkest text-2xl font-bold">
              {getContent.content[2].name}
            </h2>*/}

            <div className="tracking-wide font-bold text-grey-darkest pt-4">
              <MDXRemote {...getMarkdownContext.eAutoAdvisor} />
            </div>
          </div>
          <Link href="/caradvisor">
            <a>
              <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-3 text-sm rounded-lg">
                Zum Kaufberater
              </button>
            </a>
          </Link>
        </div>
        <div className="hidden xl:block w-[1000px] relative">
          <Image
            src="/images/berater.png"
            width={600}
            height={450}
            className="blog-article-two-image"
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>

      <div className="blog-article-two bg-grey-lightest flex">
        <div className="xl:w-full relative bg-red-500">
          <Image
            src="/images/schweinFull.jpeg"
            width={300}
            height={300}
            className="blog-article-two-image"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <spdivan>
          {/* <h2 className="text-grey-darkest text-2xl font-bold ">
           dfg
          </h2> */}
          <div className="tracking-wide font-bold text-grey-darkest pb-6 py-5">
            <MDXRemote {...getMarkdownContext.substities} />
          </div>
          <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-6 text-sm rounded-lg">
            Mehr erfahren
          </button>
        </spdivan>
      </div>
    </div>
  );
};
export default BlogArticles;

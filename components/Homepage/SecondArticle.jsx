import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";

export default function SecondArticle({ getMarkdownContext, getContent }) {
  return (
    <div className="blog-article-two bg-grey-lightest flex px-8 pb-8 flex-col md:flex-row">
      <div className="w-4/5 mx-auto md:w-full relative xl:pl-10 md:pb-10 xl:mt-10 ">
        <Image
          src="/images/schweinFull.jpeg"
          width={300}
          height={300}
          className="blog-article-two-image"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="md:pt-10 2xl:pt-48 xl:px-12 xl:pl-20">
        {/* <h2 className="text-grey-darkest text-2xl font-bold ">
           dfg
          </h2> */}
        <div className="tracking-wide font-bold text-blue-lighter px-10 pb-6 py-5 xl:pr-36">
          {<MDXRemote {...getMarkdownContext.substities} />}
        </div>
        <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-8 mb-5 my-6 text-sm rounded-lg mx-10">
          Mehr erfahren
        </button>
      </div>
    </div>
  );
}

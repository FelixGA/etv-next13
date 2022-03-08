import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";

export default function SecondArticle({ getMarkdownContext, getContent }) {
  return (
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
      <div>
        {/* <h2 className="text-grey-darkest text-2xl font-bold ">
           dfg
          </h2> */}
        <div className="tracking-wide font-bold text-grey-darkest pb-6 py-5">
          <MDXRemote {...getMarkdownContext.substities} />
        </div>
        <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 my-6 text-sm rounded-lg">
          Mehr erfahren
        </button>
      </div>
    </div>
  );
}

import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";

export default function SecondArticle({ getMarkdownContext, getContent }) {
  return (
    <div className="blog-article-two bg-grey-lightest flex px-8 pb-8 pt-4 flex-col md:flex-row">
      <div className="w-full sm:w-[76%] mx-auto md:w-full relative xl:pl-10 sm:pt-10 lg:pt-2 md:pb-10 lg:pb-4 xl:mt-10 ">
        <Image
          src="/images/shweinFull.png"
          width={300}
          height={300}
          className="blog-article-two-image"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className="md:pt-10 2xl:pt-48 xl:px-12 xl:pl-20 sm:pl-4">
        {/* <h2 className="text-grey-darkest text-2xl font-bold ">
           dfg
          </h2> */}
        <div className="tracking-wide font-bold text-blue-lighter px-1 xs:px-2 pb-6 xl:pr-36">
          {<MDXRemote {...getMarkdownContext.substities} />}
        </div>

        <Link href="/magazin/foerderungen">
          <a className="bg-yellow-500 ">
            <button className="bg-blue-dark no-select hover:bg-blue-light text-white font-bold py-4 px-6  mb-5 lg:mt-20 text-sm rounded-md ">
              Mehr erfahren
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

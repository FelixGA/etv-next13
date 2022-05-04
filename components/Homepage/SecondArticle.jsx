import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";

export default function SecondArticle({ getMarkdownContext, getContent }) {
  return (
    <div className="flex flex-col px-8 pt-10 pb-8 blog-article-two bg-grey-lightest md:flex-row">
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
        {/* <h2 className="text-2xl font-bold text-grey-darkest ">
           dfg
          </h2> */}
        <div className="px-1 pb-6 font-bold tracking-wide text-blue-lighter xs:px-2 xl:pr-36">
          {<MDXRemote {...getMarkdownContext.substities} />}
        </div>

        <Link href="/magazin/foerderungen">
          <a className="">
            <button className="px-6 py-4 mb-5 ml-1 text-sm font-bold text-white transition rounded-md bg-blue-dark no-select hover:bg-blue-light lg:mt-6 ">
              Mehr erfahren
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

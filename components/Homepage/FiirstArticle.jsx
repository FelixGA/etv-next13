import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
export default function FirstArticle({ getMarkdownContext, getContent }) {
  // (<MDXRemote {...getMarkdownContext.eAutoAdvisor} />);
  return (
    <div className="flex px-8 xl:px-16 2xl:pl-72 2xl:pr-52">
      <div className="flex flex-col flex-1 pt-4 xl:flex-1">
        <div className="pt-4 xl:pt-24">
          <div className="flex items-center justify-center w-24 h-10 font-bold text-white rounded no-select bg-orange-light">
            Jetzt neu
          </div>
          {/* <h2 className="text-2xl font-bold text-grey-darkest">
              {getContent.content[2].name}
            </h2>*/}

          <div className="pt-4 font-bold tracking-wide no-select text-blue-lighter">
            <MDXRemote {...getMarkdownContext.eAutoAdvisor} />
          </div>
        </div>
        <Link href="/caradvisor">
          <a>
            <button className="px-6 py-4 mt-8 text-sm font-bold text-white transition rounded-md bg-blue-dark no-select hover:bg-blue-light xl:mt-10">
              Zum Kaufberater
            </button>
          </a>
        </Link>
      </div>
      <div className="hidden no-select xl:flex">
        <Image
          src="/images/kaufberaterCar.png"
          width={800}
          height={650}
          className="blog-article-two-image"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

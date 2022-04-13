import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
export default function FirstArticle({ getMarkdownContext, getContent }) {
  // (<MDXRemote {...getMarkdownContext.eAutoAdvisor} />);
  return (
    <div className="flex px-8 xl:px-16 2xl:px-96">
      <div className=" flex flex-col flex-1 xl:flex-1 pt-4">
        <div className="pt-4 xl:pt-24">
          <div className="no-select bg-orange-light text-white font-bold rounded w-24 flex justify-center items-center h-10">
            Jetzt neue
          </div>
          {/* <h2 className="text-grey-darkest text-2xl font-bold">
              {getContent.content[2].name}
            </h2>*/}

          <div className="no-select tracking-wide font-bold text-blue-lighter pt-4">
            <MDXRemote {...getMarkdownContext.eAutoAdvisor} />
          </div>
        </div>
        <Link href="/caradvisor">
          <a>
            <button className="bg-blue-dark no-select hover:bg-blue-light text-white font-bold py-4 px-6 mt-8 xl:mt-24 text-sm rounded-md">
              Zum Kaufberater
            </button>
          </a>
        </Link>
      </div>
      <div className="no-select hidden xl:flex">
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

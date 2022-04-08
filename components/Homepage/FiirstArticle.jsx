import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
export default function FirstArticle({ getMarkdownContext, getContent }) {
  // (<MDXRemote {...getMarkdownContext.eAutoAdvisor} />);
  return (
    <div className="blog-article-one flex">
      <div className=" flex flex-col justify-evenly flex-1">
        <div className="mt-4 xl:w-96">
          <div className="no-select h-8 w-24 flex items-center flex-wrap justify-center bg-orange-light text-white font-bold rounded">
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
            <button className="bg-blue-dark no-select  hover:bg-blue-light text-white font-bold py-4 px-6 mb-5 mt-6 text-sm rounded-md">
              Zum Kaufberater
            </button>
          </a>
        </Link>
      </div>
      <div className="no-select hidden xl:flex ml-10 mt-20 scale-125 mx-4">
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

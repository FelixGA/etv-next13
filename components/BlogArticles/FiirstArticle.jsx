import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
export default function FirstArticle({ getMarkdownContext, getContent }) {
  return (
    <div className="blog-article-one flex">
      <div className=" flex flex-col justify-evenly flex-1">
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
      <div className="hidden xl:block w-3/5  pl-4">
        <Image
          src="/images/berater.png"
          width={600}
          height={450}
          className="blog-article-two-image"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

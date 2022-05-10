import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import styles from "../Homepage/secondArticle.module.css";

export default function SecondArticle({ getMarkdownContext, getContent }) {
  return (
    <div className="flex flex-col px-8 blog-article-two bg-grey-lightest md:flex-row lg:h-fit ">
      <div className="relative w-full pt-4 md:pt-0 lg:w-1/2">
        <Image
          src="/images/whatsapp-image-2022-04-27-at-22.26.12.jpeg"
          width={400}
          height={300}
          className="blog-article-two-image"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div className=" xl:px-12 xl:pl-20 sm:pl-4">
        {/* <h2 className="text-2xl font-bold text-grey-darkest ">
           dfg
          </h2> */}
        <div
          className={`${styles.secondArticle} "px-1 pl-4 font-bold tracking-wide text-blue-lighter xs:px-2 xl:pr-36"`}
        >
          {<MDXRemote {...getMarkdownContext.substities} />}
        </div>

        <Link href="/magazin/subsidies">
          <a className="">
            <button className="px-6 py-4 mt-6 mb-8 text-sm font-bold text-white transition rounded-md bg-blue-dark no-select hover:bg-blue-light ">
              Mehr erfahren
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

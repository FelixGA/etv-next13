import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import styles from "../Homepage/secondArticle.module.css";

export default function SecondArticle({ getMarkdownContext, getContent }) {
  return (
    <div className="flex flex-col px-6 bg-grey-lightest sm:flex-row ">
      <div className="relative block xs:min-w-[300px] my-auto">
        <Image
          src="/images/whatsapp-image-2022-04-27-at-22.26.12.jpeg"
          width={350}
          height={280}
          alt="blog-article-two-image"
          objectFit="contain"
        />
      </div>
      <div className="">
        <div
          className={`${styles.secondArticle} " font-bold tracking-wide text-blue-lighter pl-4"`}
        >
          {<MDXRemote {...getMarkdownContext.substities} />}
        </div>

        <Link href="/magazin/subsidies">
          <a className="sm:pl-6 ">
            <button
              className={`${styles.secondArticle} " mt-8 mb-8 px-6 py-4 text-sm font-bold text-white transition rounded-md bg-blue-dark no-select hover:bg-blue-light "`}
            >
              Mehr erfahren
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

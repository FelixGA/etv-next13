import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import Image from "next/image";
import styles from "../Homepage/firstArticle.module.css";
export default function FirstArticle({ getMarkdownContext, getContent }) {
  // (<MDXRemote {...getMarkdownContext.eAutoAdvisor} />);

  return (
    <div className="flex px-4 py-2 2xl:px-60">
      <div className="flex flex-col">
        <div className="">
          <div className="flex items-center justify-center w-24 h-10 font-bold text-white rounded no-select bg-orange-light">
            Jetzt neu
          </div>

          <div
            className={`${styles.article} " font-bold tracking-wide no-select text-blue-lighter"`}
          >
            <MDXRemote {...getMarkdownContext.eAutoAdvisor} />
          </div>
        </div>
        <Link href="/caradvisor">
          <a className="relative">
            <button className="relative px-6 py-4 text-sm font-bold text-white transition rounded-md top-6 bg-blue-dark no-select hover:bg-blue-light ">
              Zum Kaufberater
            </button>
          </a>
        </Link>
      </div>
      <div className="hidden w-fit no-select xl:block">
        <Image
          src="/images/kaufberaterCar.png"
          width={600}
          height={450}
          alt="blog-article-two-image"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

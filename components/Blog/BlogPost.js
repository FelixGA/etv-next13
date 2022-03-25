import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./BlogPost.module.css";
import { MDXRemote } from "next-mdx-remote";
export default function BlogPost({ getBlogContext }) {
  const [content, setContent] = useState();
  useEffect(() => {
    let differentContent = [
      getBlogContext.contentHeading,
      getBlogContext.contentText,
      getBlogContext.contentText2,
      getBlogContext.contentText3,
      getBlogContext.contentText4,
      getBlogContext.contentText5,
      getBlogContext.contentText6,
    ];
    setContent(differentContent);
  }, [getBlogContext]);
  return (
    <div className="flex flex-1 flex-col p-4 lg:p-8">
      {getBlogContext?.category !== "referenzen" ? (
        <div>
          <h2 className="m-auto py-8 text-blue-dark font-bold text-4xl bg-red-500 ">
            {getBlogContext?.title}
          </h2>
          <div className={styles.markdown}>
            <MDXRemote {...getBlogContext.source} />
          </div>
          <div className="w-full m-auto md:w-1/2 lg:px-12">
            {getBlogContext?.src && (
              <Image
                src={getBlogContext?.src}
                alt={getBlogContext?.title}
                width={195}
                height={140}
                layout="responsive"
                objectFit="cover"
                className="rounded-lg"
              />
            )}
          </div>
        </div>
      ) : (
        <h2 className="flex flex-col m-auto pb-4 pt-2 text-blue-dark font-bold text-3xl xl:text-4xl">
          Testbericht von {getBlogContext?.title}
          <Link href={`/transporter/${getBlogContext?.slug}`}>
            <span className="py-2 text-blue-dark font-bold text-sm text-left cursor-pointer">
              Auto Details anzeigen ▼
            </span>
          </Link>
        </h2>
      )}{" "}
      {getBlogContext?.category == "referenzen"
        ? content?.map((article, index) => (
            <div
              key={index}
              className={
                index % 2 !== 0
                  ? "flex flex-col lg:flex-row lg:my-4 items-start justify-center lg:pt-12"
                  : "flex flex-col lg:flex-row-reverse lg:my-4 items-start justify-center"
              }
            >
              <div className="w-full md:w-1/2 lg:px-12 ">
                {article?.image && (
                  <Image
                    src={article?.image}
                    alt={getBlogContext?.title}
                    width={195}
                    height={140}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-lg float-right"
                  />
                )}
              </div>
              {article?.title && (
                <div className=" w-full lg:w-1/2 flex flex-col">
                  <h3 className="font-bold text-2xl text-grey-darker text-left py-4">
                    {article.title}:
                  </h3>
                  <p className="leading-7">{article.content}</p>
                </div>
              )}
            </div>
          ))
        : null}
      {getBlogContext?.category == "referenzen" ? (
        <>
          {getBlogContext.contentText7?.title && (
            <div className=" lg:my-4 ">
              <h3 className="font-bold text-xl text-grey-darker text-center py-4">
                {getBlogContext.contentText7?.title}
              </h3>
              <p>{getBlogContext.contentText7?.content}</p>
              <p className="font-bold text-xl text-grey-darker text-center flex flex-col  lg:my-4 ">
                {getBlogContext.contentText7?.totalscore}
              </p>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}

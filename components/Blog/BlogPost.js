import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function BlogPost({ getBlogContext }) {
  const [content, setContent] = useState();
  useEffect(() => {
    let differentContent = [
      getBlogContext.contentText,
      getBlogContext.contentText2,
      getBlogContext.contentText3,
      getBlogContext.contentText4,
      getBlogContext.contentText5,
      getBlogContext.contentText6,
    ];
    setContent(differentContent);
  }, [getBlogContext]);
  console.log(content);
  return (
    <div className="flex flex-1 flex-col p-4 lg:p-8">
      <h2 className="m-auto py-8 text-blue-dark font-bold text-4xl text-center">
        Testbericht von {getBlogContext?.title}
      </h2>
      {content?.map((article, index) => (
        <div
          key={index}
          className={
            index % 2 !== 0
              ? "flex flex-col lg:flex-row lg:my-4 items-center justify-center"
              : "flex flex-col lg:flex-row-reverse lg:my-4 items-center justify-center"
          }
        >
          <div className="w-full md:w-1/2 lg:px-12">
            {article?.image && (
              <Image
                src={article?.image}
                alt={getBlogContext?.title}
                width={195}
                height={140}
                layout="responsive"
                objectFit="cover"
                className="rounded-l-lg"
              />
            )}
          </div>
          <div className=" w-full lg:w-1/2 flex flex-col  ">
            <h3 className="font-bold text-xl text-grey-darker text-center py-4">
              {article.title}:
            </h3>
            <p>{article.content}</p>
          </div>
        </div>
      ))}
      <div className=" lg:my-4 ">
        <h3 className="font-bold text-xl text-grey-darker text-center py-4">
          {getBlogContext.contentText7?.title}:
        </h3>
        <p>{getBlogContext.contentText7?.content}</p>
        <p className="font-bold text-xl text-grey-darker text-center flex flex-col  lg:my-4 ">
          {getBlogContext.contentText7?.totalscore}
        </p>
      </div>
    </div>
  );
}

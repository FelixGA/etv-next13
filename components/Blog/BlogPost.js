import Image from "next/image";
import styles from "./BlogPost.module.css";
import { MDXRemote } from "next-mdx-remote";
import SideBar from "../Blog/SideBar";
export default function BlogPost({ getBlogContext }) {
  console.log(getBlogContext);
  return (
    <div className="flex flex-col flex-1 pb-4 lg:pb-8 lg:px-48">
      <div>
        <div className="relative w-full">
          {getBlogContext?.src && (
            <Image
              src={getBlogContext?.src}
              alt={getBlogContext?.title}
              width={195}
              height={50}
              layout="responsive"
              objectFit="cover"
              className="rounded-b-sm "
            />
          )}
        </div>
        <p className="text-blue-dark">{getBlogContext.publishedAt}</p>
        <h2 className="w-1/2 py-8 text-4xl font-bold text-blue-dark">
          {getBlogContext?.title}
        </h2>
        <div className="relative grid lg:grid-cols-[auto,_250px]">
          <div className={`${styles.blogmarkdown} lg:pr-8`}>
            <MDXRemote {...getBlogContext.source} />
            <div className="bg-red-500">test</div>
          </div>
          <div className="relative bottom-28">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

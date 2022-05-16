import Image from "next/image";
import styles from "./BlogPost.module.css";
import { MDXRemote } from "next-mdx-remote";
import SideBar from "../Blog/SideBar";
import Teasers from "./Teasers";
export default function BlogPost(props) {
  return (
    <div className="flex flex-col flex-1 pb-4 lg:pb-8 lg:px-48">
      <div>
        <div className="relative w-full">
          {props.getBlogContext?.src && (
            <Image
              src={props.getBlogContext?.src}
              alt={props.getBlogContext?.title}
              width={195}
              height={50}
              layout="responsive"
              objectFit="cover"
              className="rounded-b-sm "
            />
          )}
        </div>
        <div className="text-blue-dark">{props.getBlogContext.publishedAt}</div>
        <h2 className="w-full py-8 pl-2 font-bold lg:w-2/3 lg:text-4xl text-blue-dark lg:pl-0">
          {props.getBlogContext?.title}
        </h2>
        <div className="relative grid list-disc lg:grid-cols-[auto,_250px]">
          <div className={`${styles.blogmarkdown} lg:pr-8`}>
            <MDXRemote {...props.getBlogContext.source} />
            <div className="mt-8 text-blue-darker">
              <p className="xs:px-0">Das könnte Sie auch interessieren:</p>
              <Teasers teasers={props.suggestions} />{" "}
            </div>
          </div>

          <div className="relative bottom-28">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

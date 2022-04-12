import Image from "next/image";
import styles from "./BlogPost.module.css";
import { MDXRemote } from "next-mdx-remote";
export default function BlogPost({ getBlogContext }) {
  return (
    <div className="flex flex-1 flex-col p-4 lg:p-8">
      <div>
        <h2 className="m-auto py-8 text-blue-dark font-bold text-4xl ">
          {getBlogContext?.title}
        </h2>
        <div className={styles.blogmarkdown}>
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
    </div>
  );
}

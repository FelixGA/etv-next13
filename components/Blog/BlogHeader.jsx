import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkTile from "./LinkTile";

const options = { year: "numeric", month: "long", day: "numeric" };

export default function BlogHeader({ getBlogs }) {
  const [posts, setPosts] = useState(getBlogs);
  const [categories, setCategories] = useState([]);
  return (
    <div className="lg:grid grid-cols-4 w-full mx-auto max-w-screen-2xl border-b-blue-light border-b-8 hidden">
      {getBlogs &&
        posts.slice(0, 4).map((post, index) => (
          <Link href={`/${post.slug}`} key={index}>
            {/* LATER </Link>  <Link href={`/${post.category}/${post.slug}`} key={index}> */}
            {post.src && (
              <a className="w-full h-full relative first:row-span-2 first:col-span-2 hover:scale-105 hover:z-10 duration-100">
                <Image
                  width={400}
                  height={400}
                  src={post.src}
                  alt={post.title}
                  objectFit="cover"
                  layout="responsive"
                  priority
                />
                <div className="absolute bottom-0 px-2 bg-blue-dark bg-opacity-80 w-full  text-white flex xl:min-h-[6em] flex-col justify-between">
                  {post.title}
                  <p className=" text-blue-light">
                    {categories[index]} |{" "}
                    {new Date(post.publishedAt).toLocaleDateString(options)}
                  </p>
                </div>
              </a>
            )}
          </Link>
        ))}
      <LinkTile category={posts} getBlogs={getBlogs} />
    </div>
  );
}

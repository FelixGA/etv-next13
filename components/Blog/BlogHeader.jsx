import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LinkTile from "./LinkTile";
import { useRouter } from "next/router";

const options = { year: "numeric", month: "long", day: "numeric" };

export default function BlogHeader({ getBlogs }) {
  const router = useRouter();
  const [posts, setPosts] = useState(getBlogs);
  const [categories, setCategories] = useState([]);
  // console.log("BlogHeader.jsx: posts: ", posts);
  return (
    <div className="hidden w-full grid-cols-4 mx-auto border-b-8 lg:grid max-w-screen-2xl border-b-blue-light">
      {getBlogs &&
        posts.slice(0, 4).map((post, index) => (
          <Link href={`${post.category}/${post.slug}`} key={index}>
            {post.src && (
              <a className="relative w-full h-full duration-100 first:row-span-2 first:col-span-2 hover:scale-105 hover:z-10">
                <Image
                  width={400}
                  height={400}
                  src={post.src}
                  alt={post.slug}
                  objectFit="cover"
                  layout="responsive"
                  priority
                />

                <div className="absolute bottom-0 pl-2 pt-1 bg-blue-dark bg-opacity-80 w-full text-white flex xl:min-h-[6em] flex-col justify-between">
                  {post.title}
                  <p className="pb-1 text-white">
                    {categories[index]}
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

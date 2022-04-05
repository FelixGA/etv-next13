// import { useState, useEffect } from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
// import Head from "/components/core/Head.js";
import styles from "./Blog.module.css";
import { useRouter } from "next/router";
// import BlogHeader from "./BlogHeader";
// import Link from "next/link";
// import tileCatalogue from "/public/images/tileCatalogue.png";
// import tileFacebook from "/public/images/tileFacebook.png";
// import tileYoutube from "/public/images/tileYoutube.png";

export default function Blog({ getBlogs }) {
  const router = useRouter();
  //   const [prefix, setPrefix] = useState("");

  //   useEffect(() => {
  //     if (!page?.locale) return;
  //     if (page?.locale === "de") setPrefix("magazin");
  //     if (page?.locale === "en") setPrefix("en/blog");
  //     if (page?.locale === "es") setPrefix("es/revista");
  //     if (page?.locale === "fr") setPrefix("fr/blog");
  //     if (page?.locale === "it") setPrefix("it/blog");
  //     if (page?.locale === "cs") setPrefix("cs/magazin");
  //   }, [page]);

  return (
    <>
      {/* <Head page={page} /> */}
      {/* <BlogHeader getBlogs={getBlogs} /> */}
      <div className="grid w-full max-w-screen-xl mx-auto py-6 px-6 md:px-0">
        <div className="grid gap-4 justify-items-center grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] ">
          {getBlogs
            .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
            ?.map(
              (post, index) =>
                post.category && (
                  <a
                    className="flex flex-col max-w-md min-w-md shadow-card rounded-md transition transform hover:scale-105 overflow-hidden "
                    //   href={`/${prefix}/${post.slug}`}
                    href={
                      router.pathname == "/magazin/reviews"
                        ? `/magazin/reviews/${post.slug}`
                        : `/magazin/${post.slug}`
                    }
                    // href={`/magazin/${post.slug}`}
                    key={index}
                  >
                    {post.src && (
                      <div className="w-full">
                        <Image
                          src={post.src}
                          alt={post.title}
                          width={300}
                          height={200}
                          objectFit="cover"
                          layout="responsive"
                          priority={index < 4 ? true : false}
                        />
                      </div>
                    )}
                    {/* textContent */}
                    <div className="flex flex-col justify-evenly flex-1 px-4 pt-4 ">
                      <div>
                        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
                        <h2 className="text-xl font-bold text-blue-dark pb-2 ">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between"></div>
                    <div className="line-clamp-6 block px-4 pb-8 text-left">
                      {post?.contentHeading?.content
                        ? post.contentHeading.content
                        : post.description}
                    </div>
                  </a>
                )
            )}
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Head from "/components/core/Head.js";

export default function Blog(props) {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    if (!props.page?.locale) return;
    if (props.page?.locale === "de") setPrefix("magazin");
    if (props.page?.locale === "en") setPrefix("en/blog");
    if (props.page?.locale === "es") setPrefix("es/revista");
    if (props.page?.locale === "fr") setPrefix("fr/blog");
    if (props.page?.locale === "it") setPrefix("it/blog");
    if (props.page?.locale === "cs") setPrefix("cs/magazin");
  }, [props.page]);

  return (
    <div className="flex justify-center">
      <Head page={props.page} />
      <div className="grid w-full max-w-screen-xl">
        <h1 className="px-4 pt-8 pb-2 text-green-dark font-bold">
          {props.page?.title}
        </h1>
        <div className="max-w-screen-2xl p-2 md:p-4">
          <div className="grid gap-4 md:gap-8 justify-items-center grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
            {props.posts
              .sort(
                (a, b) =>
                  new Date(b.attributes.publishedAt) -
                  new Date(a.attributes.publishedAt)
              )
              ?.map(
                (post, index) =>
                  post.attributes.category && (
                    <a
                      className="flex flex-col max-w-md shadow-card rounded-md transition transform hover:scale-105 overflow-hidden"
                      href={`/${prefix}/${post.attributes.category}/${post.attributes.slug}`}
                      key={index}
                    >
                      {post.attributes.previewImage.data && (
                        <div className="w-full">
                          <Image
                            src={
                              post.attributes.previewImage.data?.attributes.url
                            }
                            alt={
                              post.attributes.previewImage.data?.attributes
                                .alternativeText
                            }
                            width={300}
                            height={200}
                            objectFit="cover"
                            layout="responsive"
                            priority={index < 4 ? true : false}
                          />
                        </div>
                      )}
                      <div className="flex-1 flex flex-col justify-between p-4">
                        <h2 className="text-xl pb-2">
                          {post.attributes.title}
                        </h2>
                        <div className="line-clamp-4">
                          <MDXRemote {...post.attributes.preview} />
                        </div>
                      </div>
                    </a>
                  )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

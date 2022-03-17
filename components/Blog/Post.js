import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import useTranslation from "/hooks/useTranslation";

const components = {
  img: (image) => (
    <span className="flex flex-col items-center">
      <Image
        className="md:w-2/3 mx-auto py-4 md:p-8"
        width={400}
        height={300}
        objectFit="contain"
        src={image.src}
        alt={image.alt}
      />
      <span>{image.alt}</span>
    </span>
  ),
};

export default function Post(props) {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    if (!props.page?.locale) return;
    if (props.page?.locale === "de") setPrefix("magazin");
    if (props.page?.locale === "en") setPrefix("en/blog");
    if (props.page?.locale === "fr") setPrefix("fr/blog");
    if (props.page?.locale === "es") setPrefix("es/revista");
  }, [props.page]);

  return (
    <>
      {/* <Head>
        <title>{props.post?.attributes.title}</title>
        <meta property="og:title" content={props.post?.attributes.title} />
        <meta name="twitter:title" content={props.post?.attributes.title} />
        {props.post?.description && (
          <>
            <meta
              name="description"
              content={props.post?.attributes.description}
            />
            <meta
              property="og:description"
              content={props.post?.attributes.description}
            />
            <meta
              name="twitter:description"
              content={props.post?.attributes.description}
            />
            <meta
              name="twitter:card"
              content={props.post?.attributes.description}
            />
          </>
        )}
        {props.post?.previewImage && (
          <>
            <meta
              property="og:image"
              content={props.post?.attributes.previewImage.data?.attributes.url}
            />
            <meta
              name="twitter:image"
              content={props.post?.attributes.previewImage.data?.attributes.url}
            />
          </>
        )}
        {props.localeSlugs?.map((slug, index) => (
          <link
            rel="alternate"
            hrefLang={slug.locale}
            href={`https://www.ari-motors.com/${prefix}/${slug.slug}`}
            key={index}
          />
        ))}
      </Head> */}

      <div className="grid justify-items-center">
        <article className="p-4 md:p-16 max-w-screen-lg">
          <h1>{props.post?.attributes.title}</h1>
          <p className="mb-8">
            {props.post?.attributes.publishedAt
              ? new Date(props.post?.attributes.publishedAt).toLocaleDateString(
                  props.post?.attributes.locale
                )
              : ""}
          </p>
          <div className="markdown">
            <MDXRemote
              {...props.post.attributes.content}
              components={components}
            />
          </div>
        </article>
      </div>
    </>
  );
}

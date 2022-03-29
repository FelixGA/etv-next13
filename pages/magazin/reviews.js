import Head from "next/head";
import getContent from "/utils/getContent";

import { useState } from "react";
import Blog from "../../components/Blog/Blog";
import Link from "next/link";

export default function reviews(props) {
  const [getBlogs, SetGetBlogs] = useState(props.blogs);
  const [getTestReview, SetTestReview] = useState(props.carsreview);

  return (
    <>
      <h1 className="px-4 pt-8 pb-2 text-blue-dark font-bold text-4xl text-center">
        Testberichte
      </h1>
      <Blog getBlogs={getTestReview} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/magazin");
  let blogs = await getContent("blogs", context.locale);
  let carsreview = await getContent("carsreview", context.locale);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      posts,
      vehicles,
      blogs,
      carsreview,
    },
  };
}

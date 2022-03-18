import Head from "next/head";
import getContent from "/utils/getContent";

import { useState } from "react";
import Blog from "../components/Blog/Blog";

export default function Home(props) {
  const [getBlogs, SetGetBlogs] = useState(props.blogs);

  return (
    <>
      <Blog getBlogs={getBlogs} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/magazin");

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
    },
  };
}

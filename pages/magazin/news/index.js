import Head from "../../../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Blog from "../../../components/Blog/Blog";
import BlogHeader from "../../../components/Blog/BlogHeader";

export default function reviews(props) {
  const [getBlogs, SetGetBlogs] = useState(
    props.blogs.filter((item) => item.category === "neuigkeiten")
  );

  useEffect(() => {
    SetGetBlogs(props.blogs.filter((item) => item.category === "neuigkeiten"));
  }, [props]);
  return (
    <>
      {" "}
      <Head page={props.page} />
      <BlogHeader getBlogs={getBlogs} />
      <Blog getBlogs={getBlogs} />
    </>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/magazin");
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);

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
      carsreviews,
    },
  };
}

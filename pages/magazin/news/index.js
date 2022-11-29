import Head from "../../../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Blog from "../../../components/Blog/Blog";
import BlogHeader from "../../../components/Blog/BlogHeader";
import LinkTile from "../../../components/Blog/LinkTile";

export default function news(props) {
  const [getBlogs, SetGetBlogs] = useState(
    props.blogs.filter((item) => item.category === "news")
  );
  
  // console.log(props.pages);
  
  useEffect(() => {
    SetGetBlogs(props.blogs.filter((item) => item.category === "news"));
  }, [props]);

  // console.log(props.pages);

  return (
    <>
      <Head page={props.page} />
      <div className="hidden lg:block">
        <BlogHeader getBlogs={getBlogs} />
      </div>
      <div className="lg:hidden">
        <LinkTile getBlogs={getBlogs} />
      </div>
      <Blog getBlogs={getBlogs} />

      {/* {console.log(props.pages)} */}
    </>
  );
  
}

export async function getStaticProps(context) {

  // speichere alles aus /content/pages/
  const pages = await getContent("pages", context.locale);
  // finde die page wo im object der path === "/magazin"
  const page = pages.find((page) => page.path === "/magazin");
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      blogs,
      brands,
      // pages
    },
  };
}


import Head from "../components/core/Head";
import getContent from "/utils/getContent";

import { useState, useEffect } from "react";
import Blog from "../components/Blog/Blog";
import Link from "next/link";
import BlogHeader from "../components/Blog/BlogHeader";
import LinkTile from "../components/Blog/LinkTile";

export default function magazin(props) {
  const [getBlogs, SetGetBlogs] = useState(props.blogs);
  const [getTestReviews, SetTestReviews] = useState(props.carsreviews);
  useEffect(() => {
    SetGetBlogs(props.blogs);
    SetTestReviews(props.carsreviews);
  }, [props]);
  return (
    <div>
      <Head page={props.page} />
      <div className="hidden lg:block">
        <BlogHeader getBlogs={getBlogs} />
      </div>
      <div className="lg:hidden">
        <LinkTile getBlogs={getBlogs} />
      </div>
      <h1 className="px-4 pt-8 pb-2 text-blue-dark font-bold text-4xl text-center">
        Magazin
      </h1>
      <div className="px-4 pt-8 pb-2 flex items-center justify-center text-blue-dark font-bold text-2xl text-center">
        <Link href="/magazin/reviews">
          <a>TESTBERICHTE</a>
        </Link>
      </div>
      <Blog getBlogs={getBlogs} />
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);

  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/magazin");
  let carsreviews = await getContent("carsreview", context.locale);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,

      blogs,
      carsreviews,
    },
  };
}

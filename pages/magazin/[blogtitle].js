import { useState } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import TopSlider from "../../components/Sliders/TopSlider";

import getSlugs from "/utils/getSlugs";
import BlogPost from "../../components/Blog/BlogPost";

export default function Blogs(props) {
  /* getBlogContext hook for the ONE car that it is displayed */
  const [relatedVehicles, SetRelatedVehicles] = useState(props.vehicles);
  const [getBlogContext, SetGetBlogContext] = useState(props.blog);

  return (
    <>
      <BlogPost getBlogContext={getBlogContext} />

      {/* slider  */}

      <TopSlider getCars={relatedVehicles} />
    </>
  );
}

export async function getStaticProps(context) {
  let blog = await getContentBySlug(
    "blogs",
    context.params.blogtitle,
    context.locale
  );

  let vehicles = await getContent("vehicles", context.locale);

  /*  get the cars from this category for the slider */
  vehicles = Object.entries(vehicles).map(([key, value]) => {
    return value;
  });

  vehicles = vehicles.filter(
    (item, index) =>
      item.category ===
      vehicles.find((item) => item.name === blog.slug)?.category
  );
  /* catching errors */
  let emptyBlog = await getContentBySlug(
    "blogs",
    "beispiel bitte nicht ändern",
    context.locale
  );

  // let relatedBlog;

  // blog.source
  //   ? (relatedBlog = blog.contentHeading)
  //   : (relatedBlog = emptyBlog.contentHeading);
  // if (!vehicle) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      vehicles,
      blog,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("blogs", "blogtitle", context.locales);

  return { paths, fallback: false };
}

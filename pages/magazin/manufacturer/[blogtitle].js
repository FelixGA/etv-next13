// const paths = pages.map((page) => ({
//   params: { category: page.attributes.path.substring(9) },
// }));
import Head from "../../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import ReviewPost from "../../../components/Blog/ReviewPost";
import BlogPost from "../../../components/Blog/BlogPost";

export default function manufacturer(props) {
  /* getBlogContext hook for the ONE car that it is displayed */
  const [relatedVehicles, SetRelatedVehicles] = useState(props.vehicles);
  const [getBlogContext, SetGetBlogContext] = useState(props.blog);
  const [getMdxContent, SetGetMdxContent] = useState(props.getTestReview);

  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setValueFromUseEffect(props.params.blogtitle);
    SetRelatedVehicles(props.vehicles);
    SetGetMdxContent(props.getTestReview);
  }, [props]);
  return (
    <>
      {" "}
      <Head page={props.getTestReview} />
      <BlogPost getBlogContext={getBlogContext} />
    </>
  );
}

export async function getStaticProps(context) {
  let blog = await getContentBySlug(
    "blogs",
    context.params.blogtitle,
    context.locale
  );
  console.log(blog);
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

  /* get all blogs*/
  let blogs = await getContent("blogs", context.locale);
  let brands = await getContent("brands", context.locale);

  return {
    props: {
      vehicles,
      blog,
      blogs,
      params: context.params,
      brands,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("blogs", "blogtitle", context.locales);

  return { paths, fallback: false };
}

import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import TopSlider from "../../../components/Sliders/TopSlider";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import BlogPost from "../../../components/Blog/BlogPost";

export default function Reviews(props) {
  /* getBlogContext hook for the ONE car that it is displayed */
  const [relatedVehicles, SetRelatedVehicles] = useState(props.vehicles);
  const [getBlogContext, SetGetBlogContext] = useState(props.blog);
  const [getTestReview, SetTestReview] = useState(props.getTestReview);
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setValueFromUseEffect(props.params.blogtitle);
    SetRelatedVehicles(props.vehicles);
    SetGetBlogContext(props.blog);
  }, [props]);
  return <>sr</>;
}

export async function getStaticProps(context) {
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
  /* get reviews */
  let carsreview = await getContentBySlug(
    "carsreview",
    context.params.cartitle,
    context.locale
  );

  /* catching errors in case there is no carsreview yet */
  let getTestReview = null;

  if (carsreview.source !== undefined) {
    /* serializing the array with mdx */
    getTestReview = await Promise.all(
      carsreview?.content.map((item, index) => {
        return serialize(item.content);
      })
    );
  } else {
    getTestReview = null;
  }

  return {
    props: {
      vehicles,
      blog,
      blogs,
      getTestReview,
      params: context.params,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("carsreview", "blogtitle", context.locales);
  return { paths, fallback: false };
}

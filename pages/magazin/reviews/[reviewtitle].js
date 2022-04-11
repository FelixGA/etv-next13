import Head from "../../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import ReviewPost from "../../../components/Blog/ReviewPost";

export default function Reviews(props) {
  /* getBlogContext hook for the ONE car that it is displayed */
  const [relatedVehicles, SetRelatedVehicles] = useState(props.vehicles);
  const [getMdxContent, SetGetMdxContent] = useState(props.getTestReview);
  const [getCarsReview, SetGetCarsReview] = useState(props.carsreview);
  const [getCarsReviews, SetGetCarsReviews] = useState(props.carsreviews);
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setValueFromUseEffect(props.params.blogtitle);
    SetRelatedVehicles(props.vehicles);
    SetGetMdxContent(props.getTestReview);
    SetGetCarsReview(props.carsreview);
    SetGetCarsReviews(props.carsreviews);
  }, [props]);
  66666, props.getTestReview;
  return (
    <>
      {" "}
      <Head page={props.getTestReview} />
      <ReviewPost getCarsReview={getCarsReview} getMdxContent={getMdxContent} />
    </>
  );
}

export async function getStaticProps(context) {
  /* get all blogs*/
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);

  /* get reviews */
  let carsreview = await getContentBySlug(
    "carsreview",
    context.params.reviewtitle,
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
  /*  get the cars from this category for the slider */
  let vehicles = await getContent("vehicles", context.locale);
  vehicles = Object.entries(vehicles).map(([key, value]) => {
    return value;
  });

  vehicles = vehicles.filter(
    (item, index) =>
      item.category ===
      vehicles.find((item) => item.name === carsreview.slug)?.category
  );
  return {
    props: {
      vehicles,
      carsreview,
      carsreviews,
      blogs,
      getTestReview,
      params: context.params,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("carsreview", "reviewtitle", context.locales);
  return { paths, fallback: false };
}

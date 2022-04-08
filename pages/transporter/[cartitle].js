import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import TopSlider from "../../components/Sliders/TopSlider";
import Articles from "../../components/DetailsPage/Articles";
import PrintPopUp from "../../components/DetailsPage/PrintPopUp";
import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import BasicInfo from "../../components/DetailsPage/BasicInfo";

export default function Details(props) {
  /* getCars hook for the slider */
  const [getCars, SetGetCars] = useState(props.vehicles);

  /* carItem hook for the ONE car that it is displayed */
  const [carItem, SetCarItem] = useState(props.vehicle);
  /* for the "TestBericht" part  */
  const [getTestReview, SetTestReview] = useState(props.getTestReview);
  /* for the "Testbericht" part  */
  const [getCarsReview, SetCarsReview] = useState(props.carsreview);
  /* the content for the future related blogs  */
  const [getBlogContext, SetGetBlogContext] = useState(props.relatedBlog);
  /* to make the Page change after clicking next/link */
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setValueFromUseEffect(props.params.cartitle);
    SetGetCars(props.vehicles);
    SetCarItem(props.vehicle);
    SetGetBlogContext(props.relatedBlog);
    SetTestReview(props.getTestReview);
    SetCarsReview(props.carsreview);
  }, [props]);
  // console.log("getCarsReview", getCarsReview.slug);

  return (
    <>
      {/* image and rating section */}
      <div className="2xl:px-40">
        <BasicInfo carItem={carItem} />
        {/* technical details section */}
        <TechnicalDetails carItem={carItem} />
        {/* description and articles section */}
      </div>
      <Articles
        carItem={carItem}
        getBlogContext={getBlogContext}
        getTestReview={getTestReview}
        getCarsReview={getCarsReview}
      />
      {/* slider  */}
      <TopSlider getCars={getCars} />
      {/*sticky popup  */}
      <PrintPopUp carItem={carItem} />
    </>
  );
}

export async function getStaticProps(context) {
  let vehicle = await getContentBySlug(
    "vehicles",
    context.params.cartitle,
    context.locale
  );
  let vehicles = await getContent("vehicles", context.locale);

  /*  get the first 4 from this category for the slider */
  vehicles = Object.entries(vehicles).map(([key, value]) => {
    return value;
  });
  vehicles = vehicles
    .filter((item, index) => item.category === vehicle.category)
    .slice(0, 4);

  /* get related reviews*/
  let carsreviews = await getContent("carsreview", context.locale);

  // let carsreview = await getContentBySlug(
  //   "carsreview",
  //   context.params.cartitle,
  //   context.locale
  // );
  let carsreview = carsreviews.find(
    (item) =>
      context.params.cartitle == item.relatedCars ||
      context.params.cartitle.includes(item.slug)
  )
    ? carsreviews.find(
        (item) =>
          context.params.cartitle == item.relatedCars ||
          context.params.cartitle.includes(item.slug)
      )
    : null;

  /* catching errors in case there is no carsreview yet */
  let getTestReview = null;

  if (carsreview !== undefined && carsreview !== null) {
    /* serializing the array with mdx */
    getTestReview = await Promise.all(
      carsreview?.content.map((item, index) => {
        return serialize(item.content);
      })
    );
  } else {
    getTestReview = null;
  }

  /* get all blogs for the footer*/
  let blogs = await getContent("blogs", context.locale);
  /* get related blog */
  let relatedBlog = blogs.find(
    (item, index) => item.category === vehicle.category
  )
    ? blogs.find((item, index) => item.slug === context.params.cartitle)
    : blogs.find((item, index) => item.slug === "beispiel bitte nicht ändern");

  if (!vehicle) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicle,
      vehicles,
      relatedBlog,
      getTestReview,
      carsreview,
      carsreviews,
      params: context.params,
      blogs,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("vehicles", "cartitle", context.locales);

  return { paths, fallback: false };
}

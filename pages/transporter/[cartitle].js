import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import TopSlider from "../../components/Sliders/TopSlider";
import Articles from "../../components/DetailsPage/Articles";
import PrintPopUp from "../../components/DetailsPage/PrintPopUp";
import TechnicalDetails from "../../components/DetailsPage/TechnicalDetails";

import getSlugs from "/utils/getSlugs";
import BasicInfo from "../../components/DetailsPage/BasicInfo";

export default function Details(props) {
  /* getCars hook for the slider */
  const [getCars, SetGetCars] = useState(props.vehicles);

  /* carItem hook for the ONE car that it is displayed */
  const [carItem, SetCarItem] = useState(props.vehicle);
  console.log(carItem);
  /* for the view more hook */
  const [descriptionSize, SetDescriptionSize] = useState(true);
  const [getBlogContext, SetGetBlogContext] = useState(props.relatedBlog);
  /* to make the Page change after clicking next/link */

  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setValueFromUseEffect(props.params.cartitle);
    SetGetCars(props.vehicles);
    SetCarItem(props.vehicle);
  }, [props]);

  return (
    <>
      {/* image and rating section */}
      <div className="2xl:px-40">
        <BasicInfo carItem={carItem} descriptionSize={descriptionSize} />

        {/* technical details section */}

        <TechnicalDetails carItem={carItem} />
        {/* description and articles section */}
      </div>
      <Articles carItem={carItem} getBlogContext={getBlogContext} />
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
  /* get related blogs*/
  let blog = await getContentBySlug(
    "blogs",
    context.params.cartitle,
    context.locale
  );
  /* get all blogs*/
  let blogs = await getContent("blogs", context.locale);

  /* catching errors in case there isnt blog yet */
  let emptyBlog = await getContentBySlug(
    "blogs",
    "beispiel bitte nicht ändern",
    context.locale
  );

  let relatedBlog;

  blog.source
    ? (relatedBlog = blog.contentHeading)
    : (relatedBlog = emptyBlog.contentHeading);
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
      params: context.params,
      blogs,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("vehicles", "cartitle", context.locales);

  return { paths, fallback: false };
}

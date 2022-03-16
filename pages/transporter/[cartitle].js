import { useState } from "react";
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
  /* for the view more hook */
  const [descriptionSize, SetDescriptionSize] = useState(true);
  const [getMarkdownContext, SetGetMarkdownContext] = useState(
    props.relatedBlog
  );
  return (
    <>
      {/* image and rating section */}

      <BasicInfo carItem={carItem} descriptionSize={descriptionSize} />
      {/* technical details section */}

      <TechnicalDetails carItem={carItem} />
      {/* description and articles section */}

      <Articles carItem={carItem} getMarkdownContext={getMarkdownContext} />
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
  /* catching errors in case there isnt blog yet */
  let emptyBlog = await getContentBySlug("blogs", "beispiel", context.locale);

  let relatedBlog;

  blog.source ? (relatedBlog = blog.source) : (relatedBlog = emptyBlog.source);
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
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("vehicles", "cartitle", context.locales);

  return { paths, fallback: false };
}

import Head from "../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";

import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";

export default function Details(props) {
  /* getCars hook for the slider */
  const [getCars, SetGetCars] = useState(props.vehicles);

  /* for the "brand" */
  const [getBrand, SetGetBrand] = useState(props.brand);

  useEffect(() => {
    SetGetBrand(props.brand);
    SetGetCars(props.vehicles);
  }, [props]);
  console.log(getBrand.title);
  return (
    <>
      <Head page={props.vehicle} />
      {/* image and rating section */}
      hii {getBrand.title}
    </>
  );
}

export async function getStaticProps(context) {
  let brand = await getContentBySlug(
    "brands",
    context.params.brand,
    context.locale
  );
  let vehicles = await getContent("vehicles", context.locale);

  /*  get the vehicles from this brand*/
  // vehicles = Object.entries(vehicles).map(([key, value]) => {
  //   return value;
  // });
  // vehicles = vehicles
  //   .filter((item, index) => item.category === vehicle.category)
  //   .slice(0, 4);

  if (!brand) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brand,
      vehicles,

      params: context.params,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("brands", "brand", context.locales);

  return { paths, fallback: false };
}

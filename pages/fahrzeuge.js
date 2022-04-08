import { useStore } from "../components/store";

import getContent from "/utils/getContent";
import { useState, useEffect } from "react";

export default function fahrzeuge(props) {
  const [sortedCars, SetSortedCars] = useState([]);

  const { state, dispatch } = useStore();
  useEffect(() => {
    SetSortedCars(props.vehicles);
  }, [props.vehicles]);

  return <div>vechicles</div>;
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);

  const page = pages.find((page) => page.path === "/fahrzeuge");

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      posts,
      page,
      blogs,
      carsreviews,
    },
  };
}

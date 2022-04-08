import { useStore } from "../components/store";

import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Image from "next/image";
import FahrzeugeResultList from "../components/FahrzeugeResultLIst/FahrzeugeResultList";
export default function fahrzeuge(props) {
  const [sortedCars, SetSortedCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  const [getCarsReview, SetCarsReview] = useState(props.carsreviews);
  const { state, dispatch } = useStore();
  useEffect(() => {
    /* ᴄᴀʀs ranking ғɪʟᴛᴇʀ */
    SetSortedCars(
      props.vehicles.sort((a, b) => a.rating.value - b.rating.value)
    );

    SetCarsReview(props.carsreviews);
    SetGetContent(props.page);
  }, [props.vehicles]);
  return (
    <div className="w-full">
      <div className="2xl:px-48">
        <h1 className="text-black text-2xl xl:text-4xl tracking-wider pb-4 pt-8 xl:pt-12 px-4 2xl:px-48 text-left">
          Elektro-Transporter – {sortedCars.length} {getContent.title}
        </h1>

        <div className="w-3/4 mx-auto my-2">
          <Image
            src="/images/test2.svg"
            alt={getContent.title}
            width={150}
            height={30}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="px-4 2xl:px-48">
          <p>{getContent.description}</p>
        </div>
        <div className="2xl:px-48">
          <FahrzeugeResultList
            sortedCars={sortedCars}
            getCarsReview={getCarsReview}
          />
        </div>
      </div>
    </div>
  );
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

import { useStore } from "../components/store";
import Head from "../components/core/Head";
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
    <div className="w-3/4 margin-auto ">
      <Head page={props.page} />
      <h1>
        Elektro-Transporter – {sortedCars.length} {getContent.title}
      </h1>
      <p>{getContent.description}</p>
      <div className="w-3/4 ">
        <Image
          src={getContent.src}
          alt={getContent.title}
          width={195}
          height={30}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      <FahrzeugeResultList
        sortedCars={sortedCars}
        getCarsReview={getCarsReview}
      />
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

import { useStore } from "../../components/store";
import Head from "../../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FahrzeugeResultList from "../../components/FahrzeugeResultLIst/FahrzeugeResultList";
export default function fahrzeuge(props) {
  const [sortedCars, SetSortedCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  const [getCarsReview, SetCarsReview] = useState(props.carsreviews);
  const { state, dispatch } = useStore();
  // console.log("CAAARRSS", sortedCars);
  /* ᴄᴀʀs ranking ғɪʟᴛᴇʀ */
  useEffect(() => {
    SetSortedCars(
      props.vehicles.sort((a, b) => a.rating.value - b.rating.value)
    );

    SetCarsReview(props.carsreviews);
    SetGetContent(props.page);
  }, [props.vehicles]);
  // console.log(
  //   props.vehicles.map(
  //     (car) => `${car.title} ________________ ${car.relatedReviews}`
  //   )
  // );
  return (
    <div className="w-full">
      <Head page={props.page} />
      <div className="2xl:px-48">
        <h1 className="px-4 pt-8 pb-4 text-2xl leading-9 tracking-wider text-center text-black lg:text-left lg:text-4xl xl:pt-12 2xl:px-48">
          Elektro-Transporter – {sortedCars.length} {getContent.title}
        </h1>

        <div className="w-3/5 mx-auto my-4 ">
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
          <div className="p-4 text-xl ">
            {getContent.description}
            <Link href="/caradvisor">
              <a className="relative text-blue-dark">Probieren Sie es aus!</a>
            </Link>
          </div>
        </div>
        <div className="px-4 2xl:px-48">
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

  const page = pages.find(
    (page) =>
      page.path ===
      "/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich"
  );

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

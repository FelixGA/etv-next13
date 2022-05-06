import Head from "../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import FahrzeugeResultList from "../../components/FahrzeugeResultLIst/FahrzeugeResultList";
import Image from "next/image";

export default function Details(props) {
  /* getCars hook for the slider */
  const [sortedCars, SetSortedCars] = useState(props.sortedCars);

  /* for the "brand" */
  const [getBrand, SetGetBrand] = useState(props.brand);

  useEffect(() => {
    // SetGetBrand(props.brand);
    // SetSortedCars(props.sortedCars);
  }, [props]);
  return (
    <>
      <div className="w-full">
        {/* <Head page={props.page} /> */}
        <div className="2xl:px-48">
          <h1 className="px-4 pt-8 pb-4 text-2xl leading-9 tracking-wider text-center text-black lg:text-left lg:text-4xl xl:pt-12 2xl:px-48">
            {getBrand.title} Elektro-Transporter – {sortedCars.length}{" "}
            Nutzfahrzeuge mit Elektro Antrieb im E-Transporter Vergleich
          </h1>

          <div className="w-3/5 mx-auto my-4 ">
            <Image
              src={getBrand.src}
              alt={getBrand.title}
              width={150}
              height={30}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className="px-4 2xl:px-48">
            <div className="py-4 text-xl">{getBrand.description}</div>
          </div>
          <div className="2xl:px-48">
            <FahrzeugeResultList sortedCars={sortedCars} />
          </div>
        </div>
      </div>
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
  let sortedCars = vehicles.filter(
    (car) =>
      car.name.split(/[\s-]+/)[0] == context.params.brand.split(/[\s-]+/)[0]
  );
  let brands = await getContent("brands", context.locale);

  if (!brand) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brand,
      brands,
      vehicles,
      sortedCars,
      params: context.params,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("brands", "brand", context.locales);

  return { paths, fallback: false };
}

import Head from "../../components/core/Head";
import { useState, useEffect } from "react";
import getContentBySlug from "/utils/getContentBySlug";
import getContent from "/utils/getContent";
import { serialize } from "next-mdx-remote/serialize";
import getSlugs from "/utils/getSlugs";
import FahrzeugeResultList from "../../components/FahrzeugeResultLIst/FahrzeugeResultList";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";

export default function Details(props) {
  /* getCars hook for the slider */
  const [sortedCars, SetSortedCars] = useState(props.sortedCars);

  /* for the "brand" */
  const [getBrand, SetGetBrand] = useState(props.brand);
  useEffect(() => {
    SetGetBrand(props.brand);
    SetSortedCars(props.sortedCars);
  }, [props]);
  return (
    <>
      <div className="w-full px-2">
        {/* <Head page={props.page} /> */}
        <div className="2xl:px-40">
          <h1 className="px-4 pt-8 pb-4 text-2xl leading-9 tracking-wider text-center text-black lg:text-left lg:text-4xl xl:pt-12 2xl:px-40">
            {getBrand.title} Elektro-Transporter - {sortedCars.length}{" "}
            Nutzfahrzeuge mit Elektro Antrieb im E-Transporter Vergleich
          </h1>

          {/* *** Flexbox Link/Brand */}
          <div className="flex mx-4 my-6 2xl:mx-40 cursor-pointer">
            {/* *** Link */}
            <div className="flex-auto w-3/4">
              <Link href={`${getBrand.websiteLink}`} passHref>
                <a
                  target="_blank"
                  className="inline-block pt-4 my-4 text-lg cursor-pointer sm:text-2xl text-blue-darker"
                >
                  <span className="text-[#666666] font-bold">
                    Hersteller-Website:
                  </span>{" "}
                  {getBrand.websiteLink}
                </a>
              </Link>
            </div>

             {/* *** Brand */}
            <div className="flex-auto w-1/4 pt-8">
              <Link href={`${getBrand.websiteLink}`} passHref>
                <a target="_blank">
                  <Image
                    src={getBrand.src}
                    alt={getBrand.title}
                    width={150}
                    height={30}
                    layout="responsive"
                    objectFit="contain"
                  />
                </a>
              </Link>
            </div>
          </div>

          {/* Text */}
          <div className="px-4 2xl:px-40">
            <div className="py-4 text-xl ">
              {props.getContext ? <MDXRemote {...props.getContext} /> : null}
            </div>
          </div>

          {/* *** Liste */}
          <div className="2xl:px-40">
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
  let getContext = await serialize(brand.content);

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
      getContext,
    },
  };
}

export async function getStaticPaths(context) {
  const paths = await getSlugs("brands", "brand", context.locales);

  return { paths, fallback: false };
}

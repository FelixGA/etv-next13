import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";
import Image from "next/image";
export default function caradvisor(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);

  const [getTestReviews, SetTestReviews] = useState(props.carsreviews);
  useEffect(() => {
    SetTestReviews(props.carsreviews);
  }, [props]);
  return (
    <div className=" bg-blue-extralight">
      <Head page={props.page} />

      <Funnel getCars={getCars} />
      <div className="relative flex justify-between 2xl:h-64">
        {/* human image */}
        <div className="absolute bottom-0 right-0 hidden w-44 xl:w-64 2xl:w-96 2xl:right-6 2xl:block">
          <Image
            src="/images/beraterNew.png"
            width={500}
            height={700}
            layout="responsive"
          />
        </div>
      </div>
      <div className="items-center justify-around hidden h-12 bg-green-lighter lg:flex">
        <div className="">
          <p className="w-full text-base text-white lg:text-base 2xl:text-xl">
            ✔️ über 10 Jahre Erfahrung mit KFZ
          </p>
        </div>
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ 500+ verkaufte Transporter seit 2019
          </p>
        </div>
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ unverbindliches Angebot in 24 Stunden
          </p>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/caradvisor");
  let carsreviews = await getContent("carsreview", context.locale);

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
      carsreviews,
    },
  };
}

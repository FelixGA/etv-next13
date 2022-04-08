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
    <div className="bg-blue-extralight">
      <div className="bg-green-lighter hidden xl:flex justify-around h-12 items-center">
        <div className="">
          <p className="text-white text-lg 2xl:text-xl w-full">
            ✔️ über 10 Jahre Erfahrung mit KFZ
          </p>
        </div>
        <div className="">
          <p className="text-white text-lg 2xl:text-xl w-full">
            ✔️ 500+ verkaufte Transporter seit 2019
          </p>
        </div>
        <div className=" ">
          <p className="text-white text-lg 2xl:text-xl w-full">
            ✔️ unverbindliches Angebot in 24 Stunden
          </p>
        </div>
      </div>
      <Funnel getCars={getCars} />
      <div className="flex justify-between relative">
        {/* medal gold image */}
        <div className="flex relative left-[25%] sm:left-[25vw] lg:left-[10vw]">
          <div className="w-16 sm:w-28 pt-8 sm:pt-12">
            <Image
              src="/images/siegel2.png"
              width={166}
              height={166}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          {/* medal dsvgo image */}
          <div className="w-32 sm:w-52">
            <Image
              src="/images/siegel.png"
              width={166}
              height={166}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
        {/* human image */}
        <div className="w-44 xl:w-64 2xl:w-96 absolute bottom-0 right-0 2xl:right-6 hidden lg:block">
          <Image
            src="/images/beraterNew.png"
            width={500}
            height={700}
            layout="responsive"
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

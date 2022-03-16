import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";
import Image from "next/image";
export default function caradvisor(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  return (
    <div className="bg-blue-extralight">
      <div className="bg-green-lighter hidden xl:flex justify-center h-12 items-center">
        <div className="xl:pr-60 text-white text-2xl">kostenlos </div>
        <div className="text-white text-2xl">unparteiisch </div>
        <div className="xl:pl-60 text-white text-2xl">unverbindlich</div>
      </div>
      <Funnel getCars={getCars} />
      <div className="flex justify-between relative ">
        {/* medal gold image */}
        <div className="flex relative left-0 sm:left-[25vw] lg:left-[10vw]">
          <div className="w-20 sm:w-28 pt-10 sm:pt-12">
            <Image
              src="/images/siegel2.png"
              width={166}
              height={166}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          {/* medal dsvgo image */}
          <div className="w-40 sm:w-52">
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
        <div className="w-72 2xl:w-96 absolute bottom-0 right-0 hidden lg:block">
          <Image
            src="/images/berater.png"
            width={266}
            height={296}
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
    },
  };
}

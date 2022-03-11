import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";
import Image from "next/image";
export default function caradvisor(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);

  return (
    <div className="bg-blue-extralight">
      <div className="bg-green-lighter flex justify-center h-12 items-center">
        <div className="pr-60 text-white text-2xl">kostenlos </div>
        <div className="text-white text-2xl">unparteiisch </div>
        <div className="pl-60 text-white text-2xl">unverbindlich</div>
      </div>
      <Funnel getCars={getCars} />
      <div className="flex justify-between relative lg:pl-80">
        {/* medal gold image */}
        <div className="flex relative left-6 ">
          <div className=" w-28 pt-12">
            <Image
              src="/images/siegel2.png"
              width={166}
              height={166}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          {/* medal dsvgo image */}
          <div className="w-52">
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
        <div className=" w-96 absolute bottom-0 right-0 hidden lg:block">
          <Image
            src="/images/berater.png"
            width={266}
            height={296}
            layout="responsive"
          />
        </div>
      </div>{" "}
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

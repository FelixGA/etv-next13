import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";
import Image from "next/image";
export default function caradvisor(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getContent, SetGetContent] = useState(props.page);
  return (
    <div>
      <Funnel getContent={getContent} />
      <div className="flex">
        {/* medal gold image */}
        <div className="m-10 w-64">
          <Image
            src="/images/siegel2.png"
            width={166}
            height={166}
            layout="responsive"
          />
        </div>
        {/* medal dsvgo image */}
        <div className="m-10 w-64">
          <Image
            src="/images/siegel.png"
            width={166}
            height={166}
            layout="responsive"
          />
        </div>
        {/* human image */}
        <div className="m-10 w-96">
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

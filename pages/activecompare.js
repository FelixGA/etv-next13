import { useStore } from "../components/store";
import { useState } from "react";
import ActiveCompareItem from "../components/ActiveCompare/ActiveCompareItem";
import ActiveCompareImage from "../components/ActiveCompare/ActiveCompareImage";
import Link from "next/link";
import ActiveCompareButton from "../components/ActiveCompare/ActiveCompareButton";
import getContent from "/utils/getContent";
import { MDXRemote } from "next-mdx-remote";

export default function Activecompare(props) {
  const { state, dispatch } = useStore();
  const [getCars, SetGetCars] = useState(props.vehicles);
  // get all cars as props
  //console.log(getCars);
  /*  get the 3 from the state for comparison */
  let comparedCars = state?.autoForComparisons?.map((el) => el.auto);

  return (
    <div className="wrapper">
      <div className="heading+btn  pt-8 pb-12 pl-[5vw]">
        <h1 className="font-bold  text-[#2C3F53] text-2xl lg:text-4xl">
          Ihre Auswahl im Detailvergleich
        </h1>
        {/* BUTTON VISIBLE ONLY ON MOBILE */}
        <div className="w-fit lg:hidden mt-4">
          <button className="   bg-grey-lighter w-56 h-10 rounded-md text-blue-darker font-medium">
            <Link href="/comparePage">
              <a className="visited:text-blue-darker">
                « zurück zur Ergebnisliste
              </a>
            </Link>
          </button>
        </div>
      </div>
      {/* BUTTON AND IMAGES <>VISIBLE IN DESKTOP VIEW<> */}
      <div className="btn+img w-full h-52 2xl:h-80 bg-grey-lighter hidden lg:grid grid-cols-[1/4_minmax(250px,_1fr)] grid-flow-col   scrollbar-hide justify-center  items-center">
        <div className="lg:w-64 xl:w-88 2xl:w-[380px] pl-4">
          <button className="mb-32 2xl:mb-36 text-sm bg-white w-52 h-10  rounded-md text-blue-darker ">
            <Link href="/comparePage">
              <a className="visited:text-blue-darker">
                « zurück zur Ergebnisliste
              </a>
            </Link>
          </button>
        </div>

        {/* <ActiveCompareImage comparedCars={comparedCars} /> */}
      </div>
      {/* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN MOBILE VIEW<> */}
      <div className="data-content-wrapper  grid grid-flow-col grid-cols-[1/4_minmax(130px,_1fr)] w-full scrollbar-hide overflow-x-scroll lg:hidden">
        <div className="data-content-categories  w-full border-r-2 shadow-xl ">
          {/* sticky left-0 z-10*/}
          <div className="placeholder-image-clone bg-[#F2F5F8] h-36 "></div>
          <div className="first-category flex items-center h-10 w-full bg-white">
            <h3 className="first-category-title p-4 text-[#2C3F53] text-xl">
              Grundlagen
            </h3>
          </div>
          <div className="second-category flex items-center h-10 w-full bg-[#F2F5F8]">
            <h3 className="second-category-title p-4 text-[#2C3F53] text-sm">
              Reichweite
            </h3>
          </div>
          <div className="third-category flex items-center h-10 w-full">
            <h3 className="third-category-title p-4 text-[#2C3F53] text-sm ">
              Zuladung
            </h3>
          </div>
          <div className="forth-category flex items-center h-10 w-full bg-[#F2F5F8]">
            <h3 className="forth-category-title p-4 text-[#2C3F53] text-sm">
              Ladezeit
            </h3>
          </div>
          <div className="fifth-category flex items-center h-10 w-full">
            <h3 className="fifth-category-title p-4 text-[#2C3F53] text-sm">
              Höchst- geschwindigkeit
            </h3>
          </div>
          <div className="sixth-category flex items-center h-10 w-full bg-[#F2F5F8]">
            <h3 className="sixth-category-title p-4 text-[#2C3F53] text-sm">
              Nutzlastpreis
            </h3>
          </div>
          <div className="seventh-category flex items-center h-10 w-full">
            <h3 className="seventh-category-title p-4 text-[#2C3F53] text-sm">
              Kaufpreis
            </h3>
          </div>
          <div className="eigth-category flex items-center h-10 w-full bg-[#F2F5F8]">
            <h3 className="eigth-category-title p-4 text-[#2C3F53] text-md">
              Ausstattung
            </h3>
          </div>
          <div className="ninth-category flex items-center h-10 w-full">
            <h3 className="ninth-category-title p-4 text-[#2C3F53] text-sm">
              Elektrische Fensterheber
            </h3>
          </div>
          <div className="ten-category flex items-center h-10 w-full bg-[#F2F5F8]">
            <h3 className="ten-category-title p-4 text-[#2C3F53] text-sm">
              ABS
            </h3>
          </div>
          <div className="eleven-category flex items-center h-10 w-full">
            <h3 className="eleven-category-title p-4 text-[#2C3F53] text-sm">
              Airbags
            </h3>
          </div>
          <div className="twelwe-category flex items-center h-10 w-full bg-[#F2F5F8]">
            <h3 className="twelwe-category-title p-4 text-[#2C3F53] text-sm">
              Klimaanlage
            </h3>
          </div>
          <div className="thirtine-category flex items-center h-10 w-full">
            <h3 className="thirtine-category-title p-4 text-[#2C3F53] text-sm">
              Goldene Wasserhähne
            </h3>
          </div>
          <div className="w-[105%] bg-[#D0DDEA] h-20"></div>
        </div>
        <div className="flex flex-row">
          {/* <ActiveCompareItem comparedCars={comparedCars} /> */}
        </div>
      </div>
      {/* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN DESKTOP VIEW<> */}
      <div className="data-content-wrapper w-full  hidden lg:grid grid-cols-[1/4_minmax(250px,_1fr)] grid-flow-col scrollbar-hide justify-center  items-center pt-12">
        <div className="data-content-categories   lg:w-64 xl:w-88 2xl:w-[380px]">
          <div className="placeholder-image-clone flex lg:hidden h-16  w-56 lg:w-full xl:w-88 2xl:w-[380px]"></div>
          <div className="first-category lg:w-full xl:w-88 2xl:w-[380px] h-10">
            <h3 className="first-category-title pl-4 text-2xl xl:text-md font-bold text-[#2C3F53]">
              Grundlagen
            </h3>
          </div>
          <div className="second-category h-10 bg-[#F2F5F8] w-full flex items-center">
            <h3 className="second-category-title text-md font-medium text-[#2C3F53] pl-4">
              Reichweite
            </h3>
          </div>
          <div className="third-category h-10">
            <h3 className="third-category-title h-10  w-full flex items-center text-[#2C3F53] pl-4">
              Zuladung
            </h3>
          </div>
          <div className="forth-category h-10">
            <h3 className="forth-category-title h-10 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center pl-4">
              Ladezeit
            </h3>
          </div>
          <div className="fifth-category h-10">
            <h3 className="fifth-category-title h-10  w-full text-[#2C3F53] flex items-center pl-4">
              Höchst- geschwindigkeit
            </h3>
          </div>
          <div className="sixth-category h-10">
            <h3 className="sixth-category-title h-10 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center pl-4">
              Nutzlastpreis
            </h3>
          </div>
          <div className="seventh-category h-10">
            <h3 className="seventh-category-title h-10  w-full text-[#2C3F53] flex items-center pl-4">
              Kaufpreis
            </h3>
          </div>
          <div className="eigth-category h-10 mt-20">
            <h3 className="eigth-category-title text-2xl xl:text-md font-bold text-[#2C3F53] pl-4">
              Ausstattung
            </h3>
          </div>
          <div className="ninth-category h-10">
            <h3 className="ninth-category-title h-10 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center pl-4">
              Elektrische Fensterheber
            </h3>
          </div>
          <div className="ten-category h-10">
            <h3 className="ten-category-title h-10  w-full text-[#2C3F53] flex items-center pl-4">
              ABS
            </h3>
          </div>
          <div className="eleven-category h-10">
            <h3 className="eleven-category-title h-10 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center pl-4">
              Airbags
            </h3>
          </div>
          <div className="twelwe-category h-10">
            <h3 className="twelwe-category-title h-10  w-full text-[#2C3F53] flex items-center pl-4">
              Klimaanlage
            </h3>
          </div>
          <div className="thirtine-category h-10">
            <h3 className="thirtine-category-title h-10 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center pl-4">
              Goldene Wasserhähne
            </h3>
          </div>
        </div>

        {/* <ActiveCompareItem comparedCars={comparedCars} /> */}
      </div>
      {/* BUTTONS */}
      <div className="CTA-btn w-full h-24 hidden lg:grid grid-cols-[1/4_minmax(250px,_1fr)] grid-flow-col scrollbar-hide justify-center  items-center bg-[#D0DDEA] mt-24">
        <div className="placeholder lg:w-64 xl:w-88 2xl:w-[380px] p-4 h-8 "></div>
        {/* <ActiveCompareButton comparedCars={comparedCars} /> */}
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/activecompare");

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      posts,
    },
  };
}

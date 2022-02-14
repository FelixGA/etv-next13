import FilterBlock from "../components/FilterItems/FilterBlock";
import ResultList from "../components/ResultList/ResultList";
import TruncateFilterDesktop from "../components/FilterItems/TruncateFilterDesktop";
import { useStore } from "../components/store";
import StickyPopUpForComparison from "../components/ResultList/StickyPopUpForComparison";
import getContent from "/utils/getContent";
import { MDXRemote } from "next-mdx-remote";
import { useState,useEffect } from  "react";
const components = {
  img: (image) => <Image src={image.src} alt={image.alt} objectFit="contain" />,
  a: (link) => (
    <Link href={link.href}>
      <a>{link.children}</a>
    </Link>
  ),
  h2: (heading) => <h2 className="mb-8 font-black">{heading.children}</h2>,
};

export default function comparePage(props) {
  const [getCars, SetGetCars] = useState([]); 
  useEffect(() => {
    SetGetCars(props.vehicles);
  }, [props.vehicles]);
   
    console.log(getCars)
  // /* ɢᴇᴛ ʀᴇsᴜʟᴛs ᴜᴘᴏɴ ᴄᴀᴛᴇɢᴏʀʏ */
  // const getPritsche = getCars?.filter((item) => item.category=== "Pritsche");
  // const getKipper = getCars?.filter((item) => item.category=== "Kipper");
  // const getKoffer = getCars?.filter((item) => item.category=== "Koffer");
  // const getKasten = getCars?.filter((item) => item.category=== "Kasten");
  // /* ɢᴇᴛ ᴀʟʟ ᴄᴀᴛᴇɢᴏʀɪᴇs ғʀᴏᴍ ᴛʜᴇ ᴅᴀᴛᴀ */
  // const getCategories = [...new Set(getCars?.map((item) => item.categorie))];

  // /* PRICE SORTING */
  // const getCarslowestPrice = getCars
  //   ?.sort((a, b) => parseFloat(a.price) * 1 - parseFloat(b.price) * 1)
  //   .map((item) => item);

  // // const convertPriceToNumber = (price) => {
  // //   return parseFloat(price.replace(/[^0-9.-]+/g, ""));
  // // };

  // const getCarshighestPrice = getCars
  //   ?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  //   .map((item) => item);

  // // get the cheapest auto
  // // const getCheapest = getCarslowestPrice?.slice(0, 1);
  // // get the most expensive auto
  // // const getHighest = getCarshighestPrice?.slice(0, 1);
  // /* cᴀʀs ᴡᴇɪɢʜᴛ ғɪʟᴛᴇʀ */
  // const getCarslightest = getCars
  //   ?.sort((a, b) => b.weight.value - a.weight.value)
  //   .map((item) => item);
  // const getCarsBymaxSpeed = getCars
  //   ?.sort((a, b) => b.maxSpeed.value - a.maxSpeed.value)
  //   .map((item) => item);
  // /* ᴄᴀʀs ʀᴀɴɢᴇ ғɪʟᴛᴇʀ */

  // const getCarsByRange = getCars
  //   ?.sort((a, b) => b.range.value - a.range.value)
  //   .map((item) => item);
  // /* ᴄᴀʀs ᴄʜᴀʀɢɪɴɢ ᴛɪᴍᴇ ғɪʟᴛᴇʀ */
  // const getCarsfastest = getCars
  //   ?.sort((a, b) => a.chargingTime[0].value - b.chargingTime[0].value)
  //   .map((item) => item);

  // const { state, dispatch } = useStore();

  // /* initial value */
  // let sortedCars = getCarslowestPrice;

  // /* ɢᴇᴛ ʀᴇsᴜʟᴛs from sorting */
  // if (state?.activeSortValues === "Höchster Preis") {
  //   sortedCars = getCarshighestPrice;
  // }

  // if (state?.activeSortValues === "Niedrigster Preis") {
  //   sortedCars = getCarslowestPrice;
  // }
  // if (state?.activeSortValues === "Höchste Zuladung") {
  //   sortedCars = getCarslightest;
  // }
  // if (state?.activeSortValues === "Höchste Reichweite") {
  //   sortedCars = getCarsByRange;
  // }
  // if (state?.activeSortValues === "Höchste Vmax") {
  //   sortedCars = getCarsBymaxSpeed;
  // }
  // if (state?.activeSortValues === "Beste Ladenzeit") {
  //   sortedCars = getCarsfastest;
  // }
  console.log(props.vehicles)
  return (
    <>
    {/* <MDXRemote {...props.page.sources.main} components={components} /> */}
      <div className=" xl:mx-32 bg-[bg-blue-extralight] md:bg-white z-90">
       
        <div className="flex ">
          <div className="flex-1 hidden md:block  md:mt-14 md:pr-4 ">
            <TruncateFilterDesktop />
          </div>
          <div className="flex flex-col md:w-3/4 w-full ">
            <FilterBlock />
            {/* <ResultList sortedCars={sortedCars} /> */}
          </div>
        </div>
      </div>
      <StickyPopUpForComparison />
    </>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
const page = pages.find((page) => page.path === "/compare-page");

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

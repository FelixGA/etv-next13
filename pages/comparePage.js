/* gehört zum Transporter-Vergleich auf index.js */

import Head from "../components/core/Head";
import ActiveFilterBlock from "../components/FilterItems/ActiveFilterBlock";
import ResultList from "../components/ResultList/ResultList";
import { useStore } from "../components/store";
import StickyPopUpForComparison from "../components/ResultList/StickyPopUpForComparison";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import FiltersMobile from "../components/FilterItems/MobileFIlters/FiltersMobile";
import FiltersDesktop from "../components/FilterItems/DesktopItems/FiltersDesktop";

export default function comparePage(props) {
  const [sortedCars, setSortedCars] = useState([]);
  const [getBrands, setGetBrands] = useState([]);
  const [shownCars, setShownCars] = useState([]);
  /* .find(
    (item) => vehicle?.relatedReviews == item.slug
  ) */
  const ohneTropos = props.vehicles.filter(ausgabe => !ausgabe.title.startsWith('Tropos'));
  // console.log(ohneTropos);
  // console.log(props.vehicles);

  console.log(sortedCars);
  // const displayCarsLength = getdisplayedCars.length;
  // console.log(displayCarsLength);

  const [getCarsReviews, setGetCarsReviews] = useState([]);
  const { state, dispatch } = useStore();
  useEffect(() => {
    // setSortedCars(props.vehicles);
    setSortedCars(ohneTropos);
    setGetBrands(props.brands);
    setGetCarsReviews(props.carsreviews);
    /* PRICE SORTING */
    const getCarslowestPrice = ohneTropos
      ?.sort((a, b) => parseFloat(a.price) * 1 - parseFloat(b.price) * 1)
      .map((item) => item);

    const getCarshighestPrice = ohneTropos
      ?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      .map((item) => item);
    //
    // alphabetical sorting
    const getCarsAlphabetical = ohneTropos
      ?.sort(function (a, b) {
        return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
      })
      .map((item) => item);
    // /* cᴀʀs ᴡᴇɪɢʜᴛ ғɪʟᴛᴇʀ */
    const getCarslightest = ohneTropos
      ?.sort((a, b) => b.loadingWeight.value - a.loadingWeight.value)
      .map((item) => item);
    const getCarsBymaxSpeed = ohneTropos
      ?.sort((a, b) => b.maxSpeed.value - a.maxSpeed.value)
      .map((item) => item);
    // /* ᴄᴀʀs ʀᴀɴɢᴇ ғɪʟᴛᴇʀ */

    const getCarsByRange = ohneTropos
      ?.sort((a, b) => b.rangeLithium.value - a.rangeLithium.value)
      .map((item) => item);

    // /* ᴄᴀʀs ᴄʜᴀʀɢɪɴɢ ᴛɪᴍᴇ ғɪʟᴛᴇʀ */
    const getCarsfastest = ohneTropos
      ?.sort(
        (a, b) => a.chargingTimeLithium.value - b.chargingTimeLithium.value
      )
      .map((item) => item);

    /* initial value */
    setSortedCars(getCarsAlphabetical);
    if (state?.activeSortValues[0]?.sortType === "alphabetical") {
      setSortedCars(getCarsAlphabetical);
    }
    /* ɢᴇᴛ ʀᴇsᴜʟᴛs from sorting */
    if (state?.activeSortValues[0]?.sortType === "lowest") {
      setSortedCars(getCarslowestPrice);
    }
    if (state?.activeSortValues[0]?.sortType === "highest") {
      setSortedCars(getCarshighestPrice);
    }

    if (state?.activeSortValues[0]?.sortType === "highestWeight") {
      setSortedCars(getCarslightest);
    }
    if (state?.activeSortValues[0]?.sortType == "highestRange") {
      setSortedCars(getCarsByRange);
    }
    if (state?.activeSortValues[0]?.sortType === "highestVmax") {
      setSortedCars(getCarsBymaxSpeed);
    }
    if (state?.activeSortValues[0]?.sortType === "chargingTimeLithium") {
      setSortedCars(getCarsfastest);
    }
  }, [props.vehicles, state?.activeSortValues]);
  return (
    <div className="relative">
      <Head page={props.page} />
      <div> </div>
      <div className="grid grid-cols-1 sm:grid-cols-[35%_minmax(65%,_1fr)] lg:grid-cols-[30%_minmax(70%,_1fr)] relative ">
        <div className="hidden mt-24 md:block">
          <FiltersDesktop getBrands={getBrands} />
        </div>
        <div className="flex md:hidden ">
          <FiltersMobile getBrands={getBrands} />
        </div>
        <div className="heading+sorting+content mt-10 md:mt-20 ">
          <div className="">
            <ActiveFilterBlock 
              shownCars={shownCars}
            />
          </div>
          <div className="mb-10 xl:pr-2 2xl:pr-40">
            <ResultList
              sortedCars={sortedCars}
              getCarsReviews={getCarsReviews}
              shownCarsLength={setShownCars}
            />
          </div>
        </div>
        <div className="col-span-full ">
          <StickyPopUpForComparison />
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);
  let brands = await getContent("brands", context.locale);
  const page = pages.find((page) => page.path === "/comparePage");

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      brands,
      vehicles,
      page,
      blogs,
      carsreviews,
    },
  };
}

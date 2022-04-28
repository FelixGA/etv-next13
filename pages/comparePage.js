import Head from "../components/core/Head";
import ActiveFilterBlock from "../components/FilterItems/ActiveFilterBlock";
import ResultList from "../components/ResultList/ResultList";
import FiltersDesktop from "../components/FilterItems/FiltersDesktop";
import { useStore } from "../components/store";
import StickyPopUpForComparison from "../components/ResultList/StickyPopUpForComparison";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import FiltersMobile from "../components/FilterItems/FiltersMobile";

export default function comparePage(props) {
  const [sortedCars, SetSortedCars] = useState([]);

  const { state, dispatch } = useStore();
  useEffect(() => {
    SetSortedCars(props.vehicles);

    /* ɢᴇᴛ ʀᴇsᴜʟᴛs ᴜᴘᴏɴ ᴄᴀᴛᴇɢᴏʀʏ */
    // const getPritsche = props.vehicles?.filter(
    //   (item) => item.category === "Pritsche"
    // );
    // const getKipper = props.vehicles?.filter(
    //   (item) => item.category === "Kipper"
    // );
    // const getKoffer = props.vehicles?.filter(
    //   (item) => item.category === "Koffer"
    // );
    // const getKasten = props.vehicles?.filter(
    //   (item) => item.category === "Kasten"
    // );

    /* PRICE SORTING */
    const getCarslowestPrice = props.vehicles
      ?.sort((a, b) => parseFloat(a.price) * 1 - parseFloat(b.price) * 1)
      .map((item) => item);

    const getCarshighestPrice = props.vehicles
      ?.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      .map((item) => item);
    //
    // /* cᴀʀs ᴡᴇɪɢʜᴛ ғɪʟᴛᴇʀ */
    const getCarslightest = props.vehicles
      ?.sort((a, b) => b.loadingWeight.value - a.loadingWeight.value)
      .map((item) => item);
    const getCarsBymaxSpeed = props.vehicles
      ?.sort((a, b) => b.maxSpeed.value - a.maxSpeed.value)
      .map((item) => item);
    // /* ᴄᴀʀs ʀᴀɴɢᴇ ғɪʟᴛᴇʀ */

    const getCarsByRange = props.vehicles
      ?.sort((a, b) => b.rangeLithium.value - a.rangeLithium.value)
      .map((item) => item);

    // /* ᴄᴀʀs ᴄʜᴀʀɢɪɴɢ ᴛɪᴍᴇ ғɪʟᴛᴇʀ */
    const getCarsfastest = props.vehicles
      ?.sort(
        (a, b) => a.chargingTimeLithium.value - b.chargingTimeLithium.value
      )
      .map((item) => item);

    /* initial value */
    SetSortedCars(getCarslowestPrice);

    /* ɢᴇᴛ ʀᴇsᴜʟᴛs from sorting */
    if (state?.activeSortValues[0]?.sortType === "lowest") {
      SetSortedCars(getCarslowestPrice);
    }
    if (state?.activeSortValues[0]?.sortType === "highest") {
      SetSortedCars(getCarshighestPrice);
    }

    if (state?.activeSortValues[0]?.sortType === "highestWeight") {
      SetSortedCars(getCarslightest);
    }
    if (state?.activeSortValues[0]?.sortType == "highestRange") {
      SetSortedCars(getCarsByRange);
    }
    if (state?.activeSortValues[0]?.sortType === "highestVmax") {
      SetSortedCars(getCarsBymaxSpeed);
    }
    if (state?.activeSortValues[0]?.sortType === "chargingTimeLithium") {
      SetSortedCars(getCarsfastest);
    }
  }, [props.vehicles, state.activeSortValues]);

  return (
    <div className="relative">
      <Head page={props.page} />

      <div className="grid grid-cols-1 md:grid-cols-[30%_minmax(70%,_1fr)] bg-white relative">
        <div className="hidden mt-24 bg-white md:block">
          <FiltersDesktop />
        </div>
        <div className="flex md:hidden ">
          <FiltersMobile />
        </div>
        <div className="heading+sorting+content mt-10 md:mt-20">
          <div className="">
            <ActiveFilterBlock />
          </div>
          <div className="mb-10 xl:pr-2 2xl:pr-40">
            <ResultList sortedCars={sortedCars} />
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

  const page = pages.find((page) => page.path === "/comparePage");

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      page,
      blogs,
      carsreviews,
    },
  };
}

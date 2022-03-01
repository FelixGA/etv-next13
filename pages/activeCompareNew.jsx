import Link from "next/link";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import getContent from "/utils/getContent";
import ActiveCompareKeys from "../components/ActiveCompare/ActiveCompareKeys";
import ActiveCompareItem from "../components/ActiveCompare/ActiveCompareItem";
import ActiveCompareEquipmentKeys from "../components/ActiveCompare/ActiveCompareEquipmentKeys";
import ActiveCompareEquipmentValues from "../components/ActiveCompare/ActiveCompareEquipmentValues";
import ActiveCompareMaßeValues from "../components/ActiveCompare/ActiveCompareMaßeValues";
import ActiveCompareMaßeKeys from "../components/ActiveCompare/ActiveCompareMaßeKeys";

export default function activeCompareNew(props) {
  const { state, dispatch } = useStore();
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getKeys, SetGetKeys] = useState([]);
  let comparedCars = state?.autoForComparisons?.map((el) => el.auto);
  /*  console.log(comparedCars); */
  useEffect(() => {
    SetGetCars(props.vehicles);
    let arrkeys = [
      /* grundlagen - basics */
      "Klasse",
      getCars[0]?.range230V.key,
      getCars[0]?.rangeLithium.key,
      getCars[0]?.maxSpeed.key,
      getCars[0]?.chargingTime230V.key,
      getCars[0]?.chargingTimeLithium.key,
      getCars[0]?.chargingTimeFast.key,
      getCars[0]?.power.key,
      getCars[0]?.loadingWeight.key,
      getCars[0]?.curbweight.key,
      "Gesamtgewicht",
      /* fahrzeug masse */

      getCars[0]?.loadingHeight.key,
      getCars[0]?.loadingHeight.height,
      getCars[0]?.loadingHeight.width,
      getCars[0]?.loadingHeight.length,
      getCars[0]?.loadingVolume.key,
      getCars[0]?.loadingVolume.height,
      getCars[0]?.loadingVolume.width,
      getCars[0]?.loadingVolume.length,
      "Ladefläche",
      "Ladevolumen",
      /* details */
      getCars[0]?.batteryCapacityBlei.key,
      getCars[0]?.batteryCapacityLithium.key,
      getCars[0]?.batteryGuarantee.key,
      getCars[0]?.batteryIncluded.key,
      getCars[0]?.consumption.key,
      getCars[0]?.availability.key,
      getCars[0]?.guarantee.key,
      getCars[0]?.seats.key,
      getCars[0]?.subsidies.key,
    ];
    SetGetKeys(arrkeys);
  }, []);

  return (
    <div className="main-wrapper ">
      {/* HEADING */}
      <div className="pt-8 pb-6 px-4">
        <h1 className="font-bold text-[#2C3F53] text-2xl lg:text-4xl">
          Ihre Auswahl im Detailvergleich
        </h1>
      </div>
      {/* BACK BUTTON */}
      <div className="lg:w-64 xl:w-88 2xl:w-[380px] pl-4 block lg:hidden ">
        <button className="mb-12 text-sm bg-grey-lighter w-52 h-10 rounded-md text-blue-darker ">
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              « zurück zur Ergebnisliste
            </a>
          </Link>
        </button>
      </div>
      {/* KEYS AND ITEMS FOR COMPARE */}
      <div className="grid grid-cols-[auto-fill,_minmax(300px,_1fr)] grid-flow-col scrollbar-hide overflow-x-scroll ">
        <ActiveCompareKeys getKeys={getKeys} comparedCars={comparedCars} />

        <ActiveCompareItem comparedCars={comparedCars} />
      </div>
      <div className="flex flex-1 justify-evenly py-8 ">
        <div className="cursor-pointer border w-32 sm:w-48 h-10 flex justify-center bg-blue-light text-white shrink-0 rounded-md">
          <button className="">Ausstattung</button>
        </div>
        <div className="cursor-pointer border w-32 sm:w-48 h-10 flex justify-center bg-blue-light text-white shrink-0 rounded-md">
          <button>Masse</button>
        </div>
      </div>
      <div className="grid grid-cols-[auto-fill,_minmax(250px,_1fr)] grid-flow-col scrollbar-hide overflow-x-scroll ">
        <div className="hidden">
          <ActiveCompareEquipmentKeys
            getKeys={getKeys}
            comparedCars={comparedCars}
          />
        </div>
        <div className="">
          <ActiveCompareMaßeKeys
            getKeys={getKeys}
            comparedCars={comparedCars}
          />
        </div>
        <div className="hidden">
          <ActiveCompareEquipmentValues comparedCars={comparedCars} />
        </div>
        <div className="flex">
          <ActiveCompareMaßeValues comparedCars={comparedCars} />
        </div>
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

import Link from "next/link";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import getContent from "/utils/getContent";
import ActiveCompareImages from "../components/ActiveCompare/ActiveCompareImages";
import ActiveCompareEntries from "../components/ActiveCompare/ActiveCompareEntries";

const allKeys = [
  // "typeClass",
  "range230V",
  "rangeLithium",
  "maxSpeed",
  "chargingTime230V",
  "chargingTimeLithium",
  "chargingTimeFast",
  "power",
  "loadingWeight",
  "curbweight",
  "loadingVolume",
  "loadingHeight",
  "batteryCapacityBlei",
  "batteryCapacityLithium",
  "batteryGuarantee",
  "batteryIncluded",
  "consumption",
  "availability",
  "guarantee",
  "seats",
  "subsidies",
];

export default function activeCompare(props) {
  const { state, dispatch } = useStore();
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getKeys, SetGetKeys] = useState([]);
  const [toggle, setToggle] = useState(true);

  let comparedCars = state?.autoForComparisons?.map((el) => el.auto);
  // console.log(comparedCars);
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
    <div>test</div>
    // <div className="main-wrapper 2xl:px-40">
    //   {/* HEADING */}
    //   <div className="pt-8 pb-6 px-4">
    //     <h1 className="font-bold text-blue-extra text-2xl lg:text-4xl">
    //       Ihre Auswahl im Detailvergleich
    //     </h1>
    //   </div>
    //   {/* BACK BUTTON */}
    //   <div
    //     className={comparedCars.length > 1 ? "pl-4 block lg:hidden" : "hidden"}
    //   >
    //     <button className="mb-12 text-sm w-52 h-10 rounded-md text-blue-darker bg-grey-lighter">
    //       <Link href="/comparePage">
    //         <a className="visited:text-blue-darker">
    //           « zurück zur Ergebnisliste
    //         </a>
    //       </Link>
    //     </button>
    //   </div>
    //   {/* KEYS AND ITEMS FOR COMPARE */}
    //   <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
    //     <ActiveCompareImages comparedCars={comparedCars} />
    //   </div>
    //   <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)] overflow-x-scroll scrollbar-hide">
    //     <ActiveCompareEntries keys={allKeys} comparedCars={comparedCars} />
    //   </div>
    // </div>
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

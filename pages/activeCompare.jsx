import Link from "next/link";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import getContent from "/utils/getContent";
import ActiveCompareImages from "../components/ActiveCompare/ActiveCompareImages";
import ActiveCompareEntries from "../components/ActiveCompare/ActiveCompareEntries";
import ActiveCompareSizes from "../components/ActiveCompare/ActiveCompareSizes";
import ActiveCompareDetails from "../components/ActiveCompare/ActiveCompareDetails";

const allKeys = [
  "range230V",
  "rangeLithium",
  "maxSpeed",
  "chargingTime230V",
  "chargingTimeLithium",
  "chargingTimeFast",
  "power",
  "loadingWeight",
  "curbweight",
];
const carSizes = [
  "loadingVolume",
  "loadingArea",
  "loadingVolumeTotal",
  "carSizes",
];

const carDetails = [
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
  console.log(comparedCars);
  let typeClass = { key: getCars[0]?.typeClass };

  return (
    <div className="main-wrapper 2xl:px-40">
      {/* HEADING */}
      <div className="pt-8 pb-6 px-4">
        <h1 className="font-bold text-blue-extra text-2xl lg:text-4xl">
          Ihre Auswahl im Detailvergleich
        </h1>
      </div>
      {/* BACK BUTTON */}
      <div
        className={comparedCars.length > 1 ? "pl-4 block lg:hidden" : "hidden"}
      >
        <button className="mb-8 text-sm w-52 h-10 rounded-md text-blue-darker bg-grey-lighter">
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              « zurück zur Ergebnisliste
            </a>
          </Link>
        </button>
      </div>
      {/* KEYS AND ITEMS FOR COMPARE */}
      <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
        <div className="w-full">
          <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
            <ActiveCompareImages comparedCars={comparedCars} />
          </div>
          <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)] overflow-x-scroll scrollbar-hide">
            <ActiveCompareEntries keys={allKeys} comparedCars={comparedCars} />
          </div>
          <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)] overflow-x-scroll scrollbar-hide">
            <ActiveCompareSizes keys={carSizes} comparedCars={comparedCars} />
          </div>
          <div className="grid grid-flow-col auto-cols-[minmax(160px,_1fr)] overflow-x-scroll scrollbar-hide">
            <ActiveCompareDetails
              keys={carDetails}
              comparedCars={comparedCars}
            />
          </div>
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

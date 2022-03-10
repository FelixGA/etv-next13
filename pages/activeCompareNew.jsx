import Link from "next/link";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import getContent from "/utils/getContent";
import ActiveCompareKeys from "../components/ActiveCompare/ActiveCompareKeys";
import ActiveCompareItem from "../components/ActiveCompare/ActiveCompareItem";
import ActiveCompareEquipmentKeysValues from "../components/ActiveCompare/ActiveCompareEquipmentKeysValues";
import ActiveCompareMaßeKeysValues from "../components/ActiveCompare/ActiveCompareMaßeKeysValues";
import ActiveCompareImages from "../components/ActiveCompare/ActiveCompareImages";
import ActiveCompareBasics from "../components/ActiveCompare/ActiveCompareBasics";

export default function activeCompareNew(props) {
  const { state, dispatch } = useStore();
  const [getCars, SetGetCars] = useState(props.vehicles);
  const [getKeys, SetGetKeys] = useState([]);
  const [toggle, setToggle] = useState(true);

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
        <button className="mb-12 text-sm w-52 h-10 rounded-md text-blue-darker bg-grey-lighter">
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              « zurück zur Ergebnisliste
            </a>
          </Link>
        </button>
      </div>
      {/* KEYS AND ITEMS FOR COMPARE */}
      <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
        {/* <ActiveCompareKeys getKeys={getKeys} comparedCars={comparedCars} /> */}

        <ActiveCompareImages comparedCars={comparedCars} />
      </div>
      <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
        <ActiveCompareBasics getKeys={getKeys} comparedCars={comparedCars} />
      </div>
      {/* <div className="min-w-[200px] flex flex-1">
        </div>
        <div className="min-w-[600px] flex flex-1">
          <ActiveCompareItem comparedCars={comparedCars} />
        </div> */}

      <div className="flex flex-1 justify-center py-8 ">
        <div
          onClick={() => setToggle(true)}
          className="text-lg mr-1 sm:mr-4 cursor-pointer border w-32 sm:w-48 h-12 flex justify-center bg-blue-dark hover:bg-blue-light text-white shrink-0 rounded-md"
        >
          <button>Ausstattung</button>
        </div>
        <div
          onClick={() => setToggle(false)}
          className="text-lg ml-1 sm:ml-4 cursor-pointer border w-32 sm:w-48 h-12 flex justify-center bg-blue-dark hover:bg-blue-light text-white shrink-0 rounded-md"
        >
          <button>Masse</button>
        </div>
      </div>
      <div className="grid grid-flow-col overflow-x-scroll scrollbar-hide">
        <div className="min-w-[300px] flex">
          {toggle ? (
            <ActiveCompareEquipmentKeysValues
              getKeys={getKeys}
              comparedCars={comparedCars}
            />
          ) : (
            <ActiveCompareMaßeKeysValues
              getKeys={getKeys}
              comparedCars={comparedCars}
            />
          )}
        </div>
      </div>
      <div className="grid gap-4 grid-flow-col  overflow-x-scroll">
        <div className="min-w-[300px]">dssfd</div>
        <div className="min-w-[300px]">
          fsdfsdffffffff ffffff ffdfsss ssssss sssss ssssssss fsdddddd dddddd
          fsdfffffffffffff fsdffsdfsf f
        </div>
        <div className="min-w-[300px]">
          fsdddd ddddddddddddddd ddddddddddddddcxy ddddddddddddddd ddddddddddddd
          dddddddddddddddd
        </div>
        <div className="min-w-[300px]">dsffffffffffffff fffffffffffff ffff</div>
      </div>
      {/* <div className="grid gap-4 grid-flow-col  overflow-x-scroll">
        <div className="min-w-[300px]">dssfd</div>
        <div className="min-w-[300px]">
          fsdfsdffffffff ffffff ffdfsss ssssss sssss ssssssss fsdddddd dddddd
          fsdfffffffffffff fsdffsdfsf f
        </div>
        <div className="min-w-[300px]">
          fsdddd ddddddddddddddd ddddddddddddddcxy dddddddddtdrrrrrrr
          trdtttttttt dddddd ddddddddddddd dddddddddddddddd
        </div>
        <div className="min-w-[300px]">
          dsffffffffffftrtdrtdrfff fffffffffffff ffff
        </div>
      </div> */}
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

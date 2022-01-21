import { gql, useQuery } from "@apollo/client";
import { useStore } from "../components/store";
import Image from "next/image";
import ActiveCompareCard from "../components/ActiveCompare/ActiveCompareCard";

function activecompare() {
  const { state, dispatch } = useStore();
  let comparedCars = state?.autoForComparisons?.map((el) => el.auto);
  console.log(comparedCars);
  return (
    <div className="wrapper w-full  ">
      <div className="">
        <h1 className="font-bold  text-[#2C3F53] text-2xl xl:text-3xl text-left pl-4 pt-10">
          Ihre Auswahl im Detailvergleich
        </h1>
      </div>
      <div className="p-4 rounded-lg">
        <button
          type="button"
          className="bg-[#E7EDF3] w-44 h-8 text-xs font-bold text-[#1F1E80] cursor-pointer"
        >
          « zurück zur Ergebnisliste
        </button>
      </div>
      {/* LEFT SIDE BAR + ACTIVE COMPARE SECTION (UP TO 3 AUTOS) */}
      <div className="grid grid-cols-auto-fit grid-flow-col  overflow-x-scroll scrollbar-hide w-[100vw] xl:w-[90vw] xl:mx-auto">
        {/* LEFT SIDE BAR */}
        <div className="flex flex-col shadow-2xl border-r w-full relative ">
          {/* FIRST SECTION */}
          <div className="w-[105%] h-10 bg-[#ffffff] z-20 absolute "></div>
          <div className="w-full h-[152px] sm:h-[174px] md:h-[206px] lg:h-[227px] xl:h-[270px] bg-[#F2F5F8] z-10 "></div>
          <div className="flex items-center w-full h-10 p-4 pl-5 xl:pt-[77px]">
            <h2 className="text-sm xl:text-md font-bold">Grundlagen</h2>
          </div>
          <div className="flex items-center h-10 p-4 pl-5  bg-[#F2F5F8]">
            <h3 className="text-sm font-medium ">Reichweite</h3>
          </div>
          <div className="flex items-center h-10 p-4 pl-5 ">
            <h3 className="text-sm font-medium ">Zuladung</h3>
          </div>
          <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8]">
            <h3 className="text-sm font-medium ">Ladezeit</h3>
          </div>
          <div className="flex items-center h-10 p-4 pl-5 ">
            <h3 className="text-sm font-medium ">Höchst- geschwindigkeit</h3>
          </div>
          <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8]">
            <h3 className="text-sm font-medium ">Nutzlastpreis</h3>
          </div>
          <div className="flex items-center h-10 p-4 pl-5 ">
            <h3 className="text-sm font-medium ">Kaufpreis</h3>
          </div>
          {/* SECOND SECTION */}
          <div className="md:pt-16">
            <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8] lg:bg-white">
              <h2 className="text-sm xl:text-md font-bold">Ausstattung</h2>
            </div>
            <div className="flex items-center h-10 p-4 pl-5 bg-white lg:bg-[#F2F5F8]">
              <h3 className="text-sm font-medium ">Elektrische Fensterheber</h3>
            </div>
            <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8] lg:bg-white">
              <h3 className="text-sm font-medium ">ABS</h3>
            </div>
            <div className="flex items-center h-10 p-4 pl-5 bg-white lg:bg-[#F2F5F8]">
              <h3 className="text-sm font-medium ">Airbags</h3>
            </div>
            <div className="flex items-center h-10 p-4 pl-5 bg-[#F2F5F8] lg:bg-white">
              <h3 className="text-sm font-medium ">Klimaanlage</h3>
              <div></div>
            </div>

            <div className="flex items-center h-10 p-4 pl-5 bg-white lg:bg-[#F2F5F8]">
              <h3 className="text-xs font-medium ">Goldene Wasserhähne</h3>
            </div>
          </div>
          <div className="bg-[#D0DDEA]  w-full h-24 xl:mt-20"></div>
        </div>
        {/* ACTIVE COMPARE SECTION (UP TO 3 AUTOS) */}

        <div className="  w-full   pt-12">
          <ActiveCompareCard comparedCars={comparedCars} />
        </div>
      </div>
    </div>
  );
}

export default activecompare;

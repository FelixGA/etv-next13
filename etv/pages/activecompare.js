import { gql, useQuery } from "@apollo/client";
import { useStore } from "../components/store";
import Image from "next/image";
import ActiveCompareCard from "../components/ActiveCompare/ActiveCompareCard";

function activecompare() {
  return (
    <div className="container">
      <div className="">
        <h1 className="font-bold  text-[#2C3F53] text-2xl text-left pl-4 pt-10">
          Ihre Auswahl im Detailvergleich
        </h1>
      </div>
      <div className="p-4 rounded-lg">
        <button
          type="button"
          className="bg-[#E7EDF3] w-44 h-8 text-xs text-[#1F1E80] "
        >
          « zurück zur Ergebnisliste
        </button>
      </div>
      {/* LEFT SIDE BAR + ACTIVE COMPARE SECTION (UP TO 3 AUTOS) */}
      <div className="grid grid-cols-auto-fit grid-flow-col  overflow-x-scroll scrollbar-hide w-[100vw] ">
        {/* LEFT SIDE BAR */}
        <div className="flex flex-col shadow-xl w-full pt-[182px]  lg:pt-[235px] xl:pt-[299px] ">
          {/* FIRST SECTION */}
          <div className="flex items-center w-full h-10 p-4  ">
            <h2 className="text-sm font-bold">Grundlagen</h2>
          </div>
          <div className="flex items-center h-10 p-4 bg-[#F2F5F8]">
            <h3 className="text-xs font-medium ">Reichweite</h3>
          </div>
          <div className="flex items-center h-10 p-4 ">
            <h3 className="text-xs font-medium ">Zuladung</h3>
          </div>
          <div className="flex items-center h-10 p-4 bg-[#F2F5F8]">
            <h3 className="text-xs font-medium ">Ladezeit</h3>
          </div>
          <div className="flex items-center h-10 p-4 ">
            <h3 className="text-xs font-medium ">Höchst- geschwindigkeit</h3>
          </div>
          <div className="flex items-center h-10 p-4 bg-[#F2F5F8]">
            <h3 className="text-xs font-medium ">Nutzlastpreis</h3>
          </div>
          <div className="flex items-center h-10 p-4 ">
            <h3 className="text-xs font-medium ">Kaufpreis</h3>
          </div>
          {/* SECOND SECTION */}
          <div className="md:pt-16">
            <div className="flex items-center h-10 p-4 ">
              <h2 className="text-sm font-bold">Ausstattung</h2>
            </div>
            <div className="flex items-center h-10 p-4 bg-[#F2F5F8]">
              <h3 className="text-xs font-medium ">Elektrische Fensterheber</h3>
            </div>
            <div className="flex items-center h-10 p-4 ">
              <h3 className="text-xs font-medium ">ABS</h3>
            </div>
            <div className="flex items-center h-10 p-4 bg-[#F2F5F8]">
              <h3 className="text-xs font-medium ">Airbags</h3>
            </div>
            <div className="flex items-center h-10 p-4 ">
              <h3 className="text-xs font-medium ">Klimaanlage</h3>
            </div>

            <div className="flex items-center h-10 p-4 bg-[#F2F5F8]">
              <h3 className="text-xs font-medium ">Goldene Wasserhähne</h3>
            </div>
          </div>
          <div className="bg-[#F2F5F8]  w-full h-24 mt-20"></div>
        </div>
        {/* ACTIVE COMPARE SECTION (UP TO 3 AUTOS) */}

        <div className="  w-full   pt-12">
          <ActiveCompareCard />
        </div>
        <div className="  w-full   pt-12">
          <ActiveCompareCard />
        </div>
        <div className="  w-full   pt-12">
          <ActiveCompareCard />
        </div>
      </div>
    </div>
  );
}

export default activecompare;

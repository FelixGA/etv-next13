import Image from "next/image";
import { useState } from "react";

import filterImage from "../../public/images/filter-icon.png";
import TruncateFilterMobile from "./TruncateFilterMobile";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useStore } from "../store";

import SortDesktop from "./SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";

function FilterBlock() {
  const { state, dispatch } = useStore();
  const [truncate, setTruncate] = useState(false);
  const [clicked, SetClicked] = useState(true);
  return (
    <div className=" w-full min-w-fit relative">
      <div className="bg-[#Fff]  shadow-dropdown md:hidden ">
        <div className="h-10 shadow-dropdown flex flex-row justify-between align-middle ">
          <div
            className="w-full  flex flex-row "
            onClick={() => setTruncate(!truncate)}
          >
            <div
              className="w-3.5 my-auto ml-6  
          "
            >
              <Image
                src={filterImage}
                alt="filter icon"
                objectFit="cover"
                width={8}
                height={8}
                layout="responsive"
              />
            </div>
            <span className="ml-2 font-black  my-auto text-sm text-blue-darker">
              Alle Filter anzeigen
            </span>
          </div>

          <div
            className="w-4 mr-6 my-auto "
            onClick={() => setTruncate(!truncate)}
          >
            <MdKeyboardArrowDown size={28} />
          </div>
        </div>
        <div className="">
          <div
            className={
              truncate ? "font-bold	 my-auto text-sm text-blue-darker" : "hidden"
            }
          >
            <div>
              <TruncateFilterMobile />
            </div>
          </div>
        </div>
      </div>
      {/* ACTIVE FILTERS */}
      <div className="flex flex-grow justify-between md:pt-16">
        <ActiveFilterEntry />
      </div>

      {/* HEADING + SORTING */}
      <div className="flex flex-row flex-1 justify-between">
        <div className="mt-8 pb-2 w-fit ">
          <h1 className="pl-2 text-2xl text-black-dark ">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="hidden md:flex flex-row justify-end items-center mt-8 pb-2 mr-2 cursor-pointer"
          onClick={() => SetClicked(!clicked)}
        >
          <h4 className="pr-4 ">Sortieren nach </h4>

          <div className="w-4 h-4 relative right-4 mb-2">
            <MdKeyboardArrowDown size={28} />
          </div>
        </div>
        {/* SORT DESKTOP */}
        <div className={clicked ? "hidden" : "flex  absolute top-40 right-0 "}>
          <SortDesktop />
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;

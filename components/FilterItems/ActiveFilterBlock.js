import Image from "next/image";
import { useState } from "react";
import filterImage from "../../public/images/filter-icon.png";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import SortDesktop from "../SortItems/SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";
import FiltersMobile from "./FiltersMobile";

function ActiveFilterBlock() {
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(true);


  return (
    <div className=" w-full min-w-fit relative">
     
      {/* ACTIVE FILTERS */}
      <div className="flex flex-grow justify-between md:pt-16 bg-green-500 flex-1">
        <ActiveFilterEntry />
      </div>

      {/* HEADING + SORTING */}
      <div className="flex flex-row flex-1 justify-between relative ">
        <div className="mt-10 relative bottom-2 md:bottom-10 2xl:bottom-2  w-full ">
          <h1 className="pl-3 text-2xl text-black-dark bg-red-500">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="hidden md:flex flex-row items-start mt-10 absolute right-2 w-fit   cursor-pointer "
          onClick={() => {
            setClicked(!clicked);
            
          }}
        >
          <h4 className=" ">{`Sortieren nach: ${state?.activeSortValues}`} </h4>

          <div
            className={
              clicked
                ? "flex items-center justify-center w-6 h-4 mt-1  transition transform rotate-0 origin-center	"
                : "flex items-center justify-center w-6 h-4  mt-1 transition transform rotate-180 origin-center	 "
            }
          >
            <MdKeyboardArrowDown size={28} />
          </div>
        </div>
        {/* SORT DESKTOP */}
        <div className={clicked ? "hidden" : "flex  absolute top-16 right-4 "}>
          <SortDesktop />
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterBlock;
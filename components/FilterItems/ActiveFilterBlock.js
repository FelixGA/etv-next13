import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import SortDesktop from "../SortItems/SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";

function ActiveFilterBlock() {
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(true);

  return (
    <div className="w-full relative">
      {/* ACTIVE FILTERS */}
      <div className="flex flex-grow justify-between h-[144px] flex-1 bg-red-500">
        <ActiveFilterEntry />
      </div>

      {/* HEADING + SORTING */}
      <div className="flex flex-row flex-1 justify-between relative">
        <div className=" relative   w-full ">
          <h1 className="pl-3 py-8 text-2xl md:text-3xl text-blue-extra ">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="hidden md:flex flex-row  md:mt-20 absolute right-2 w-fit cursor-pointer bg-yellow-500"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <h4 className="sort-heading ">
            {`Sortieren nach: ${state?.activeSortValues}`}{" "}
          </h4>

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

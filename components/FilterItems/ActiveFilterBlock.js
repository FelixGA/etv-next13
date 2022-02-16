import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import SortDesktop from "../SortItems/SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";

function ActiveFilterBlock() {
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(true);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full relative">
      {/* ACTIVE FILTERS */}
      <div className={showAll? "flex flex-grow justify-between h-[141px] flex-1 ": "hidden"}>
        <ActiveFilterEntry showAll={showAll} setShowAll={setShowAll}/>
      </div>

      {/* HEADING + SORTING */}
      <div className="flex flex-row flex-1 justify-between relative">
        <div className={showAll?"w-full ":"flex items-end flex-1 h-32 bg-red-500"}>
          <h1 className="pl-3  text-2xl md:text-3xl text-blue-extra ">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="hidden md:flex flex-row  md:mt-24 absolute right-2 w-fit cursor-pointer "
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
        <div className={clicked ? "hidden" : "flex  absolute mt-28 right-0 "}>
          <SortDesktop />
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterBlock;

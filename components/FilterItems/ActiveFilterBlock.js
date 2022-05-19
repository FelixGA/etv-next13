import { useState, useEffect } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import SortDesktop from "../SortItems/SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";

function ActiveFilterBlock({ getContent }) {
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(true);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="relative w-full">
      {/* ACTIVE FILTERS */}
      <div
        className={
          showAll ? "flex flex-grow justify-between flex-1 " : "hidden"
        }
      >
        <ActiveFilterEntry showAll={showAll} setShowAll={setShowAll} />
      </div>

      {/* HEADING + SORTING */}
      <div className="flex justify-between 2xl:pr-40">
        <div className={showAll ? "w-full " : "flex items-center flex-1 "}>
          <h1 className="pb-4 pl-4 mt-8 text-2xl md:text-3xl text-blue-extra">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="items-end justify-between hidden cursor-pointer md:flex right-2 "
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <div className="relative flex items-center justify-center xl:pr-0">
            <h4 className="sort-heading w-fit">
              {` Sortieren nach:
               ${state?.activeSortValues[0]?.sortCategory}`}
            </h4>
            {/* SORT DESKTOP */}
            <div
              className={clicked ? "hidden" : "flex absolute top-4 right-0 "}
            >
              <SortDesktop />
            </div>
            <div
              className={
                clicked
                  ? "flex items-center justify-center h-4 transition transform rotate-0 origin-center	"
                  : "flex items-center justify-center h-4 transition transform rotate-180 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterBlock;

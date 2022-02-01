import Image from "next/image";
import { useState } from "react";
import filterImage from "../../public/images/filter-icon.png";
import TruncateFilterMobile from "./TruncateFilterMobile";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useStore } from "../store";
import SortDesktop from "../SortItems/SortDesktop";
import ActiveFilterEntry from "./ActiveFilterEntry";

function FilterBlock() {
  const { state, dispatch } = useStore();
  const [truncate, setTruncate] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [rotateIt, setRotateIt] = useState(false);

  return (
    <div className=" w-full min-w-fit relative">
      <div className="bg-[#Fff]  shadow-dropdown md:hidden  w-full z-40">
        <div
          className={
            truncate
              ? "h-10 shadow-dropdown flex flex-row justify-between align-middle border-b"
              : "h-10 shadow-dropdown flex flex-row justify-between align-middle "
          }
          onClick={() => {
            setTruncate(!truncate);
            setRotateIt(!rotateIt);
          }}
        >
          <div className="w-full  flex flex-row">
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
                unoptimized={true}
              />
            </div>
            <span className="ml-2 font-black   my-auto text-sm text-blue-darker">
              Alle Filter anzeigen
            </span>
          </div>

          <div
            className={
              rotateIt
                ? "flex items-center w-8 mr-5 my-auto transition transform rotate-180 origin-center	"
                : "flex items-center w-8 mr-5 my-auto transition transform rotate-0 origin-center	 "
            }
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
            <div className="relative ">
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
      <div className="flex flex-row flex-1 justify-between relative">
        <div className="mt-8 pb-2 w-fit ">
          <h1 className="pl-2 text-2xl text-black-dark ">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="hidden md:flex flex-row items-center mt-8   cursor-pointer "
          onClick={() => {
            setClicked(!clicked);
            setRotateIt(!rotateIt);
          }}
        >
          <h4 className=" ">
            {" "}
            {`Sortieren nach: ${state?.activeSortValues}`}{" "}
          </h4>

          <div
            className={
              rotateIt
                ? "flex items-center justify-center w-6 h-4   transition transform rotate-180 origin-center	"
                : "flex items-center justify-center w-6 h-4   transition transform rotate-0 origin-center	 "
            }
          >
            <MdKeyboardArrowDown size={28} />
          </div>
        </div>
        {/* SORT DESKTOP */}
        <div className={clicked ? "hidden" : "flex  absolute top-16 right-0 "}>
          <SortDesktop />
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;

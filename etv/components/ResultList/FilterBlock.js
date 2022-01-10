import Image from "next/image";
import { useState } from "react";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import filterImage from "../../public/images/filter-icon.png";
import TruncateFilterMobile from "./TruncateFilterMobile";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import SortDesktop from "./SortDesktop";

function FilterBlock() {
  const [truncate, setTruncate] = useState(false);
  const [clicked, SetClicked] = useState(false);
  return (
    <div className=" w-full min-w-fit ">
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
      {/* 4 FILTER REFEREBCES */}
      <div className="flex flex-row justify-center w-full sm:mt-2 md:mt-12 xs:justify-around md:justify-start ">
        {/* 2 OF 4 FILTERS  */}
        <div className="flex flex-col ml-2  xl:flex-row  flex-grow ">
          <div className=" h-9 bg-grey-lighter  mt-2  flex-grow flex flex-row justify-between ">
            <div className="  flex flex-row ">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image4}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2 ">3000-9000 €</span>
            </div>

            <div className="w-3.5 my-auto mr-4 cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className=" h-9 bg-grey-lighter  mt-2 flex-grow  flex flex-row justify-between xl:ml-2 ">
            <div className="  flex flex-row flex-grow ">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image3}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">bis 80km/h</span>
            </div>
            <div className="w-3.5 my-auto mr-4 cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
          </div>
        </div>
        {/* 2 OF 4 FILTERS  */}
        <div className="flex flex-col ml-2 xl:flex-row flex-grow mr-2">
          <div className="h-9 bg-grey-lighter  mt-2 flex-grow  flex flex-row justify-between ">
            <div className="w-full  flex flex-row ">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">Bis 100 km</span>
            </div>

            <div className="w-3.5 my-auto mr-4 cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className=" h-9 bg-grey-lighter  mt-2 flex-grow  flex flex-row justify-between xl:ml-2 ">
            <div className="w-full  flex flex-row ">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image2}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">bis 100 kg</span>
            </div>

            <div className="w-3.5 my-auto mr-4 cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
          </div>
        </div>
        {/* REMOVE ALL FILTERS */}
        <div className="hidden xl:w-30 h-auto xl:flex xl:items-end">
          <span
            className="text-sm pl-4 cursor-pointer"
            onClick={() => console.log("you clicked all filters removal")}
          >
            alle Filter loschen
          </span>
        </div>
      </div>
      {/* HEADING + SORTING */}
      <div className="flex flex-row justify-between  ">
        <div className="mt-8 pb-2 ">
          <h1 className="text-2xl text-black-dark pl-4">
            Die besten E-Transporter nach Ihrer Auswahl
          </h1>
        </div>
        <div
          className="hidden md:flex  w-fit  flex-row justify-end items-center mt-8 pb-2 "
          onClick={() => SetClicked(!clicked)}
        >
          <h4 className="pr-4 ">Sortieren nach </h4>
          <div
            className={
              clicked ? "hidden" : "flex w-full h-48 border-2 bg-red-500"
            }
          >
            <SortDesktop />
          </div>
          <div className="w-4 h-4 relative right-2 mb-2">
            <MdKeyboardArrowDown size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;

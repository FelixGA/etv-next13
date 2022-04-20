import Image from "next/image";
import { useState, useEffect } from "react";
import CarCardDetailsDesktop from "./CarCardDetailsDesktop";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
import { useStore } from "../store";

import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import MobileTestResult from "../repeated/MobileTestResult";
import ButtonCompare from "../repeated/ButtonCompare";
import ButtonAnfragen from "../repeated/ButtonAnfragen";

function CarCard({ carItem }) {
  /* HOOKS */
  const { state, dispatch } = useStore();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="mb-4 overflow-hidden border-t shadow-lg lg:shadow-none lg:border-2 lg:border-grey-lighter lg:rounded-xl">
      <div className="flex sm:flex-row">
        <div className="relative flex flex-col justify-between flex-1 pl-2 lg:pl-0">
          <Link href={`/transporter/${carItem.name}`}>
            <a>
              <h3 className="flex items-center py-2 text-xl font-bold leading-7 title text-black-darkest sm:pl-2 xl:hidden">
                {carItem.title}
              </h3>
            </a>
          </Link>

          <div className="w-full pb-6 lg:pb-0">
            <Link href={`/transporter/${carItem.name}`} passHref>
              <a className="relative w-full ">
                {carItem?.src && (
                  <Image
                    className="rounded-l-md"
                    src={carItem.src}
                    alt={carItem.title}
                    width={600}
                    height={394}
                    objectFit="cover"
                    layout="responsive"
                  />
                )}
              </a>
            </Link>
          </div>
        </div>

        <div className=" hidden lg:flex lg:my-auto lg:w-[45%]">
          <CarCardDetailsDesktop carItem={carItem} />
        </div>
        {/* DIVIDER start*/}
        <div className=" hidden 2xl:block w-[1px] h-32 mt-16 bg-grey-border mr-4"></div>
        {/* DIVIDER end */}
        {/* CONTAINER FOR PRICE AND BUTTONS start */}
        <div className="flex flex-col items-end justify-center px-4 pt-4 mb-4 lg:justify-between sm:w-fit xl:items-center">
          {/* PRICE + MOBILE RATING BOX start*/}
          <div className="">
            <p className="pb-2 text-xl font-black text-right text-green-light xl:text-2xl md:pr-2 2xl:mt-4">
              ab {carItem.price} €
            </p>
            <div className="pb-2 lg:hidden sm:pb-0 ">
              {/* {mobileRatingBox} */}
              <MobileTestResult carItem={carItem} />
            </div>
          </div>

          {/* PRICE + MOBILE RATING BOX end*/}
          {/* BUTTONS start */}
          <div className="flex flex-col justify-end flex-1 sm:justify-center">
            <div className="pb-1">
              <ButtonAnfragen carItem={carItem.title} />
            </div>
            <ButtonCompare carItem={carItem} />
          </div>
          {/* BUTTONS end */}
          <div
            onClick={() => {
              setShowDetails(!showDetails);
            }}
            className="flex items-center pt-2 text-xs font-bold cursor-pointer text-blue-dark lg:hidden "
          >
            {showDetails ? "weniger" : "mehr"}
            <p className="pl-1">Details</p>

            <div
              className={
                showDetails
                  ? "flex items-center  transition transform rotate-180 origin-center	"
                  : "flex items-center  transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={24} />
            </div>
          </div>
        </div>
        {/* CONTAINER FOR PRICE AND BUTTONS end */}
      </div>

      <div
        className={showDetails ? "container-product-details w-full" : "hidden"}
      >
        <CarCardDetailsMobile carItem={carItem} />
      </div>
    </div>
  );
}
export default CarCard;

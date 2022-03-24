import Image from "next/image";
import { useState, useEffect } from "react";
import CarCardDetailsDesktop from "./CarCardDetailsDesktop";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
import { useStore } from "../store";
import ButtonCompare from "./ButtonCompare";
import ButtonAnfragen from "./ButtonAnfragen";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import MobileTestResult from "../repeated/MobileTestResult";

function CarCard({ carItem }) {
  /* HOOKS */
  const { state, dispatch } = useStore();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="shadow-lg mb-4 lg:shadow-none border-t lg:border-2 lg:border-grey-lighter lg:rounded-xl overflow-hidden ">
      <div className="flex sm:flex-row">
        <div className="flex flex-col flex-1 relative pl-2 pt-3 justify-between ">
          <div className="flex ">
            <Link href={`/transporter/${carItem.name}`}>
              <a>
                <h3 className="title text-xl font-bold text-black-darkest pt-1 lg:hidden pl-2 flex leading-7">
                  {carItem.title}
                </h3>
              </a>
            </Link>
          </div>
          <div className="pb-6 ">
            <Link href={`/transporter/${carItem.name}`} passHref>
              <a className="w-full relative">
                {carItem?.src && (
                  <Image
                    className="rounded-sm"
                    src={
                      carItem.src
                    } /* "https://aixam.de/wp-content/uploads/2019/01/aixam-pro-pritsche.jpg" */
                    alt={carItem.title}
                    width={550}
                    height={394}
                    objectFit="cover"
                    layout="responsive"
                  />
                )}
              </a>
            </Link>
          </div>
        </div>

        <div className=" hidden lg:flex lg:my-auto lg:w-1/2">
          <CarCardDetailsDesktop carItem={carItem} />
        </div>
        {/* DIVIDER start*/}
        <div className=" hidden 2xl:block w-[1px] h-32 mt-16 bg-grey-border mr-4"></div>
        {/* DIVIDER end */}
        {/* CONTAINER FOR PRICE AND BUTTONS start */}
        <div className="flex flex-col justify-center lg:justify-between sm:flex-1 items-end px-2 xl:items-center mb-4 pt-4">
          {/* PRICE + MOBILE RATING BOX start*/}
          <div className="">
            <p className="text-green-light text-xl xl:text-2xl font-black md:pr-2 text-right pb-2">
              ab {carItem.price} €
            </p>
            <div className="lg:hidden  pb-2 sm:pb-0 ">
              {/* {mobileRatingBox} */}
              <MobileTestResult />
            </div>
          </div>

          {/* PRICE + MOBILE RATING BOX end*/}
          {/* BUTTONS start */}
          <div className="flex-1 flex sm:justify-center flex-col justify-end">
            <div className="pb-1">
              <ButtonAnfragen />
            </div>
            <ButtonCompare carItem={carItem} />
          </div>
          {/* BUTTONS end */}
          <div
            onClick={() => {
              setShowDetails(!showDetails);
            }}
            className="text-blue-dark font-bold  text-xs cursor-pointer flex items-center pt-2  lg:hidden "
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

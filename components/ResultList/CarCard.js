import Image from "next/image";
import { useState, useEffect } from "react";
import CarCardDetailsDesktop from "./CarCardDetailsDesktop";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
import { useStore } from "../store";
import ButtonCompare from "./ButtonCompare";
import ButtonAnfragen from "./ButtonAnfragen";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";

function CarCard(props) {
  /* HOOKS */
  const { state, dispatch } = useStore();
  const [showDetails, setShowDetails] = useState(false);

  const carItem = props.caritem;

  const mobileRatingBox = (
    <div className="border border-black-dark flex flex-col flex-1 h-10 sm:h-11">
      <p className=" flex flex-row justify-center items-center">
        <span className="flex flex-1 justify-center bg-orange-dark text-white font-bold text-xs border-black-dark border-b ">
          TEST
        </span>
        <span className="flex flex-1 justify-center text-grey-dark text-xxs font-bold bg-grey-lighter border-black-dark border-b border-l">
          ERGEBNIS
        </span>
      </p>
      <p className="text-sm font-bold text-grey-darkest flex items-center justify-center pt-0.5 sm:pt-1 ">
        <b className="text-sm pr-1">{carItem.rating.value} </b>{" "}
        {carItem.rating.key}
      </p>
    </div>
  );

  return (
    <div className="py-0 shadow-lg mb-4 lg:shadow-none border-t lg:border-2 lg:border-grey-lighter  lg:rounded-xl overflow-hidden">
      <div className="flex">
        <div className="flex-1  ">
          <Link href={`/transporter/${carItem.title}`}>
            <a>
              <h3 className="title text-xl font-bold text-black-darkest py-2 lg:hidden pl-2">
                {carItem.title}
              </h3>
            </a>
          </Link>

          {/* <Link href={`/transporter/${carItem.title}`} passHref>
            <a className="block w-36 sm:w-64 md:w-80 h-52">
              {carItem?.src && (
                <Image
                  className=""
                  src={carItem.src}
                  alt={carItem.title}
                  width={450}
                  height={350}
                  objectFit="cover"
                />
              )}
            </a>
          </Link> */}
        </div>

        <div className=" hidden lg:flex lg:my-auto lg:w-1/2">
          <CarCardDetailsDesktop carItem={carItem} />
        </div>
        {/* DIVIDER start*/}
        <div className=" hidden 2xl:block w-[1px] h-32 mt-16 bg-grey-border mr-4"></div>
        {/* DIVIDER end */}
        {/* CONTAINER FOR PRICE AND BUTTONS start */}
        <div className="flex flex-col justify-center lg:justify-between flex-1 items-end px-2 xl:items-center py-4">
          {/* PRICE start */}
          <div className="">
            <p className="text-green-light text-xl xl:text-2xl font-black pr-2">
              ab {carItem.price} €
            </p>
          </div>
          {/* PRICE end */}
          {/* MOBILE RATING BOX start*/}
          <div className="lg:hidden w-24 sm:w-28 pt-0 sm:pt-2 pb-2 sm:pb-0 ">
            {mobileRatingBox}
          </div>
          {/* MOBILE RATING BOX end*/}
          {/* BUTTONS start */}
          <div className="flex-1 flex justify-center flex-col">
            <ButtonAnfragen />
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

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
    <div className="border border-black-dark flex flex-col flex-1 h-10 sm:h-11 ">
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
  // get first pic console.log(carItem.photo.data[0].attributes.url);
  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div className="container-product flex flex-col mb-4 py-4 lg:py-0 px-4 lg:px-0 lg:pr-4  shadow-lg lg:shadow-none md:border-t lg:border-2 lg:border-grey-lighter  lg:rounded-xl bg-white">
    <div className="container-product flex flex-row">
      <div className="container-product-basics w-3/5 lg:w-fit ">
        <Link href={`/transporter/${carItem.title}`}>
            <a>
              <h3 className="title text-xl font-bold text-black-darkest pb-2 lg:hidden">
                {carItem.title}
              </h3>
            </a>
          </Link>

          <div className=" xs:w-full  ">
            <Link href={`/transporter/${carItem.title}`} passHref>
              <a className=" flex flex-1">
              {carItem?.src && (  <Image
                  
                  src={carItem.src}
                  alt={carItem.title}
                  width={350}
                  height={255}
                  objectFit="cover"
                  className="rounded-l-lg"
                />)}
              </a>
            </Link>
          </div>
        </div>
        <div className=" hidden lg:flex lg:my-auto lg:w-3/6">
          <CarCardDetailsDesktop carItem={carItem} />
        </div>
         {/* DIVIDER start*/}
         <div className=" hidden 2xl:block w-[1px] h-32 mt-20 bg-grey-border mr-4"></div>
        {/* DIVIDER end */}
        <div className="container-product-info flex flex-col  justify-center lg:justify-between  flex-1 items-end md:pr-4 xl:pr-0 xl:items-center  ">
          <p className="text-green-light text-xl sm:text-2xl font-black lg:mt-6  ">
            ab {carItem.price} €
          </p>
          {/* MOBILE RATING BOX start*/}
          <div className="lg:hidden w-24 sm:w-28 pt-2 ">{mobileRatingBox}</div>
          {/* MOBILE RATING BOX end*/}
          {/* BUTTONS start */}
          <div className="flex-1 flex justify-center  flex-col  ">
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













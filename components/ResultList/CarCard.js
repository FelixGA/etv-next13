import Image from "next/image";
import { useState, useEffect } from "react";
import CarCardDetailsDesktop from "./CarCardDetailsDesktop";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
import { useStore } from "../store";
import ButtonCompare from "./ButtonCompare";
import ButtonAnfragen from "./ButtonAnfragen";
import Link from "next/link";

function CarCard(props) {
  /* HOOKS */
  const { state, dispatch } = useStore();
  const [showDetails, setShowDetails] = useState(false);

  const carItem = props.caritem;

  const mobileRatingBox = (
    <div className="border-2 border-black-darkest flex flex-col w-22 ">
      <p className=" flex flex-row justify-center ">
        <span className="px-1 bg-orange-dark text-white font-bold text-xs border-black-dark border-b-2 ">
          TEST
        </span>
        <span className="px-1 text-grey-dark text-xxs font-bold bg-grey-lighter border-black-dark border-b-2">
          ERGEBNIS
        </span>
      </p>
      <p className="px-1 text-xs font-bold text-grey-darkest custom-text">
        <b className="text-sm">{carItem.rating.value} </b> {carItem.rating.key}
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
                <Image
                  loader={myLoader}
                  src={`http://localhost:3000/${carItem.src}`}
                  alt={carItem.title}
                  width={350}
                  height={240}
                  objectFit="cover"
                  className="rounded-l-lg"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className=" hidden lg:flex lg:my-auto lg:w-3/6">
          <CarCardDetailsDesktop carItem={carItem} />
        </div>
        {/* DIVIDER start*/}
        <div className=" hidden lg:block w-[1px] h-32 mt-20 bg-grey-border"></div>
        {/* DIVIDER end */}
        <div className="container-product-info  flex flex-col lg:flex-col justify-center flex-1 items-center  ">
          <p className="text-green-light xl:text-2xl font-bold pt-16 ">
            ab {carItem.price} €
          </p>

          <span className="lg:hidden">{mobileRatingBox}</span>
          <div className="flex-1 flex justify-center  lg:flex-col-reverse pb-4 ">
            <ButtonAnfragen />
            <ButtonCompare carItem={carItem} />
          </div>
          <div
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-dark font-bold  text-xxs cursor-pointer lg:hidden"
          >
            <span className="font-bold mr-2 text-base text-blue-darker">˅</span>{" "}
            {showDetails ? "weniger" : "mehr"} Details
          </div>
        </div>
      </div>

      <div
        className={showDetails ? "container-product-details w-full" : "hidden"}
      >
        {/* <CarCardDetailsMobile carItem={carItem} /> */}
      </div>
    </div>
  );
}
export default CarCard;

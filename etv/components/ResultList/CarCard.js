import Image from "next/image";
import { useState } from "react";
import CarCardDetailsDesktop from "./CarCardDetailsDesktop";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
function CarCard(props) {
  const [showDetails, setShowDetails] = useState(false);
  const mobileRatingBox = (
    <div className="borderbtn flex flex-col w-22">
      <p className=" flex flex-row justify-center ">
        <span className="px-1 bg-orange-dark text-white font-bold text-xxs border-black-dark border-b-2 ">
          TEST
        </span>
        <span className="px-1 text-grey-dark text-xxs font-bold bg-grey-lighter border-black-dark border-b-2">
          ERGEBNIS
        </span>
      </p>
      <p className="px-1 text-xs font-bold text-grey-darkest custom-text">
        <b className="text-sm">{props.caritem.ergebnis} </b> SEHR GUT
      </p>
    </div>
  );

  return (
    <div className="container-product flex flex-col mb-4 py-4 px-4 shadow-lg bg-white">
      <span className="container-product flex flex-row">
        <div className="container-product-basics w-3/5 lg:w-2/6 ">
          <h3 className="title text-xl font-bold text-black-darkest pb-2 lg:hidden">
            {props.caritem.title}
          </h3>
          <div className="container-product-basics-image w-full sm:max-w-xs w-100">
            <Image
              src={props.caritem.image}
              alt="car"
              width={195}
              height={140}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className=" hidden lg:block lg:w-3/6">
          <CarCardDetailsDesktop caritem={props.caritem} />
        </div>
        <div className="container-product-info w-2/5 lg:w-1/6 flex flex-col justify-start items-end ">
          <p className="text-green-700 text-xl font-bold pb-2 ">
            ab {props.caritem.price} €
          </p>

          <span className="lg:hidden">{mobileRatingBox}</span>

          <button className="bg-yellow-dark  hover:bg-yellow-light text-blue-dark my-3 px-2 font-bold text-xxs tracking-wider rounded w-5/6 h-7 xxs:h-9 ">
            Jetzt anfragen
          </button>
          <button className="bg-blue-dark  hover:bg-blue-light text-white mb-2 px-2 pt-1 text-xxs tracking-wider rounded  flex justify-center items-center w-5/6 h-7 xxs:h-9 ">
            <span className="text-blue-dark w-4 h-4 hidden xxs:flex items-center justify-center font-bold rounded-full text-l mb-1 mr-2 bg-white">
              &nbsp;+&nbsp;
            </span>
            Vergleichen
          </button>

          <div
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-dark font-bold text-xs cursor-pointer lg:hidden"
          >
            <span className="font-bold mr-2 text-base text-blue-darker">˅</span>{" "}
            {showDetails ? "weniger" : "mehr"} Details
          </div>
        </div>
      </span>

      <div
        className={
          showDetails ? "container-product-details w-screen" : "hidden"
        }
      >
        <CarCardDetailsMobile caritem={props.caritem} />
      </div>
    </div>
  );
}
export default CarCard;

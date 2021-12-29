import Image from "next/image";
import { useState } from "react";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
function CarCard(props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="container-product flex flex-col py-6 shadow-lg">
      <span className="container-product flex flex-row">
        <div className="container-product-basics w-1/2 ">
          <h3 className="title text-xl font-bold text-black-darkest pb-2 lg:hidden">
            {props.caritem.title}
          </h3>
          <Image src={props.caritem.image} alt="car" width={188} height={166} />
        </div>
        <div className="container-product-info w-1/2 flex flex-col justify-center items-end pr-4">
          <p className="text-green-700 text-xl font-bold pb-4 ">
            ab {props.caritem.price} €
          </p>

          <h3 className="hidden lg:block">{props.caritem.title}</h3>
          <div className="borderbtn flex flex-col w-26">
            <p className=" flex flex-row justify-center ">
              <span className="p-1 bg-orange-dark text-white font-bold text-xs ">
                TEST
              </span>
              <span className="p-1 text-grey-dark text-xs">ERGEBNIS</span>
            </p>
            <p className="p-1 text-xs font-bold text-grey-darkest">
              {props.caritem.ergebnis} SEHR GUT
            </p>
          </div>
          <button className="bg-yellow-dark  hover:bg-yellow-light text-blue-dark my-3 px-2 font-bold text-sm rounded w-5/6 h-9 ">
            Jetzt anfragen
          </button>
          <button className="bg-blue-dark w-5/6 hover:bg-blue-light text-white mb-2 px-2 pt-1 text-sm rounded h-9 flex justify-center items-center">
            <span className="text-blue-dark w-4 h-4 font-bold rounded-full text-l mb-1 mr-2 bg-white">
              &nbsp;+&nbsp;
            </span>
            Vergleichen
          </button>

          <div
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-dark font-bold text-xs cursor-pointer"
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

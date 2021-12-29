import Image from "next/image";
import { useState } from "react";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
function CarCard(props) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="container-product flex flex-col py-6 shadow-lg">
      <span className="container-product flex flex-row">
        <div className="container-product-basics w-1/2 ">
          <h3 className="title lg:hidden">{props.caritem.title}</h3>
          <Image src={props.caritem.image} alt="car" width={188} height={166} />
        </div>
        <div className="container-product-info w-1/2 flex flex-col justify-center items-end pr-4">
          <p className="text-green-700 text-xl font-bold pb-4 ">
            ab {props.caritem.price} €
          </p>

          <h3 className="hidden lg:block">{props.caritem.title}</h3>
          <div className="borderbtn flex flex-col w-24">
            <p className="borderbtn flex flex-row justify-center">
              <span className=" bg-orange-dark text-white font-bold w-1/3 text-xs ">
                TEST
              </span>
              <span className=" text-grey-dark w-2/3 text-xs">ERGEBNIS</span>
            </p>
            <p className="text-xs font-bold text-grey-darkest">
              {props.caritem.ergebnis} SEHR GUT
            </p>
          </div>
          <button className="bg-blue-dark  hover:bg-blue-light text-white my-2 px-2 text-sm rounded h-8 ">
            Vergleichen
          </button>
          <button className="bg-yellow-dark  hover:bg-yellow-light text-white my-2 px-2 text-sm rounded h-8 ">
            Jetzt anfragen
          </button>
          <div
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-dark font-bold text-xs cursor-pointer"
          >
            {showDetails ? "weniger" : "mehr"} details
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
//  <>
//    {props.caritem.title},{props.caritem.description}, {props.caritem.price},{" "}
//    {props.caritem.weight}, {props.caritem.distance}, {props.caritem.vmax},{" "}
//    {props.caritem.loadingtime}, {props.caritem.ergebnis}
//  </>;

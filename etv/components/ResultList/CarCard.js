import Image from "next/image";
import { useState } from "react";
import CarCardDetailsDesktop from "./CarCardDetailsDesktop";
import CarCardDetailsMobile from "./CarCardDetailsMobile";
function CarCard(props) {
  const [showDetails, setShowDetails] = useState(false);
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
        <b className="text-sm">{props.caritem.rating.value} </b>{" "}
        {props.caritem.rating.key}
      </p>
    </div>
  );
  // get first pic console.log(props.caritem.photo.data[0].attributes.url);
  const myLoader = ({ src }) => {
    return `http://localhost:1337${props.caritem.photo.data[0].attributes.url}`;
  };
  return (
    <div className="container-product flex flex-col mb-4 py-4 lg:py-0 px-4 lg:px-0 lg:pr-4  shadow-lg lg:shadow-none lg:border-2 lg:border-grey-lighter  lg:rounded-xl bg-white">
      <span className="container-product flex flex-row">
        <div className="container-product-basics w-3/5 lg:w-2/6 ">
          <h3 className="title text-xl font-bold text-black-darkest pb-2 lg:hidden">
            {props.caritem.title}
          </h3>
          <div className=" w-full sm:max-w-xs w-100 ">
            <Image
              loader={myLoader}
              src={`http://localhost:1337${props.caritem.photo.data[0].attributes.url}`}
              alt={props.caritem.photo.data[0].attributes.alternativeText}
              width={195}
              height={140}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className=" hidden lg:flex lg:my-auto lg:w-3/6">
          <CarCardDetailsDesktop caritem={props.caritem} />
        </div>
        <div className="container-product-info w-2/5 lg:w-1/6 flex flex-col lg:flex-col justify-center items-end ">
          <p className="text-green-700 xl:text-xl font-bold mb-4 ">
            ab {props.caritem.price} €
          </p>

          <span className="lg:hidden">{mobileRatingBox}</span>
          <div className="w-full flex flex-col lg:flex-col-reverse items-end">
            <button className="bg-yellow-dark  hover:bg-yellow-light text-blue-dark my-3 px-2 font-bold text-xs xl:tracking-wider rounded w-5/6 h-7 xxs:h-9 ">
              Jetzt anfragen
            </button>
            <button className="bg-blue-dark  hover:bg-blue-light text-white mb-2 px-2 text-xs xl:tracking-wider rounded  flex justify-center items-center w-5/6 h-7 xxs:h-9 ">
              <span className="text-blue-dark hidden xs:flex  lg:w-0 xl:w-4 justify-center font-bold rounded-full my-auto mr-2 bg-white">
                &nbsp;+&nbsp;
              </span>
              <span className="my-auto">Vergleichen</span>
            </button>
          </div>
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
        className={showDetails ? "container-product-details w-full" : "hidden"}
      >
        <CarCardDetailsMobile caritem={props.caritem} />
      </div>
    </div>
  );
}
export default CarCard;

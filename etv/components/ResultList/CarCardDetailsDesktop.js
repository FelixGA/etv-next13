import Image from "next/image";

import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
function CarCardDetailsDesktop(props) {
  const desktopRatingBox = (
    <div className="borderbtn flex flex-col w-15 text-sm xl:w-20">
      <p className=" flex flex-col justify-center ">
        <span className="px-1 bg-orange-dark text-white font-bold text-xs flex justify-center ">
          TEST
        </span>
        <span className="flex justify-center text-grey-dark text-xs font-bold pt-2">
          ERGEBNIS
        </span>
      </p>
      <p className="px-1 text-s font-bold text-grey-darkest custom-text">
        <b className="text-2xl">{props.caritem.rating.value}</b>
        <br />
        {props.caritem.rating.key}
      </p>
    </div>
  );
  return (
    <div className=" w-full flex flex-col justify-center">
      <h3 className=" pl-4 text-black-darkest font-bold mb-2">
        {props.caritem.title}
      </h3>
      <span className="flex flex-row w-full flex-wrap xl:pr-4 border-r-2">
        <section className="py-2 xl:pl-4 flex flex-row w-3/4 flex-wrap">
          <span className="flex flex-col w-1/2 ">
            <div className="flex flex-row w-full ">
              <div className="bg-grey-lighter rounded-full m-2">
                <Image src={image} alt="Reichweite" width={36} height={36} />
              </div>
              <div className="flex flex-col w-full justify-center text-sm">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {props.caritem.range.value} km
                </div>
                <div className="text-grey-dark font-bold ">
                  {props.caritem.range.key}{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full ">
              <div className="bg-grey-lighter rounded-full m-2">
                <Image src={image3} alt="v-max-logo" width={36} height={36} />
              </div>
              <div className="flex flex-col w-full justify-center text-sm">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {props.caritem.maxSpeed.value} km/h
                </div>
                <div className="text-grey-dark font-bold ">
                  {props.caritem.maxSpeed.key}{" "}
                </div>
              </div>
            </div>
          </span>
          <span className="flex flex-col w-1/2 ">
            <div className="flex flex-row w-full ">
              <div className="bg-grey-lighter rounded-full m-2">
                <Image
                  src={image2}
                  alt="zuladung-logo"
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex flex-col w-full justify-center text-sm">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {props.caritem.weight.value} kg
                </div>
                <div className="text-grey-dark font-bold ">
                  {props.caritem.weight.key}{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full ">
              <div className="bg-grey-lighter rounded-full m-2 ">
                <Image src={image4} alt="v-max-logo" width={36} height={36} />
              </div>
              <div className="flex flex-col w-full justify-center text-sm ">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {props.caritem.chargingTime.value}h
                </div>
                <div className="text-grey-dark font-bold ">
                  {props.caritem.chargingTime.key}{" "}
                </div>
              </div>
            </div>
          </span>
        </section>
        <div className="flex flex-wrap items-center justify-center w-1/4 ">
          <span className="">{desktopRatingBox}</span>
        </div>
      </span>
    </div>
  );
}
export default CarCardDetailsDesktop;
//  <>
//    {props.caritem.title},{props.caritem.description}, {props.caritem.price},{" "}
//    {props.caritem.weight}, {props.caritem.distance}, {props.caritem.vmax},{" "}
//    {props.caritem.loadingtime}, {props.caritem.vmax}
//  </>;

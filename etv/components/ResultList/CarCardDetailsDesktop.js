import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
import Link from "next/link";
import RatingBox from "./RatingBox";
import { useRouter } from "next/router";

function CarCardDetailsDesktop(props) {
  const router = useRouter();

  let carItem = props.carItem;

  return (
    <div className=" w-full flex flex-col justify-center">
      {" "}
      <Link href={`/vehicles/${carItem?.title}`}>
        <a>
          <h3
            className={
              router.query.cartitle
                ? "hidden"
                : " pl-4 text-black-darkest font-bold mb-2"
            }
          >
            {carItem?.title}
          </h3>
        </a>
      </Link>
      <div className="flex  w-full flex-wrap xl:pr-4 bg-red-500">
        <section className="py-2 xl:pl-4 flex  w-3/4 flex-wrap ">
          <div className="flex flex-col w-1/2  bg-yellow-500">
            <div className="flex    h-1/2 items-center ">
              <div className="hidde ">
                <Image
                  className=" rounded-full"
                  src={image}
                  alt="Reichweite"
                  width={150}
                  height={150}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col w-full justify-center text-sm pl-4">
                <div className="text-blue-dark font-bold ">
                  {carItem?.range.value} km
                </div>
                <div className="text-grey-dark font-bold ">
                  {carItem?.range.key}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full h-16 items-center">
              <div className=" ">
                <Image
                  className="rounded-full "
                  src={image3}
                  alt="v-max-logo"
                  width={150}
                  height={150}
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col w-full justify-center text-sm">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {carItem?.maxSpeed.value} km/h
                </div>
                <div className="text-grey-dark font-bold ">
                  {carItem?.maxSpeed.key}{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 ">
            <div className="flex flex-row w-full h-16 items-center">
              <div className="bg-grey-lighter  rounded-full ">
                <Image
                  className="rounded-full "
                  src={image2}
                  alt="zuladung-logo"
                  width={24}
                  height={24}
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col w-full justify-center text-sm">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {carItem?.weight.value} kg
                </div>
                <div className="text-grey-dark font-bold ">
                  {carItem?.weight.key}{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-row w-full h-16 items-center">
              <div className="bg-grey-lighter  rounded-full  ">
                <Image
                  className="rounded-full "
                  src={image4}
                  alt="v-max-logo"
                  width={24}
                  height={24}
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col w-full justify-center text-sm ">
                <div className="text-blue-dark font-bold ">
                  {" "}
                  {carItem?.chargingTime.value}h
                </div>
                <div className="text-grey-dark font-bold ">
                  {carItem?.chargingTime.key}{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap items-center justify-center w-1/4 ">
          <div className="">
            <RatingBox carItem={carItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarCardDetailsDesktop;
//  <>
//    {props.caritem?.title},{props.caritem.description}, {props.caritem.price},{" "}
//    {props.caritem.weight}, {props.caritem.distance}, {props.caritem.vmax},{" "}
//    {props.caritem.loadingtime}, {props.caritem.vmax}
//  </>;

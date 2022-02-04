import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
import Link from "next/link";
import RatingBox from "./RatingBox";
import { useRouter } from "next/router";
import CarCardProps from "./CarCardProps";

function CarCardDetailsDesktop(props) {
  const router = useRouter();

  return (
    <div className=" w-full flex flex-col justify-center">
      <Link href={`/transporter/${props.carItem?.title}`}>
        <a>
          <h3
            className={
              router.query.cartitle
                ? "hidden"
                : " pl-4 text-black-darkest font-bold mb-2"
            }
          >
            {props.carItem?.title}
          </h3>
        </a>
      </Link>
      <div className="flex  w-full flex-wrap xl:pr-4 bg-red-500">
        <section className="py-2 xl:pl-4 flex  w-3/4 flex-wrap ">
          <div className="flex flex-col w-1/2  bg-yellow-500">
            <CarCardProps details={props.carItem?.range} image={image} />
            <CarCardProps details={props.carItem?.weight} image={image2} />
            <CarCardProps
              details={props.carItem?.chargingTime[0]}
              image={image4}
            />
            <CarCardProps details={props.carItem?.maxSpeed} image={image3} />
          </div>
        </section>
        <div className="flex flex-wrap items-center justify-center w-1/4 ">
          <div className="">
            <RatingBox carItem={props.carItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarCardDetailsDesktop;

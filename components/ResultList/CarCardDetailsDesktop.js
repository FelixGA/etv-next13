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
  let carItem = props.carItem;
  const router = useRouter();

  return (
    <div className=" w-full flex flex-col justify-center">
      <Link href={`/transporter/${carItem?.title}`}>
        <a>
          <h3
            className={
              router.query.cartitle
                ? "hidden"
                : " pl-8 text-blue-extra font-bold pt-4 pb-4"
            }
          >
            {props.carItem?.title}
          </h3>
        </a>
      </Link>
      <div className="w-full grid grid-cols-3  h-40">
        <div className="  flex flex-col justify-between ">
          <CarCardProps details={props.carItem?.Range230V} image={image} />
          <CarCardProps details={props.carItem?.loadingWeight} image={image2} />
        </div>
        <div>
          <CarCardProps
            details={props.carItem?.chargingTime230V[0]}
            image={image4}
          />
          <CarCardProps details={props.carItem?.maxSpeed} image={image3} />
        </div>

        <div className=" w-full flex justify-center items-center ">
          <div className="w-24">
            <RatingBox carItem={props.carItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarCardDetailsDesktop;

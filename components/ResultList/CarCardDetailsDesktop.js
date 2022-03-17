import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
import Link from "next/link";
import RatingBox from "./RatingBox";
import { useRouter } from "next/router";
import CarCardProps from "./CarCardProps";

function CarCardDetailsDesktop({ carItem }) {
  // let carItem = props.carItem;
  const router = useRouter();

  return (
    <div className=" w-full flex flex-col justify-center">
      <Link href={`/transporter/${carItem?.name}`}>
        <a>
          <h3
            className={
              router.query.cartitle
                ? "hidden"
                : " pl-8 text-blue-extra font-bold"
            }
          >
            {carItem?.title}
          </h3>
        </a>
      </Link>
      <div className="w-full grid grid-cols-2 2xl:grid-cols-3 h-40">
        <div className="  flex flex-col justify-between ">
          <CarCardProps
            details={
              carItem?.rangeLithium.value
                ? carItem?.rangeLithium
                : carItem?.range230V
            }
            image={image}
          />
          <CarCardProps details={carItem?.loadingWeight} image={image2} />
        </div>
        <div>
          <CarCardProps
            details={
              carItem?.chargingTimeLithium.value
                ? carItem?.chargingTimeLithium
                : carItem?.chargingTime230V
            }
            image={image4}
          />
          <CarCardProps details={carItem?.maxSpeed} image={image3} />
        </div>

        <div className=" flex-1  hidden 2xl:flex justify-center items-center ">
          <div className="w-24">
            <RatingBox carItem={carItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarCardDetailsDesktop;

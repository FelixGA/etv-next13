import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";
import Link from "next/link";

import { useRouter } from "next/router";
import CarCardProps from "./CarCardProps";
import RatingBox from "../repeated/RatingBox";

function CarCardDetailsDesktop({ carItem }) {
  // let carItem = props.carItem;
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center w-full">
      <Link href={`/transporter/${carItem?.name}`}>
        <a className="relative">
          <h3
            className={
              router.query.cartitle
                ? "hidden"
                : "pl-8 relative bottom-5 text-blue-extra text-2xl font-bold hidden xl:block"
            }
          >
            {carItem?.title}
          </h3>
        </a>
      </Link>
      <div className="grid w-full h-40 grid-cols-2 2xl:grid-cols-3">
        <div className="flex flex-col justify-between ">
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

        <div className="items-center justify-center flex-1 hidden 2xl:flex">
          <div className="w-24">
            <RatingBox carItem={carItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CarCardDetailsDesktop;

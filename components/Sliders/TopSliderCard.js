import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import StarsRating from "../repeated/StarsRating";

const TopSliderCard = (props) => {
  return (
    
        <div
          className="relative pb-4 border rounded-sm shadow-dropdown hover:scale-[101%] snap-center lg:snap-start h-[470px] ease-in-out duration-100 transition"
        >
          <div className="">
            <div className="w-full">
              <Link
                href={
                  props.vehicle?.name
                    ? `/transporter/${props.vehicle.name}`
                    : `/magazin/${props.vehicle.category}/${props.vehicle.slug}`
                }
                passHref
              >
                <a className="w-[380px] h-[270px]">
                  {props.vehicle.src && (
                    <Image
                      className="rounded-sm "
                      src={props.vehicle.src}
                      alt={props.vehicle.name}
                      objectFit="cover"
                      width={380}
                      height={270}
                      layout="responsive"
                    />
                  )}
                </a>
              </Link>
              <Link
                href={
                  props.vehicle?.name
                    ? `/transporter/${props.vehicle.name}`
                    : `/magazin/${props.vehicle.category}/${props.vehicle.slug}`
                }
              >
                <a>
                  <h3 className="mt-8 mb-4 text-xl font-black tracking-wide text-center text-black-dark line-clamp-1">
                    {props.vehicle?.title}
                  </h3>
                </a>
              </Link>
              <div className="slider__item-text">
                <p
                  className={
                    !props.vehicle?.rating
                      ? "px-2 text-sm text-center font-Inter text-blue-light line-clamp-5"
                      : "px-2 text-sm text-center font-Inter text-blue-light line-clamp-2"
                  }
                >
                  {props.vehicle?.description}
                </p>
              </div>
              {props.vehicle?.rating && (
                <div className="flex justify-center pt-8">
                  <StarsRating stars={props.vehicle?.rating.value} />
                </div>
              )}

              <div className="absolute flex items-center justify-center w-full mt-8 text-center bottom-6 ">
                <Link
                  href={
                    props.vehicle?.name
                      ? `/transporter/${props.vehicle.name}`
                      : `/magazin/${props.vehicle.category}/${props.vehicle.slug}`
                  }
                >
                  <a className="pr-4 text-xs text-center visited:text-blue-darker text-blue-darker">
                    {props.vehicle?.name ? "Jetzt vergleichen" : "Mehr erfahren"}
                  </a>
                </Link>

                <div className="">
                  <HiOutlineArrowRight color="blue" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
};
export default TopSliderCard;

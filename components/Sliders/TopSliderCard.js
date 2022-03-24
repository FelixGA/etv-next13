import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const TopSliderCard = (props) => {
  const getDisplayedCars = props?.displayedCars?.map((caritem, index) => (
    <div className="relative">
      <div className="min-w-64 px-6" key={index}>
        <div className="w-64 ">
          <Link href={`/transporter/${caritem.name}`} passHref>
            <a>
              {caritem.src && (
                <Image
                  className="rounded-md "
                  src={caritem.src}
                  alt="picture"
                  objectFit="contain"
                  width={380}
                  height={250}
                  layout="responsive"
                />
              )}
            </a>
          </Link>
          <Link href={`/transporter/${caritem.name}`}>
            <a>
              <h3 className="text-center text-xl font-black text-black-dark mt-8 mb-4	tracking-wide line-clamp-1">
                {caritem.name}
              </h3>
            </a>
          </Link>
          <div className="slider__item-text">
            <p className="text-sm text-center font-Inter text-blue-lighter	">
              {caritem.desc}
            </p>
          </div>

          <div className="flex w-48 h-12 border border-blue-lighter m-auto mt-8">
            <div className="text-xs w-16 h-full bg-orange-dark text-white flex items-center justify-center">
              <span className="font-bold"> TEST</span>
            </div>
            <div className=" flex flex-col justify-center w-full">
              <div className="pt-10 ">
                <span className="text-xxs tracking-widest pl-2.5">
                  ERGEBNIS
                </span>
              </div>
              <div className="flex flex-row pb-8">
                <div className="">
                  <span className="relative bottom-1 pl-2.5 font-black text-m ">
                    {caritem.rating.key}
                  </span>
                </div>
                <div className="pb-2">
                  <span className="relative bottom-1 text-xxs font-black pl-3 tracking-widest ">
                    {caritem.rating.value}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full text-center mt-8 flex  justify-center items-center ">
            <Link href={`/transporter/${caritem.name}`}>
              <a className="text-xs text-center visited:text-blue-darker text-blue-darker pr-4">
                Mehr erfahren
              </a>
            </Link>

            <div className="">
              <HiOutlineArrowRight color="blue" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return getDisplayedCars ? getDisplayedCars : null;
};
export default TopSliderCard;

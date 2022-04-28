import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi";

const TopSliderCard = (props) => {
  const getDisplayedCars = props?.displayedCars?.map((caritem, index) => (
    <div className="relative snap-center lg:snap-start " key={index}>
      <div className="px-6">
        <div className="w-full ">
          <Link href={`/transporter/${caritem.name}`} passHref>
            <a>
              {caritem.src && (
                <Image
                  className="rounded-sm "
                  src={caritem.src}
                  alt="picture"
                  objectFit="cover"
                  width={380}
                  height={270}
                  layout="responsive"
                />
              )}
            </a>
          </Link>
          <Link href={`/transporter/${caritem.name}`}>
            <a>
              <h3 className="mt-8 mb-4 text-xl font-black tracking-wide text-center text-black-dark line-clamp-1">
                {caritem.name}
              </h3>
            </a>
          </Link>
          <div className="slider__item-text">
            <p className="text-sm text-center font-Inter text-blue-lighter line-clamp-2">
              {caritem.description}
            </p>
          </div>

          <div className="flex w-48 h-12 m-auto mt-8 border border-blue-lighter">
            <div className="flex items-center justify-center w-16 h-full text-xs text-white bg-orange-dark">
              <span className="font-bold"> TEST</span>
            </div>
            <div className="flex flex-col justify-center w-full ">
              <div className="pt-10 ">
                <span className="text-xxs tracking-widest pl-2.5">
                  ERGEBNIS
                </span>
              </div>
              <div className="flex flex-row pb-8">
                <div className="pb-2">
                  <span className="relative pl-3 text-sm font-black tracking-widest bottom-1 ">
                    {caritem?.rating.value}
                  </span>
                </div>
                <div className="">
                  <span className="relative bottom-1 pl-2.5 font-black text-sm ">
                    {caritem?.rating.key}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-8 text-center ">
            <Link href={`/transporter/${caritem.name}`}>
              <a className="pr-4 text-xs text-center visited:text-blue-darker text-blue-darker">
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

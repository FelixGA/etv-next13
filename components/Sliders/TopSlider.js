import TopSliderCard from "../Sliders/TopSliderCard";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import Script from "next/script";
import { useState, useRef } from "react";
const TopSlider = ({ getContent, getCars }) => {
  const container = useRef();
  // const style = { color: "black" };
  return (
    <div className="relative">
      <div className="flex justify-center overflow-hidden ">
        <div
          onClick={(e) => {
            container.current.scrollLeft -= 293;
          }}
          className={
            getCars.length >= 4
              ? " hidden xl:flex items-center pl-1 hover:scale-125 bg-white"
              : "hidden"
          }
        >
          <FaArrowCircleLeft size={40} color="#243280" />
        </div>

        <div className="print:hidden flex flex-col w-full xl:w-[1200px]">
          <h2 className="no-select text-3xl font-black text-black-dark text-left mt-4 tracking-wide px-6 relative pb-4">
            Beste Testberichte
          </h2>

          <div
            className="grid grid-flow-col gap-2 auto-cols-[minmax(285px,_1fr)] overflow-x-scroll scrollbar-hide p-2 snap-x "
            ref={container}
          >
            <TopSliderCard
              displayedCars={getCars?.sort(
                (a, b) => a.rating.value - b.rating.value
              )}
            />
          </div>
        </div>

        <div
          onClick={() => (container.current.scrollLeft += 293)}
          className={
            getCars.length >= 4
              ? "xl:flex items-center hidden pr-1 hover:scale-125"
              : "hidden"
          }
        >
          <FaArrowCircleRight size={40} color="#243280" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative w-18 top-0 block lg:hidden">
          <Image
            src="/images/swipe.gif"
            width={80}
            height={80}
            layout="responsive"
            objectFit="contain"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default TopSlider;

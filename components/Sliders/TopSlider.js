import TopSliderCard from "../Sliders/TopSliderCard";
import BsFillArrowRightCircleFill from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import Script from "next/script";
import { useState, useRef } from "react";
const TopSlider = ({ getContent, getCars }) => {
  const container = useRef();
  // const style = { color: "black" };
  return (
    <div className="flex justify-center">
      <div
        onClick={() => (container.current.scrollLeft -= 293)}
        className="xl:flex items-center hidden"
      >
        <FaArrowCircleLeft size={40} color="#243280" />
      </div>

      <div className="print:hidden flex flex-col w-full xl:w-[1200px]">
        <h2 className="text-3xl font-black text-black-dark text-left mt-4 tracking-wide px-6 relative pb-4">
          {getContent?.content[1].details}
        </h2>

        <div
          className="grid grid-flow-col gap-2 auto-cols-[minmax(285px,_1fr)] overflow-x-scroll scrollbar-hide  p-2"
          ref={container}
        >
          <TopSliderCard displayedCars={getCars} />
        </div>
      </div>

      <div
        onClick={() => (container.current.scrollLeft += 293)}
        className="xl:flex items-center hidden"
      >
        <FaArrowCircleRight size={40} color="#243280" />
      </div>
    </div>
  );
};
export default TopSlider;

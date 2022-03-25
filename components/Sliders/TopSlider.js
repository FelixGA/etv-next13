import TopSliderCard from "../Sliders/TopSliderCard";
// import BsFillArrowRightCircleFill from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import Script from "next/script";
const TopSlider = ({ getContent, getCars }) => {
  const displayedCars = getCars;
  return (
    <>
      <div className="print:hidden flex flex-col">
        <h2 className="text-3xl font-black text-black-dark text-left mt-4 tracking-wide px-6 relative pb-4">
          {getContent?.content[1].details}
        </h2>

        <div className="flex flex-row overflow-x-auto scrollbar-hide ">
          <TopSliderCard displayedCars={displayedCars} />
        </div>
      </div>
    </>
  );
};
export default TopSlider;

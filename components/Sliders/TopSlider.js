import TopSliderCard from "../Sliders/TopSliderCard";
// import BsFillArrowRightCircleFill from "react-icons/bs";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import Script from "next/script";
const TopSlider = ({ getContent, getCars }) => {
  return (
    <>

      <div className="print:hidden  flex flex-col ">
        {/* <h2 className="text-3xl font-black text-black-dark text-left mt-10 mb-10 tracking-wide pl-6">
          {getContent?.content[1].details}
        </h2>
        <div className="flex flex-row overflow-x-auto scrollbar-hide ">
          <TopSliderCard displayedCars={getCars} />
        </div> */}
        {/*  <div className="relative left-[2%] top-44 z-30">
        <FaArrowCircleLeft size={35} fill="#FFD166" />
      </div>
      <div className="relative top-36 left-[88%] z-30">
        <FaArrowCircleRight size={35} fill="#FFD166" />
      </div> */}
        <div className="print:hidden flex flex-col">
          <h2 className="text-3xl font-black text-black-dark text-left mt-4 tracking-wide px-6 relative pb-4">
            {getContent?.content[1].details}
          </h2>


          <div className="flex flex-row overflow-x-auto scrollbar-hide ">
            <TopSliderCard displayedCars={getCars} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopSlider;

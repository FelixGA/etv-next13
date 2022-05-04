import TopSliderCard from "../Sliders/TopSliderCard";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// import Script from "next/script";
import { useState, useRef, useEffect } from "react";

const TopSlider = ({ getBlogContext, getCars }) => {
  const container = useRef();
  // const style = { color: "black" };

  console.log("context", getBlogContext);
  console.log("cars", getCars);
  const [sliderData, setSliderData] = useState(
    [getBlogContext].concat(getCars)
  );

  // useEffect(() => {
  //   setSliderData([
  //     ...getCars.filter((car) => car.slug !== getBlogContext.slug),
  //   ]);
  // }, [getCars]);
  // const style = { color: "black" };
  return (
    <div className="relative pb-8">
      <div className="flex justify-center overflow-hidden ">
        <div
          onClick={(e) => {
            container.current.scrollLeft -= 293;
          }}
          className={
            getCars.length >= 4
              ? " hidden xl:flex items-center hover:scale-110 bg-white transition relative"
              : "hidden"
          }
        >
          <div className="absolute top-64 right-10">
            <FaArrowCircleLeft size={40} color="#243280" />
          </div>
        </div>

        <div className="relative print:hidden flex flex-col w-full xl:w-[1220px] ">
          <h2 className="relative px-6 pb-4 mt-4 text-3xl font-black tracking-wide text-left no-select text-black-dark">
            Jetzt vergleichen!
          </h2>
          <div className="absolute z-50 w-10 p-1 bg-white  rounded-full top-4 left-[300px] 2xl:hidden">
            <Image
              src="/images/swipe.gif"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            ></Image>
          </div>

          <div
            className="grid grid-flow-col gap-4 auto-cols-[minmax(293px,_1fr)] overflow-x-scroll scrollbar-hide pt-2 px-2 snap-x "
            ref={container}
          >
            <TopSliderCard displayedCars={sliderData} />
          </div>
        </div>

        <div
          onClick={() => (container.current.scrollLeft += 293)}
          className={
            getCars.length >= 4
              ? "xl:flex items-center hidden pr-1 hover:scale-110 transition relative"
              : "hidden"
          }
        >
          <div className="absolute top-64 left-10">
            <FaArrowCircleRight size={40} color="#243280" />
          </div>
        </div>
      </div>

      {/* <div className="relative w-12  bottom-[455px] left-4 2xl:hidden rounded-full bg-white border selection:border-gray-50 p-1">
        <Image
          src="/images/swipe.gif"
          width={100}
          height={100}
          layout="responsive"
          objectFit="contain"
        ></Image>
      </div> */}
    </div>
  );
};
export default TopSlider;

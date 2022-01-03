import TopSliderCard from "../Sliders/TopSliderCard";
import { useState, useEffect } from "react";
import images from "./TopSliderCard";

// import Script from "next/script";
const TopSlider = (props) => {
  // const [index, setIndex] = useState(0);
  // const [index1, setIndex1] = useState(1);

  // const [transL, setTransL] = useState(false);
  // const [transR, setTransR] = useState(false);
  // const [shownCarsAmount, setShownCarsAmount] = useState();
  // const [showCount, setShowCount] = useState(1);
  // const [shownCars, setShownCars] = useState([props.cars[0]]);

  /*  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false);
      }, 800);
    }
    if (transL) {
      setTimeout(() => {
        setTransL(false);
        setIndex((index + 1) % images.length);
        setIndex1((index1 + 1) % images.length);
      }, 800);
    }
  }, [transL, transR]); */

  /* const handlePrev = () => {
    setTransR(true);
    setTransL(false);

    const nextIndex = index - 1;
    const nextIndex1 = index1 - 1;

    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }

    if (nextIndex1 < 0) {
      setIndex1(images.length - 1);
    } else {
      setIndex1(nextIndex1);
    }
  }; */

  // const handleNext = () => {
  //   setShownCars([
  //     props.cars,
  //     /* ...props.cars?.slice(shownCarsAmount, shownCarsAmount + showCount), */
  //   ]);
  //   console.log(shownCars, showCount);
  //   setTransL(true);
  //   setTransR(false);

  //   console.log("you clicked");
  // };
  return (
    <div className="  flex flex-col ">
      <h2 className="text-3xl font-black text-black-dark text-left mt-10 mb-10 tracking-wide pl-6">
        Beste Testberichte
      </h2>
      <div className="flex flex-row overflow-x-auto scrollbar-hide ">
        <TopSliderCard />
        {/*  <button
            className="h-auto w-10  font-extrabold text-3xl"
            onClick={handlePrev}
          >
            {"<"}
          </button> */}
        {/*   {shownCars.map((car, index) => (
            <Slider car={car} index={index} key={index} />
          ))} */}

        {/*  <button
            className="h-auto w-10  font-extrabold text-3xl"
            onClick={handleNext}
          >
            {">"}
          </button> */}
      </div>
    </div>
  );
};
export default TopSlider;

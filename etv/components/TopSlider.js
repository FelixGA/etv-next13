import React from "react";
import Slider from "./Slider";
const TopSlider = () => {
  return (
    <div className="flex flex-col ">
      <h2 className="text-3xl font-black text-black-dark text-left mt-8 mb-8 tracking-wide">
        Beste Testberichte
      </h2>

      <Slider />
      {/*  <Slider />
      <Slider />
      <Slider /> */}
    </div>
  );
};
export default TopSlider;

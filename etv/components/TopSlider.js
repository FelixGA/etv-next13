import React from "react";
import Slider from "./Slider";
// import Script from "next/script";
const TopSlider = () => {
  return (
    <>
      <div className="  flex flex-col ">
        <h2 className="text-3xl font-black text-black-dark text-left mt-8 mb-8 tracking-wide">
          Beste Testberichte
        </h2>
        <div className="  flex flex-row overflow-scroll">
          {/*  <Script src="/path/to/flickity.pkgd.min.js" /> */}
          <Slider />
          <Slider />
          <Slider />
          <Slider />
        </div>
      </div>
    </>
  );
};
export default TopSlider;

{
  /* <div
  class="main-gallery js-flickity"
  data-flickity-options='{ "cellAlign": "left", "contain": true }'
></div>; */
}

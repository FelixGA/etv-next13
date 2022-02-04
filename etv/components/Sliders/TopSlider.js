import TopSliderCard from "../Sliders/TopSliderCard";

// import Script from "next/script";
const TopSlider = (props) => {
  const displayedCars = props.getCars;
  return (
    <div className="print:hidden  flex flex-col ">
      <h2 className="text-3xl font-black text-black-dark text-left mt-10 mb-10 tracking-wide pl-6">
        Beste Testberichte
      </h2>
      <div className="flex flex-row overflow-x-auto scrollbar-hide ">
        <TopSliderCard displayedCars={displayedCars} />
      </div>
    </div>
  );
};
export default TopSlider;

import Link from "next/link";
import React from "react";
import BottomSliderCard from "../Sliders/BottomSliderCard";

export default function BottomSlider(props) {
  return (
    <div className="flex flex-col  ">
      <h2 className="text-center text-3xl text-black-dark font-bold my-8"></h2>
      <div className="flex justify-center items-center h-48 bg-red-400  ">
        FUNNEL
      </div>
    </div>
  );
}

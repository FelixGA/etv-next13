import React from "react";
import BottomSliderCard from "./BottomSliderCard";

export default function BottomSlider() {
  return (
    <div className="flex flex-col  ">
      <h2 className="text-center text-3xl text-black-dark font-bold my-8">
        Beliebte Kategorien
      </h2>
      <div className="flex flex-row overflow-x-auto scrollbar-hide rounded-md">
        <BottomSliderCard />
      </div>
      <div className="w-full my-8 flex justify-center">
        <button className="h-12 w-80 border rounded-md border-blue-darker text-blue-darker font-bold">
          Alle Transporter anzeigen
        </button>
      </div>
    </div>
  );
}

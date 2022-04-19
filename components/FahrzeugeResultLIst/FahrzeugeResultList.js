import { useStore } from "../store";
import { useState, useEffect } from "react";

import ButtonForAlleTransporter from "../Sliders/ButtonForAlleTransporter";
import Link from "next/link";
import Image from "next/image";
import CarInfoCard from "./CarInfoCard";
const FahrzeugeResultList = ({ sortedCars, getCarsReview }) => {
  const { state, dispatch } = useStore();

  return (
    <div className="flex flex-col flex-1 lg:w-full lg:bg-white">
      {sortedCars?.map((carItem, index) => {
        return (
          <div className="flex flex-col mt-4 lg:flex-row" key={index}>
            <CarInfoCard carItem={carItem} getCarsReview={getCarsReview} />
          </div>
        );
      })}
    </div>
  );
};
export default FahrzeugeResultList;

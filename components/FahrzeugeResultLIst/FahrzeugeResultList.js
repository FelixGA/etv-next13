import { useStore } from "../store";
import { useState, useEffect } from "react";

import ButtonForAlleTransporter from "../Sliders/ButtonForAlleTransporter";
import Link from "next/link";
import Image from "next/image";
import CarInfoCard from "./CarInfoCard";
import Funnel from "../Caradvisor/Funnel";
import CompareTool from "../repeated/CompareTool";
const FahrzeugeResultList = ({
  sortedCars,
  getCarsReview,
  getContent,
  getMarkdownContext,
}) => {
  const { state, dispatch } = useStore();
  // console.log(getContent, "getcontent from FahrzeugeResultList");

  return (
    <div className="flex flex-col flex-1 mb-10 lg:w-full lg:bg-white">
      {sortedCars
        ?.map((carItem, index) => {
          return (
            <div className="flex flex-col mt-4 lg:flex-row" key={index}>
              <CarInfoCard
                carItem={carItem}
                getCarsReview={getCarsReview}
                objectFit={"cover"}
              />
            </div>
          );
        })
        .slice(0, 5)}
      {/* <CompareTool
        getContent={getContent}
        getMarkdownContext={getMarkdownContext}
      /> */}
      {sortedCars
        ?.map((carItem, index) => {
          return (
            <div className="flex flex-col mt-4 lg:flex-row" key={index}>
              {/* {index == 10 && (
              <div className="w-full border-4 ">
                <Funnel />
              </div>
            )} */}

              <CarInfoCard carItem={carItem} getCarsReview={getCarsReview} />
            </div>
          );
        })
        .slice(6, 10)}
      <Funnel />
      {sortedCars
        ?.map((carItem, index) => {
          return (
            <div className="flex flex-col mt-4 lg:flex-row" key={index}>
              {/* {index == 10 && (
              <div className="w-full border-4 ">
                <Funnel />
              </div>
            )} */}

              <CarInfoCard carItem={carItem} getCarsReview={getCarsReview} />
            </div>
          );
        })
        .slice(11)}
    </div>
  );
};
export default FahrzeugeResultList;

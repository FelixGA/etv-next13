import React from "react";
import { useState } from "react";
import { useStore } from "../store";

function SortDesktop() {
  const { state, dispatch } = useStore();

  const sortBy = {
    id: 1,
    title: "Sortieren nach",
    firstRange: "Empfohlen",
    secondRange: "Niedrigster Preis",
    thirdRange: "Höchster Preis",
    forthRange: "Bestseller",
    fifthRange: "Beste Ladenzeit",
    sixthRange: "Höchste Zuladung",
    seventhRange: "Höchste Reichweite",
    eighthRange: "Höchste Vmax",
  };
  const [isChecked, setIsChecked] = useState("");
  return (
    <div className="sm:hidden md:flex items-center bg-white border rounded-md">
      <div className="flex flex-col ml-4 mt-2 items-start">
        <div className=" flex flex-row my-2">
          <input
            className=" appearance-none w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("recommended");
              isChecked;
              /*  dispatch({ type: "NOT READU", data: NOT READU }); */
              dispatch({
                type: "activeSortValue",
                data: sortBy.firstRange,
              });
            }}
            checked={isChecked == "recommended" ? true : false}
            type="checkbox"
            id="recommended"
            name="recommended"
          ></input>
          <label
            forhtml="recommended"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] text-lg font-thin"
          >
            {sortBy.firstRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2  mr-4">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("lowest");
              isChecked;
              dispatch({ type: "lowest", data: sortBy.secondRange });
              dispatch({ type: "activeSortValue", data: sortBy.secondRange });
            }}
            checked={isChecked == "lowest" ? true : false}
            type="checkbox"
            id="lowest"
            name="lowest"
          ></input>
          <label
            forhtml="lowest"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {sortBy.secondRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("highest");
              isChecked;
              dispatch({ type: "highest", data: !sortBy.thirdRange });
              dispatch({
                type: "activeSortValue",
                data: sortBy.thirdRange,
              });
            }}
            /*  */

            checked={isChecked == "highest" ? true : false}
            type="checkbox"
            id="highest"
            name="highest"
          ></input>
          <label
            forhtml="highest"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {sortBy.thirdRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("best");
              isChecked;
              /*  dispatch({ type: "NOT READU", data: NOT READU }); */
              dispatch({
                type: "activeSortValue",
                data: sortBy.forthRange,
              });
            }}
            checked={isChecked == "best" ? true : false}
            type="checkbox"
            id="best"
            name="best"
          ></input>
          <label
            forhtml="best"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.forthRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("ChargingTime");
              isChecked;
              dispatch({
                type: "sortChargingTime",
                data: sortBy.fifthRange,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.fifthRange,
              });
            }}
            checked={isChecked == "ChargingTime" ? true : false}
            type="checkbox"
            id="ChargingTime"
            name="ChargingTime"
          ></input>
          <label
            forhtml="ChargingTime"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.fifthRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("highestWeight");
              isChecked;
              dispatch({
                type: "highestWeight",
                data: !state.highestWeights,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.sixthRange,
              });
            }}
            checked={isChecked == "highestWeight" ? true : false}
            type="checkbox"
            id="highestWeight"
            name="highestWeight"
          ></input>
          <label
            forhtml="highestWeight"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.sixthRange}
          </label>
        </div>

        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("highestRange");
              isChecked;
              dispatch({
                type: "highestRange",
                data: !state.highestRanges,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.seventhRange,
              });
            }}
            checked={isChecked == "highestRange" ? true : false}
            type="checkbox"
            id="highestRange"
            name="highestRange"
          ></input>
          <label
            forhtml="highestRange"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.seventhRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              setIsChecked("highestVmax");
              isChecked;
              dispatch({
                type: "highestVmax",
                data: !state.highestVmaxs,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.eighthRange,
              });
            }}
            checked={isChecked == "highestVmax" ? true : false}
            type="checkbox"
            id="highestVmax"
            name="highestVmax"
          ></input>
          <label
            forhtml="highestVmax"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.eighthRange}
          </label>
        </div>
      </div>
    </div>
  );
}

export default SortDesktop;

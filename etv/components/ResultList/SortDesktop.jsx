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

  return (
    <div className="sm:hidden md:flex items-center bg-white border rounded-md">
      <div className="flex flex-col ml-4 mt-2 items-start">
        <div className=" flex flex-row my-2">
          <input
            className=" appearance-none w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              /*  dispatch({ type: "NOT READU", data: NOT READU }); */
              dispatch({
                type: "activeSortValue",
                data: sortBy.firstRange,
              });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] text-lg font-thin"
          >
            {sortBy.firstRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2  mr-4">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({ type: "lowest", data: !state.lowests });
              dispatch({ type: "activeSortValue", data: sortBy.secondRange });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {sortBy.secondRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({ type: "highest", data: !state.highests });
              dispatch({
                type: "activeSortValue",
                data: sortBy.thirdRange,
              });
            }}
            /*  */

            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {sortBy.thirdRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              /*  dispatch({ type: "NOT READU", data: NOT READU }); */
              dispatch({
                type: "activeSortValue",
                data: sortBy.forthRange,
              });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.forthRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({
                type: "sortChargingTime",
                data: !state.sortChargingTimes,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.fifthRange,
              });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.fifthRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({
                type: "highestWeight",
                data: !state.highestWeights,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.sixthRange,
              });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.sixthRange}
          </label>
        </div>

        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({
                type: "highestRange",
                data: !state.highestRanges,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.seventhRange,
              });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
            {sortBy.seventhRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({
                type: "highestVmax",
                data: !state.highestVmaxs,
              });
              dispatch({
                type: "activeSortValue",
                data: sortBy.eighthRange,
              });
            }}
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
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

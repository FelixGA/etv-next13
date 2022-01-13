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
      </div>
    </div>
  );
}

export default SortDesktop;

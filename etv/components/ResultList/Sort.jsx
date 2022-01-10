import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import { BsSortDown } from "react-icons/bs";

import { useState } from "react";
import { useStore } from "../store";

function Sort() {
  const { state, dispatch } = useStore();

  const sortBy = {
    id: 1,
    title: "Sortieren nach",
    firstRange: "Empfohlen",
    secondRange: "Niedrigster Preis",
    thirdRange: "Höchster Preis",
    forthRange: "Bestseller",
  };
  const [truncate, setTruncate] = useState(false);
  console.log(state.highests);
  return (
    <div className="block md:hidden">
      <div
        className="mb-1 cursor-pointer"
        onClick={() => setTruncate(!truncate)}
      >
        <div className="flex flex-row justify-between border-b ">
          <div className="flex flex-row ">
            <div className="  ml-5 mt-6 ">
              <BsSortDown size={20} />
            </div>
            <div className="pl-4 my-auto mt-2">
              <h4 className="py-3  font-bold text-blue-dark text-base">
                {sortBy.title}
              </h4>
            </div>
          </div>
          <div className="w-3 mr-6 mt-6">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={truncate ? "flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
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
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            onChange={() => {
              dispatch({ type: "lowest", data: !state.lowests });
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

export default Sort;

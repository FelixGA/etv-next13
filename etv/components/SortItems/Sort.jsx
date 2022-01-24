import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import { useState } from "react";
import { useStore } from "../store";

function Sort() {
  const { state, dispatch } = useStore();

  const sortBy2 = [
    { title: "Sortieren nach" },
    {
      sortCategory: "Empfohlen",
      sortType: 1,
    },
    { sortCategory: "Niedrigster Preis", sortType: "lowest" },
    { sortCategory: "Höchster Preis", sortType: "highest" },
    { sortCategory: "Bestseller", sortType: "bestseller" },
    { sortCategory: "Beste Ladenzeit", sortType: "ChargingTime" },
    { sortCategory: "Höchste Zuladung", sortType: "highestWeight" },
    { sortCategory: "Höchste Reichweite", sortType: "highestRange" },
    { sortCategory: "Höchste Vmax", sortType: "highestVmax" },
  ];
  const [truncate, setTruncate] = useState(false);
  const [isChecked, setIsChecked] = useState("");
  const getAllSortings = sortBy2.map((rank) => {
    return (
      <div key={rank.sortCategory} className="mt-1 flex flex-row py-2  mr-4">
        <input
          className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
          onChange={() => {
            setIsChecked(rank?.sortType);
            dispatch({ type: "activeSortValue", data: rank?.sortCategory });
          }}
          checked={isChecked == rank?.sortType ? true : false}
          type="checkbox"
          id={rank?.sortCategory}
          name={rank?.sortCategory}
        ></input>
        <label
          forhtml={rank?.sortCategory}
          className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
        >
          {rank?.sortCategory}
        </label>
      </div>
    );
  });
  return (
    <div className="block md:hidden ">
      <div
        className="py-2 cursor-pointer"
        onClick={() => setTruncate(!truncate)}
      >
        <div className="flex flex-row justify-between border-b ">
          <div className="flex flex-row ">
            <div className="  ml-5 my-auto">
              <BsSortDown size={20} />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className="py-3  font-bold text-blue-dark text-md">
                {sortBy2[0].title}
              </h4>
            </div>
          </div>
          <div className="w-3 mr-8 my-auto">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={truncate ? "flex flex-col ml-4 mt-2" : "hidden"}>
        {getAllSortings}
      </div>
    </div>
  );
}

export default Sort;

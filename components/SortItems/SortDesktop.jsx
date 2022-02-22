import { useState } from "react";
import { useStore } from "../store";

function SortDesktop() {
  const { state, dispatch } = useStore();

  const sortBy2 = [
    {
      sortCategory: "Empfohlen",
      sortType: 1,
    },
    { sortCategory: "Niedrigster Preis", sortType: "lowest" },
    { sortCategory: "Höchster Preis", sortType: "highest" },
    { sortCategory: "Bestseller", sortType: "bestseller" },
    { sortCategory: "Beste Ladenzeit", sortType: "chargingTimeLithium" },
    { sortCategory: "Höchste Zuladung", sortType: "highestWeight" },
    { sortCategory: "Höchste Reichweite", sortType: "highestRange" },
    { sortCategory: "Höchste Vmax", sortType: "highestVmax" },
  ];
  const [isChecked, setIsChecked] = useState("");
  const getAllSortings = sortBy2.map((rank) => {
    return (
      <div
        onClick={() => {
          setIsChecked(rank?.sortType);
          dispatch({ type: "activeSortValue", data: rank?.sortCategory });
        }}
        key={rank.sortType}
        className="mt-1 flex flex-row py-2  mr-4 "
      >
        <input
          className=" appearance-none w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
          onChange={() => {
            return null;
          }}
          checked={isChecked == rank?.sortType ? true : false}
          type="checkbox"
          id={rank?.sortCategory}
          name={rank?.sortCategory}
        ></input>
        <label
          forhtml={rank?.sortCategory}
          className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
        >
          {rank?.sortCategory}
        </label>
      </div>
    );
  });
  return (
    <div className="hidden md:flex items-center bg-white border rounded-md mt-2 z-10 w-64 xl:mr-0">
      <div className="flex flex-col pl-4 items-start">{getAllSortings}</div>
    </div>
  );
}

export default SortDesktop;

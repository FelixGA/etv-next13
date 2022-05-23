import { useState, useEffect } from "react";
import { useStore } from "../store";
const sortBy2 = [
  {
    sortCategory: "Alphabet",
    sortType: "alphabetical",
  },
  {
    sortCategory: "Niedrigster Preis",
    sortType: "lowest",
  },

  {
    sortCategory: "Höchster Preis",
    sortType: "highest",
  },

  {
    sortCategory: "Beste Ladenzeit",
    sortType: "chargingTimeLithium",
  },
  {
    sortCategory: "Höchste Zuladung",
    sortType: "highestWeight",
  },
  {
    sortCategory: "Höchste Reichweite",
    sortType: "highestRange",
  },
  // {
  //   sortCategory: sortingCate[7],
  //   sortType: "highestVmax",
  // },
];
function SortDesktop() {
  const { state, dispatch } = useStore();
  const [SortArray, setSortArray] = useState(sortBy2);
  const [isChecked, setIsChecked] = useState("");

  return (
    <div className="hidden md:flex items-center bg-white border rounded-md mt-2 z-10 w-64 xl:mr-0">
      <div className="flex flex-col pl-4 items-start">
        {SortArray.map((rank, index) => {
          return (
            <div
              onClick={() => {
                setIsChecked(rank?.sortCategory);
                dispatch({
                  type: "activeSortValue",
                  data: [
                    {
                      sortType: rank.sortType,
                      sortCategory: rank.sortCategory,
                    },
                  ],
                });
              }}
              key={index}
              className="mt-1 flex flex-row py-2 mr-4 "
            >
              <input
                className=" appearance-none w-6 h-6 tex text-xl border border-[#7D94AE] rounded-lg text-white checked:text-white checked:bg-blue-dark  after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
                onChange={() => {
                  return null;
                }}
                checked={isChecked == rank?.sortCategory ? true : false}
                type="checkbox"
                id={rank?.sortCategory}
                name={rank?.sortCategory}
              ></input>
              <label
                forhtml={rank?.sortCategory}
                className="inline-flex items-center cursor-pointer pl-5 text-lg tracking-wide text-blue-extra "
              >
                {rank?.sortCategory}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SortDesktop;

import { useState, useEffect } from "react";
import { useStore } from "../store";

function SortDesktop({ getContent }) {
  const { state, dispatch } = useStore();
  const [SortArray, setSortArray] = useState([]);
  const [isChecked, setIsChecked] = useState("");
  useEffect(() => {
    let sortingCate = getContent.content[2].markdown
      .split(", ")
      .map((el) => el);
    const sortBy2 = [
      // {
      //   sortCategory: sortingCate[0],
      //   sortType: 1,
      // },
      {
        sortCategory: "Niedrigster Preis",
        sortType: "lowest",
      },
      {
        sortCategory: "Höchster Preis",
        sortType: "highest",
      },
      // {
      //   sortCategory: sortingCate[3],
      //   sortType: "bestseller",
      // },
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
    //lowest price as in initial state
    dispatch({
      type: "activeSortValue",
      data: [
        {
          sortType: sortBy2[1].sortType,
          sortCategory: sortBy2[1].sortCategory,
        },
      ],
    });
    setSortArray(sortBy2);
  }, [getContent]);

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
              className="mt-1 flex flex-row py-2  mr-4 "
            >
              <input
                className=" appearance-none w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
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
                className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-blue-extra "
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

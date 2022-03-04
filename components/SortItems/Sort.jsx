import { MdKeyboardArrowDown } from "react-icons/md";
import { BsSortDown } from "react-icons/bs";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {
    y: -1000,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -1000,
    opacity: 0,
  },
};

function Sort({ getContent }) {
  const { state, dispatch } = useStore();
  const [SortArray, setSortArray] = useState([]);
  const [truncate, setTruncate] = useState(false);
  const [isChecked, setIsChecked] = useState("");

  useEffect(() => {
    let sortingCate = getContent.content[2].markdown
      .split(", ")
      .map((el) => el);
    const sortBy2 = [
      {
        sortCategory: sortingCate[0],
        sortType: 1,
      },
      {
        sortCategory: sortingCate[1],
        sortType: "lowest",
      },
      {
        sortCategory: sortingCate[2],
        sortType: "highest",
      },
      {
        sortCategory: sortingCate[3],
        sortType: "bestseller",
      },
      {
        sortCategory: sortingCate[4],
        sortType: "chargingTimeLithium",
      },
      {
        sortCategory: sortingCate[5],
        sortType: "highestWeight",
      },
      {
        sortCategory: sortingCate[6],
        sortType: "highestRange",
      },
      {
        sortCategory: sortingCate[7],
        sortType: "highestVmax",
      },
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
    <div className="block md:hidden">
      <div
        className=" cursor-pointer"
        onClick={() => {
          setTruncate(!truncate);
        }}
      >
        <div className="flex justify-between border-b   py-1 ">
          <div className="flex ">
            <div className="ml-5 my-auto">
              <BsSortDown size={20} fill="#1F1E80" />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className="py-3  font-bold text-blue-dark text-md">
                {getContent?.content[2].name} ↬{" "}
                {state?.activeSortValues[0]?.sortCategory}
              </h4>
            </div>
          </div>
          <div
            className={
              truncate
                ? "flex items-center w-6 mr-6 my-auto transition transform rotate-180 origin-center	"
                : "flex items-center w-6 mr-6 my-auto transition transform rotate-0 origin-center	 "
            }
          >
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {truncate && (
          <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
            className={truncate ? "flex flex-col ml-4 mt-2" : "hidden"}
          >
            {SortArray.map((rank) => {
              return (
                <div
                  onClick={() => {
                    setIsChecked(rank?.sortType);
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
                  key={rank.sortCategory}
                  className="mt-1 flex flex-row py-2  mr-4"
                >
                  <input
                    className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
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
                    className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-blue-extra"
                  >
                    {rank?.sortCategory}
                  </label>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sort;

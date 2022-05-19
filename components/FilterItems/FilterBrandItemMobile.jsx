import Image from "next/image";
import { useStore } from "../store";
import { MdKeyboardArrowDown } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";

import FilterCheckboxMobile from "./FilterCheckboxMobile";

const variants = {
  enter: {
    y: -500,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -500,
    opacity: 0,
  },
};

function FilterBrandItemMobile({ item }) {
  const { state, dispatch } = useStore();
  /* to render the four ranges */
  return (
    <div className="bg-white border-b">
      <div
        className=" cursor-pointer bg-white"
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== item.title ? item.title : "",
          });
        }}
      >
        <div className="flex flex-row justify-between border-b py-4 flex-1 bg-white">
          <div className="flex flex-row  ">
            <div className="w-6 h-6 ml-4 ">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className=" font-bold text-blue-darker">Hersteller</h4>
            </div>
          </div>
          <div className="flex flex-row">
            <span
              className={
                state.brands.length > 0
                  ? "flex text-green-700 text-xl h-6 "
                  : "hidden"
              }
            >
              ✓
            </span>
            <div
              className={
                state?.truncates == item.title
                  ? "flex items-center w-6 mr-6 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-6 mr-6 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          state?.truncates == item.title
            ? "flex flex-col ml-4 mt-2 mb-2"
            : "hidden"
        }
      >
        {/* RENDERING THE FOUR RANGES */}
        <AnimatePresence initial={false}>
          {state?.truncates == item.title && (
            <motion.div
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "Inertia", duration: 0.1 }}
            >
              <p
                className="text-sm cursor-pointer ml-auto pr-4"
                onClick={() => {
                  dispatch({
                    type: "brand",
                    data: [],
                  });
                }}
              >
                alle löschen
              </p>
              {item.map((checkbox, index) => (
                <div
                  onClick={() => {
                    dispatch({
                      type: "brand",
                      /*   data: selectedBrands, */
                      data: state?.brands.includes(checkbox.slug)
                        ? [
                            ...state?.brands.filter(
                              (brand) => brand !== checkbox.slug
                            ),
                            checkbox.slug,
                          ]
                        : [...state?.brands, checkbox.slug],
                    });
                  }}
                  key={index}
                  className="mt-1 flex flex-row py-2 "
                >
                  <FilterCheckboxMobile
                    checkbox={checkbox}
                  ></FilterCheckboxMobile>
                  <label
                    forhtml={checkbox.title}
                    className="inline-flex items-center cursor-pointer pl-5 tracking-wide text-lg text-blue-extra"
                  >
                    {checkbox.title}
                  </label>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default FilterBrandItemMobile;

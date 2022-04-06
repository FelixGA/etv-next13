import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import FilterCheckbox from "./FilterCheckbox";
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

const filterTitles = [
  "Preis",
  "Reichweite",
  "Zuladung",
  "Hochgeschwindigkeit",
  "Ladezeit",
  "Aufbautyp",
];

function FilterItemDesktop({ item }) {
  // const item = props.item;
  const { state, dispatch } = useStore();

  /* to render the four ranges */

  return (
    <>
      {/* truncate state */}
      <div
        className="cursor-pointer relative z-40 bg-white w-full h-18 flex items-center"
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== item.title ? item.title : "",
          });
        }}
      >
        <div className="flex justify-between border-b py-4 flex-1 bg-white items-center ">
          <div className="flex items-center pl-8 justify-center">
            <div className="w-8 h-full">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto">
              <h4 className=" font-bold text-blue-darker">{item.title}</h4>
            </div>
          </div>
          <div className="flex">
            <span
              className={
                state[item.category].length > 0
                  ? "flex text-green-700 text-xl h-6"
                  : "hidden"
              }
            >
              ✓
            </span>
            <div
              className={
                state?.truncates == item.title
                  ? "flex items-center w-6 mr-5 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-6 mr-5 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={25} fill="#030F1C" />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {state?.truncates == item.title && (
          <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
            className="flex flex-col ml-8 -z-50"
          >
            {/* RENDERING THE FOUR RANGES */}
            {item.options.map((checkbox, index) => (
              <div
                onClick={() => {
                  dispatch({
                    type: checkbox.categoryName,
                    data:
                      checkbox.categoryName == "price"
                        ? [{ min: checkbox.value, max: checkbox.max }]
                        : [{ min: checkbox.value, max: 100000 }],
                  });
                }}
                key={index}
                className="mt-4 flex cursor-pointer py-2 last-of-type:pb-4 last-of-type:shadow-sm"
              >
                <FilterCheckbox
                  checkbox={checkbox}
                  name={checkbox.categoryName}
                  value={checkbox.value}
                  id={checkbox.id}
                  category={item.category}
                  key={checkbox.value}
                ></FilterCheckbox>
                <label
                  forhtml={checkbox.name}
                  className="inline-flex items-center  pl-5 text-lg text-blue-extra "
                >
                  {checkbox.name}
                </label>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilterItemDesktop;

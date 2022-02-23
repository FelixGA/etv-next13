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

function FilterItemDesktop({ item, getContent }) {
  // const item = props.item;
  const { state, dispatch } = useStore();
  console.log(getContent);
  // let getContent = props.getContent;
  /* to render the four ranges */
  const rangesForCheckboxes = item.options.map((checkbox, index) => (
    <div
      onClick={() => {
        dispatch({
          type: checkbox.categoryName,
          data:
            checkbox.categoryName == "price"
              ? [{ min: checkbox.value, max: checkbox.max }]
              : [{ min: checkbox.value, max: 99999 }],
        });
      }}
      key={index}
      className="mt-4 flex cursor-pointer py-2 "
    >
      <FilterCheckbox checkbox={checkbox} getContent={getContent} />
      <label
        forhtml={checkbox.name}
        className="inline-flex items-center  pl-5 text-lg text-[#2C3F53] "
      >
        {checkbox.name}
      </label>
    </div>
  ));
  return (
    <>
      <div
        className=" cursor-pointer relative z-50 bg-white w-full "
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== item.title ? item.title : "",
          });
        }}
      >
        <div className="flex flex-row justify-between border-b py-4 flex-1 bg-white  ">
          <div className="flex flex-row pl-4  ">
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
              <h4 className=" font-bold text-blue-darker">{item.title}</h4>
            </div>
          </div>
          <div className="flex flex-row  ">
            <span
              className={
                state[item.category].length > 0
                  ? "flex text-green-700 text-xl "
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
            transition={{ type: "tween", duration: 0.2 }}
            className="flex flex-col ml-8 -z-50"
          >
            {/* RENDERING THE FOUR RANGES */}
            {rangesForCheckboxes}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FilterItemDesktop;

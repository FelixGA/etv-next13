import Image from "next/image";

import { MdKeyboardArrowDown } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import FilterCheckboxMobile from "./FilterCheckboxMobile";

function FilterItemMobile(props) {
  const item = props.item;
  const [truncate, setTruncate] = useState(false);
  const [rotateIt, setRotateIt] = useState(false);
  const { state, dispatch } = useStore();
  /* to render the four ranges */
  const rangesForCheckboxesmMobile = item.options.map((checkbox, index) => (
    <div
      onClick={() => {
        dispatch({
          type: checkbox.categoryName,
          data: [{ min: checkbox.value, max: 99999 }],
        });
      }}
      key={uuidv4()}
      className="mt-1 flex flex-row py-2 "
    >
      <FilterCheckboxMobile checkbox={checkbox} />

      <label
        forhtml="categories"
        className="inline-flex items-center cursor-pointer pl-5 # font-thin text-lg text-[#2C3F53]"
      >
        {checkbox.name}
      </label>
    </div>
  ));
  return (
    <div>
      <div
        className=" cursor-pointer "
        onClick={() => {
          dispatch({
            type: "truncate",
            data: state?.truncates !== item.category ? item.category : "",
          });
          setRotateIt(!rotateIt);
        }}
      >
        <div className="flex flex-row justify-between border-b py-4  w-full  ">
          <div className="flex flex-row  ">
            <div className="w-6 h-6 ml-4 ">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
                unoptimized={true}
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className=" font-bold text-[#1F1E80]">{item.category}</h4>
            </div>
          </div>
          <div
            className={
              state?.truncates == item.category
                ? "flex items-center w-6 mr-6 my-auto transition transform rotate-180 origin-center	"
                : "flex items-center w-6 mr-6 my-auto transition transform rotate-0 origin-center	 "
            }
          >
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          state?.truncates == item.category
            ? "flex flex-col ml-4 mt-2"
            : "hidden"
        }
      >
        {/* RENDERING THE FOUR RANGES */}
        {rangesForCheckboxesmMobile}
      </div>
    </div>
  );
}

export default FilterItemMobile;

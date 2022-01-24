import Image from "next/image";

import { MdKeyboardArrowDown } from "react-icons/md";

import { useState, useEffect } from "react";
import { useStore } from "../store";
import FilterCheckbox from "./FilterCheckbox";
import FilterCheckboxMobile from "./FilterCheckboxMobile";
function FilterItemMobile(props) {
  const item = props.item;
  const [truncate, setTruncate] = useState(false);
  const { state, dispatch } = useStore();
  /* to render the four ranges */
  const rangesForCheckboxesmMobile = item.options.map((checkbox) => (
    <div className="mt-1 flex flex-row py-2 ">
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
      <div className=" cursor-pointer " onClick={() => setTruncate(!truncate)}>
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
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className=" font-bold text-[#1F1E80]">{item.category}</h4>
            </div>
          </div>
          <div className="w-4  mr-7 ">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={truncate ? "flex flex-col ml-4 mt-2" : "hidden"}>
        {/* RENDERING THE FOUR RANGES */}
        {rangesForCheckboxesmMobile}
      </div>
    </div>
  );
}

export default FilterItemMobile;

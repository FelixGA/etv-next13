import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilterCheckbox from "./FilterCheckbox";

function FilterItemDesktop(props) {
  const item = props.item;

  const [trunc, setTrunc] = useState(false);
  const [rotateIt, setRotateIt] = useState(false);

  /* to render the four ranges */
  const rangesForCheckboxes = item.options.map((checkbox, index) => (
    <div key={uuidv4()} className="mt-4 flex  py-2 ">
      <FilterCheckbox checkbox={checkbox} />

      <label
        forhtml="firstRange"
        className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53] "
      >
        {checkbox.name}
      </label>
    </div>
  ));
  return (
    <>
      <div
        className=" cursor-pointer"
        onClick={() => {
          setTrunc(!trunc);
          setRotateIt(!rotateIt);
        }}
      >
        <div className="flex flex-row justify-between border-b py-4  w-full  ">
          <div className="flex flex-row pl-4 ">
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
              rotateIt
                ? "flex items-center w-6 mr-5 my-auto transition transform rotate-180 origin-center	"
                : "flex items-center w-6 mr-5 my-auto transition transform rotate-0 origin-center	 "
            }
          >
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={trunc ? "flex flex-col ml-8 " : "hidden"}>
        {/* RENDERING THE FOUR RANGES */}
        {rangesForCheckboxes}
      </div>
    </>
  );
}

export default FilterItemDesktop;

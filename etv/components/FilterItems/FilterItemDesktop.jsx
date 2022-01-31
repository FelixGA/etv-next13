import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilterCheckbox from "./FilterCheckbox";
import { useStore } from "../store";
function FilterItemDesktop(props) {
  const item = props.item;
  const { state, dispatch } = useStore();
  const [trunc, setTrunc] = useState(false);

  /* to render the four ranges */
  const rangesForCheckboxes = item.options.map((checkbox, index) => (
    <div
      onClick={() => {
        dispatch({
          type: checkbox.categoryName,
          data: [{ min: checkbox.value, max: 99999 }],
        });
      }}
      key={uuidv4()}
      className="mt-4 flex cursor-pointer py-2  "
    >
      <FilterCheckbox checkbox={checkbox} />

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
      <div className=" cursor-pointer" onClick={() => setTrunc(!trunc)}>
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
          <div className="w-4  mr-7 ">
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

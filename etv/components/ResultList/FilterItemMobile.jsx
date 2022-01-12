import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function FilterItemMobile(props) {
  const [truncate, setTruncate] = useState(false);

  return (
    <div>
      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncate(!truncate)}
      >
        <div className="flex flex-row justify-between border-b ">
          <div className="flex flex-row">
            <div className="w-6  ml-4 mt-4">
              <Image
                src={props.item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto mt-2">
              <h4 className="py-3 font-bold text-blue-dark text-base">
                {props.item.title}
              </h4>
            </div>
          </div>
          <div className="w-3 mr-6 mt-5">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={truncate ? "flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {props.item.firstRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {props.item.secondRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {props.item.thirdRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            {props.item.forthRange}
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterItemMobile;

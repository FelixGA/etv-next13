import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

function FilterItemDesktop(props) {
  const [truncDistance, setTruncDistance] = useState(false);

  return (
    <div className="">
      <div
        className=" cursor-pointer"
        onClick={() => setTruncDistance(!truncDistance)}
      >
        <div className="flex flex-row justify-between border-b py-4  w-full ">
          <div className="flex flex-row ">
            <div className="w-6 h-6 ml-4 ">
              <Image
                src={props.item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto ">
              <h4 className=" font-bold text-blue-dark">{props.item.title}</h4>
            </div>
          </div>
          <div className="w-4  mr-4 ">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={truncDistance ? "flex flex-col ml-4 " : "hidden"}>
        <div className=" flex flex-row  pt-4">
          <input
            className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg "
          >
            {props.item.firstRange}
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
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
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
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
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
          >
            {props.item.forthRange}
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterItemDesktop;

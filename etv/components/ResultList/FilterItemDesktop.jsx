import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

function FilterItemDesktop(props) {
  const [trunc, setTrunc] = useState(false);
  const [rangeIsChecked, setRangeIsChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  /*  const [isChecked, setIsChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false); */

  /* const handleOnChange = () => {
    setIsChecked(!isChecked);
  }; */
  return (
    <div className="">
      <div className=" cursor-pointer" onClick={() => setTrunc(!trunc)}>
        <div className="flex flex-row justify-between border-b py-4  w-full  ">
          <div className="flex flex-row pl-4 ">
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
              <h4 className=" font-bold text-[#1F1E80]">{props.item.title}</h4>
            </div>
          </div>
          <div className="w-4  mr-7 ">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className={trunc ? "flex flex-col ml-8 " : "hidden"}>
        <div className="mt-4 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53] "
          >
            {props.item.firstRange.firstRangeInner}
          </label>
        </div>
        <div className="mt-1 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            onClick={() => setIsChecked(!isChecked)}
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53]"
          >
            {props.item.secondRange}
          </label>
        </div>
        <div className="mt-1 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            onClick={() => setIsChecked(!isChecked)}
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53]"
          >
            {props.item.thirdRange}
          </label>
        </div>
        <div className="mt-1 flex  py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            onClick={() => setIsChecked(!isChecked)}
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg text-[#2C3F53]"
          >
            {props.item.forthRange}
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterItemDesktop;

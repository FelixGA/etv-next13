import arrowDown from "../../public/images/Chevron_down.png";

import Image from "next/image";
import { useState } from "react";

function FilterItem(props) {
  const [truncDistance, setTruncDistance] = useState(false);

  // const filtersData = [
  //   {
  //     id: 1,
  //     title: "Reichweite",
  //     firstRange: "bis 100km",
  //     secondRange: "bis 250km",
  //     thirdRange: "bis 500km",
  //     forthRange: "mind. 12400km",
  //     image: image,
  //   },
  //   {
  //     id: 2,
  //     title: "Zuladung",
  //     firstRange: "bis 100kg",
  //     secondRange: "bis 250kg",
  //     thirdRange: "bis 500kg",
  //     forthRange: "mind. 12400kg",
  //     image: image2,
  //   },
  //   {
  //     id: 3,
  //     title: "Höchstgeschwindigkeit",
  //     firstRange: "bis 80km/h",
  //     secondRange: "bis 120km/h",
  //     thirdRange: "bis 300km/h",
  //     forthRange: "mind. Mach 5",
  //     image: image3,
  //   },
  //   {
  //     id: 4,
  //     title: "Weitere Filter",
  //     firstRange: "Anschluss Typ2",
  //     secondRange: "Anschluss Schuko",
  //     thirdRange: "Anschluss Typ2",
  //     forthRange: "Anschluss Schuko",
  //     image: image3,
  //   },
  // ];
  // console.log(filtersData);
  return (
    <div>
      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncDistance(!truncDistance)}
      >
        <div className="flex flex-row justify-between border-b ">
          <div className="flex flex-row ">
            <div className="w-6 mt-8 ml-4 ">
              <Image
                src={props.item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto mt-6">
              <h4 className="py-3 font-bold text-blue-dark">
                {props.item.title}
              </h4>
            </div>
          </div>
          <div className="w-3 mr-4 mt-11">
            <Image
              src={arrowDown}
              alt="filter icon"
              objectFit="cover"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className={truncDistance ? "flex flex-col ml-4 mt-2" : "hidden"}>
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

export default FilterItem;

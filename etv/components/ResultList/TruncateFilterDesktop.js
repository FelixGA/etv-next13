import arrowDown from "../../public/images/Chevron_down.png";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import FilterItem from "./FilterItem";
import Image from "next/image";
import { useState } from "react";

function TruncateFilterDesktop() {
  const [truncPrice, setTruncPrice] = useState(false);
  // const [truncDistance, setTruncDistance] = useState(false);
  // const [truncLoad, setTruncLoad] = useState(false);
  // const [truncSpeed, setTruncSpeed] = useState(false);
  // const [truncMoreFilters, setTruncMoreFilters] = useState(false);
  return (
    <div className="w-full relative bottom-4 mr-8 ">
      {/* Preis */}
      <div
        className="my-1 cursor-pointer "
        onClick={() => setTruncPrice(!truncPrice)}
      >
        <div className="flex flex-row justify-between border-b">
          <div className="flex flex-row">
            <div className="w-6 my-auto ml-4 ">
              <Image
                src={image4}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="my-auto pl-4">
              <h4 className="py-3 font-bold text-blue-dark">Preis</h4>
            </div>
          </div>
          <div className="w-3 mr-4 my-auto">
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
      <div className={truncPrice ? " flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            defaultChecked
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
          >
            3000-9000 €
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
            3000-9000 €
          </label>
        </div>
        {/* min max buttons */}
        <div className="wrapper py-4 flex flex-row justify-start">
          <div className="flex py-2 mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="min €"
              className="pl-4 w-18"
            />
          </div>
          <div className="flex py-2  mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="max €"
              className="pl-4 w-18"
            />
          </div>
        </div>
      </div>
      {/* Reichweite */}

      <FilterItem />
      {/* Zuladung */}

      {/* Höchstgeschwindigkeit */}

      {/* Weitere Filter */}
    </div>
  );
}

export default TruncateFilterDesktop;

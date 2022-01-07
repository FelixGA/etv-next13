import React from "react";
import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import arrowDown from "../../public/images/Chevron_down.png";
import { useState } from "react";
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
function Sort() {
  const sortBy = {
    id: 1,
    title: "Sortieren nach",
    firstRange: "Empfohlen",
    secondRange: "Niedrigster Preis",
    thirdRange: "Höchster Preis",
    forthRange: "Bestseller",
  };
  const [truncate, setTruncate] = useState(false);
  return (
    <div className="block md:hidden">
=======

function FilterItem(props) {
  const [truncDistance, setTruncDistance] = useState(false);
  const [truncLoad, setTruncLoad] = useState(false);
  const [truncSpeed, setTruncSpeed] = useState(false);
  const [truncMoreFilters, setTruncMoreFilters] = useState(false);

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
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncate(!truncate)}
      >
        <div className="flex flex-row justify-between border-b ">
          <div className="flex flex-row">
            <div className="w-6  ml-4 mt-4">
              <Image
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
                src={image3}
=======
                src={props.item.image}
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
            <div className="pl-4 my-auto mt-2">
              <h4 className="py-3 font-bold text-blue-dark text-base">
                {sortBy.title}
=======
            <div className="pl-4 my-auto mt-6">
              <h4 className="py-3 font-bold text-blue-dark">
                {props.item.title}
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
              </h4>
            </div>
          </div>
          <div className="w-3 mr-4 mt-7">
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
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] text-lg font-thin"
          >
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
            {sortBy.firstRange}
=======
            {props.item.firstRange}
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
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
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
            {sortBy.secondRange}
=======
            {props.item.secondRange}
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
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
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
            {sortBy.thirdRange}
=======
            {props.item.thirdRange}
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
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
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53] "
          >
<<<<<<< HEAD:etv/components/ResultList/Sort.jsx
            {sortBy.forthRange}
=======
            {props.item.forthRange}
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106:etv/components/ResultList/FilterItem.jsx
          </label>
        </div>
      </div>
    </div>
  );
}

export default Sort;

import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import FilterItemDesktop from "./FilterItemDesktop";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useStore } from "../store";

function TruncateFilterDesktop() {
  const { state, dispatch } = useStore();
  console.log(state.prices);
  const [minprice, SetMinprice] = useState(0);
  const [maxprice, SetMaxprice] = useState(0);
  const [truncPrice, setTruncPrice] = useState(false);
  const filtersData = [
    {
      id: 1,
      title: "Reichweite",
      firstRange: "bis 100km",
      secondRange: "bis 250km",
      thirdRange: "bis 500km",
      forthRange: "mind. 12400km",
      image: image,
    },
    {
      id: 2,
      title: "Zuladung",
      firstRange: "bis 100kg",
      secondRange: "bis 250kg",
      thirdRange: "bis 500kg",
      forthRange: "mind. 12400kg",
      image: image2,
    },
    {
      id: 3,
      title: "Höchstgeschwindigkeit",
      firstRange: "bis 80km/h",
      secondRange: "bis 120km/h",
      thirdRange: "bis 300km/h",
      forthRange: "mind. Mach 5",
      image: image3,
    },
    {
      id: 4,
      title: "Weitere Filter",
      firstRange: "Anschluss Typ2",
      secondRange: "Anschluss Schuko",
      thirdRange: "Anschluss Typ2",
      forthRange: "Anschluss Schuko",
      image: image3,
    },
  ];
  const getFiltersData = filtersData.map((item, index) => {
    return (
      <div key={index}>
        <FilterItemDesktop item={item} />
      </div>
    );
  });

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
          <div className="w-3 mr-5 my-auto">
            <MdKeyboardArrowDown size={25} />
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
            0-20000 €
          </label>
        </div>
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
            20001-40000 €
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
            40001-60000 €
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
            60001-80000 €
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
      {getFiltersData}
      {/* Reichweite */}

      {/* Zuladung */}
      {/* Höchstgeschwindigkeit */}
      {/* Weitere Filter */}
    </div>
  );
}

export default TruncateFilterDesktop;

import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/more-svgrepo-com.png";
import Image from "next/image";
import { useState } from "react";
import FilterItemMobile from "./FilterItemMobile";
import Sort from "./Sort";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
function TruncateFilter() {
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
      image: image5,
    },
  ];
  const getFiltersData = filtersData.map((item, index) => {
    return (
      <div key={index}>
        <FilterItemMobile item={item} />
      </div>
    );
  });

  return (
    <div className="bg-[#Fff]">
      <div className="flex flex-col mt-2 ">
        <div>
          <Sort />
        </div>
        {/* Preis */}
        <div
          className="my-1 cursor-pointer "
          onClick={() => setTruncPrice(!truncPrice)}
        >
          <div className="flex flex-row justify-between border-b ">
            <div className="flex flex-row ">
              <div className="w-6 my-auto ml-4  ">
                <Image
                  src={image4}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <div className="pl-4 my-auto mt-2">
                <h4 className="py-3 font-bold text-blue-dark text-base">
                  Preis
                </h4>
              </div>
            </div>
            <div className="w-3 mr-6 mt-6">
              <MdKeyboardArrowDown size={25} />
            </div>
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
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
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
            className="inline-flex items-center cursor-pointer pl-5 text-lg font-thin text-[#2C3F53]"
          >
            9001-13000 €
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
            13001-20000 €
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

      {/*  */}
    </div>
  );
}

export default TruncateFilter;

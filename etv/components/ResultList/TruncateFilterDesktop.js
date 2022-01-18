import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/more-svgrepo-com.png";
import FilterItemDesktop from "./FilterItemDesktop";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { useStore } from "../store";
import FilterOption from "./FilterOptionPrice";

function TruncateFilterDesktop() {
  const [minprice, SetMinprice] = useState(0);
  const [maxprice, SetMaxprice] = useState(0);
  const [truncPrice, setTruncPrice] = useState(false);
  const filtersData = [
    {
      id: 1,
      title: "Reichweite",
      firstRange: {
        value: "bis 100km",
        checked: false,
      },
      secondRange: {
        value: "bis 250km",
        checked: false,
      },
      thirdRange: {
        value: "bis 500km",
        checked: false,
      },
      forthRange: {
        value: "mind. 12400km",
        checked: false,
      },

      image: image,
    },
    {
      id: 2,
      title: "Zuladung",
      firstRange: {
        value: "bis 100kg",
        checked: false,
      },
      secondRange: {
        value: "bis 250kg",
        checked: false,
      },
      thirdRange: {
        value: "bis 500kg",
        checked: false,
      },
      forthRange: {
        value: "mind. 12400kg",
        checked: false,
      },
      image: image2,
    },
    {
      id: 3,
      title: "Höchstgeschwindigkeit",
      firstRange: {
        value: "bis 80km/h",
        checked: false,
      },
      secondRange: {
        value: "bis 120km/h",
        checked: false,
      },
      thirdRange: {
        value: "bis 300km/h",
        checked: false,
      },
      forthRange: {
        value: "mind. Mach 5",
        checked: false,
      },
      image: image3,
    },
    {
      id: 4,
      title: "Weitere Filter",
      checked: false,
      firstRange: {
        value: "Anschluss Typ2",
        checked: false,
      },
      secondRange: {
        value: "Anschluss Schuko",
        checked: false,
      },
      thirdRange: {
        value: "Anschluss Typ2",
        checked: false,
      },
      forthRange: {
        value: "Anschluss Schuko",
        checked: false,
      },
      image: image5,
    },
  ];
  const getFiltersData = filtersData.map((item, index) => {
    return (
      <div className=" " key={index}>
        <FilterItemDesktop item={item} />
      </div>
    );
  });

  return (
    <div className="hidden md:block py-2 ">
      {/* Preis */}
      <div
        className="cursor-pointer w-full"
        onClick={() => setTruncPrice(!truncPrice)}
      >
        <div className="flex  justify-between border-b">
          <div className="flex pl-4">
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
          <div className="w-3 mr-8 my-auto">
            <MdKeyboardArrowDown size={25} />
          </div>
        </div>
      </div>

      <div className={truncPrice ? " flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="">
          <FilterOption />
        </div>

        {/* MIN MAX PRICE INPUT */}
        <div className="wrapper py-4 flex flex-row justify-start">
          <div className="flex py-2 mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="text"
              id="min"
              name="min"
              placeholder="min €"
              className="pl-4 w-18"
            />
          </div>
          <div className="flex py-2  mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="text"
              id="max"
              name="max"
              placeholder="max €"
              className="pl-4 w-18"
            />
          </div>
          <span
            className="pl-2  my-auto cursor-pointer"
            onClick={() => console.log("you clicked los")}
          >
            Los
          </span>
        </div>
      </div>
      {getFiltersData}
    </div>
  );
}

export default TruncateFilterDesktop;

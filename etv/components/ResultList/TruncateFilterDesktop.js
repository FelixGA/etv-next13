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
import FilterOptionPrice from "./FilterOptionPrice";

function TruncateFilterDesktop() {
  /* UseStates */
  const [userInputMinPrice, SetUserInputMinPrice] = useState(0);
  const [userInputMaxPrice, SetUserInputMaxPrice] = useState(99000);
  const [truncPrice, setTruncPrice] = useState(false);
  /* filter list */
  const filtersData = [
    {
      id: "one",
      title: "Reichweite",
      firstRange: {
        valueforRanges: 150,
        name: "ab 150km ",
        id: 1,
      },
      secondRange: {
        id: 2,
        name: "ab 200km",
        valueforRanges: 200,
      },
      thirdRange: {
        id: 3,
        name: "ab 250km",
        valueforRanges: 250,
      },
      forthRange: {
        id: 4,
        name: "ab 500km",
        valueforRanges: 500,
      },

      image: image,
    },
    {
      id: 2,
      title: "Zuladung",
      firstRange: {
        id: 1,
        name: "ab:500kg",
        valueforWeights: 500,
      },
      secondRange: {
        id: 2,
        name: "ab:1000kg",
        valueforWeights: 1000,
      },
      thirdRange: {
        id: 3,
        name: "ab:1500kg",
        valueforWeights: 1500,
      },
      forthRange: {
        id: 4,
        name: "ab:2500kg",
        valueforWeights: 2500,
      },
      image: image2,
    },
    {
      id: 3,
      title: "Höchstgeschwindigkeit",
      firstRange: {
        id: 1,
        name: "bis 200km/h",
        valueforVmax: 200,
      },
      secondRange: {
        id: 2,
        name: "bis 600km/h",
        valueforVmax: 600,
      },
      thirdRange: {
        id: 3,
        name: "bis 900km/h",
        valueforVmax: 900,
      },
      forthRange: {
        id: 4,
        name: "bis 1000km/h",
        valueforVmax: 1000,
      },
      image: image3,
    },
    {
      id: 4,
      title: "Weitere Filter",

      firstRange: {
        value: "Anschluss Typ2",
        name: false,
        id: 1,
      },
      secondRange: {
        value: "Anschluss Schuko",
        name: false,
        id: 2,
      },
      thirdRange: {
        value: "Anschluss Typ2",
        name: false,
        id: 3,
      },
      forthRange: {
        value: "Anschluss Schuko",
        name: false,
        id: 4,
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
  /* handling the min and max input  */
  const changeHandleMin = (e) => {
    SetUserInputMinPrice(e.target.value);
  };
  const changeHandleMax = (e) => {
    SetUserInputMaxPrice(e.target.value);
  };
  const { state, dispatch } = useStore();
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
          <FilterOptionPrice />
        </div>

        {/* MIN MAX PRICE INPUT */}
        <div className="wrapper py-4 flex flex-row justify-start">
          <div className="flex py-2 mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="number"
              id="min"
              onChange={changeHandleMin}
              name="min"
              placeholder="min €"
              className="pl-4 w-18"
            />
          </div>
          <div className="flex py-2  mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="number"
              id="max"
              onChange={changeHandleMax}
              name="max"
              placeholder="max €"
              className="pl-4 w-18"
            />
          </div>
          <span
            className="pl-2  my-auto cursor-pointer"
            onClick={() =>
              dispatch({
                type: "price",
                data: [
                  {
                    min: Number(userInputMinPrice),
                    max: Number(userInputMaxPrice),
                  },
                ],
              })
            }
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

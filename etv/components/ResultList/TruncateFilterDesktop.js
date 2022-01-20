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
      id: 1,
      category: "Reichweite",
      image: image,
      options: [
        {
          value: 150,
          name: "ab 150 km",
          id: 1,
          categoryName: "range",
        },
        {
          id: 2,
          name: "ab 200 km",
          value: 200,
          categoryName: "range",
        },
        {
          id: 3,
          name: "ab 250 km",
          value: 250,
          categoryName: "range",
        },
        {
          id: 4,
          name: "ab 500 km",
          value: 500,
          categoryName: "range",
        },
      ],
    },
    {
      id: 2,
      category: "Zuladung",
      image: image2,
      options: [
        {
          id: 1,
          name: "ab 500 kg",
          value: 500,
          categoryName: "weight",
        },
        {
          id: 2,
          name: "ab 1000 kg",
          value: 1000,
          categoryName: "weight",
        },
        {
          id: 3,
          name: "ab 1500 kg",
          value: 1500,
          categoryName: "weight",
        },
        {
          id: 4,
          name: "ab 2500 kg",
          value: 2500,
          categoryName: "weight",
        },
      ],
    },
    {
      id: 3,
      category: "Höchstgeschwindigkeit",
      image: image3,
      options: [
        {
          id: 1,
          name: "ab 10km/h",
          value: 10,
          categoryName: "maxSpeed",
        },
        {
          id: 2,
          name: "ab 200km/h",
          value: 200,
          categoryName: "maxSpeed",
        },
        {
          id: 3,
          name: "ab 400km/h",
          value: 400,
          categoryName: "maxSpeed",
        },
        {
          id: 4,
          name: "ab 600km/h",
          value: 600,
          categoryName: "maxSpeed",
        },
      ],
    },
    {
      id: 4,
      category: "Weitere Filter",
      image: image5,
      options: [
        {
          name: "Anschluss Typ2",
          value: false,
          id: 1,
          categoryName: "something",
        },
        {
          name: "Anschluss Typ2",
          value: false,
          id: 2,
          categoryName: "something",
        },
        {
          name: "Anschluss Typ2",
          value: false,
          id: 3,
          categoryName: "something",
        },
        {
          name: "Anschluss Schuko",
          value: false,
          id: 4,
          categoryName: "something",
        },
      ],
    },
  ];
  const getFiltersData = filtersData.map((item) => {
    return (
      <div className=" " key={item.id}>
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

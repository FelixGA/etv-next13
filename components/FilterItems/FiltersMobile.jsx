import Image from "next/image";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "../store";

import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/aufbautype.png";
import image6 from "../../public/images/ladezeit@2x.png";
import filterImage from "../../public/images/filter-icon.png";

import FilterItemMobile from "./FilterItemMobile";
import Sort from "../SortItems/Sort";
import PriceInputs from "./PriceInputs";

const variants = {
  enter: {
    y: -1000,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -1000,
    opacity: 0,
  },
};

/* filter list */
const priceFilterData = [
  {
    id: 1,
    category: "prices",
    title: "Price",
    image: image4,
    options: [
      {
        value: 0,
        max: 20000,
        name: "0-20000€",
        id: 1,
        categoryName: "price",
      },
      {
        id: 2,
        name: "20001-40000€",
        value: 20001,
        max: 40000,
        categoryName: "price",
      },
      {
        id: 3,
        name: "40001-60000€",
        value: 40001,
        max: 60000,
        categoryName: "price",
      },
      {
        id: 4,
        name: "60001-90000€",
        value: 60001,
        max: 90000,
        categoryName: "price",
      },
    ],
  },
];
const filtersData = [
  {
    id: 1,
    category: "range230Vs",
    title: "Reichweite",
    image: image,
    options: [
      {
        value: 150,
        name: "ab 150 km",
        id: 1,
        categoryName: "range230V",
      },
      {
        id: 2,
        name: "ab 200 km",
        value: 200,
        categoryName: "range230V",
      },
      {
        id: 3,
        name: "ab 250 km",
        value: 250,
        categoryName: "range230V",
      },
      {
        id: 4,
        name: "ab 500 km",
        value: 500,
        categoryName: "range230V",
      },
    ],
  },
  {
    id: 2,
    category: "loadingWeights",
    title: "Zuladung",

    image: image2,
    options: [
      {
        id: 1,
        name: "ab 500 kg",
        value: 500,
        categoryName: "loadingWeight",
      },
      {
        id: 2,
        name: "ab 1000 kg",
        value: 1000,
        categoryName: "loadingWeight",
      },
      {
        id: 3,
        name: "ab 1500 kg",
        value: 1500,
        categoryName: "loadingWeight",
      },
      {
        id: 4,
        name: "ab 2500 kg",
        value: 2500,
        categoryName: "loadingWeight",
      },
    ],
  },
  {
    id: 3,
    title: "V-Max",

    category: "maxSpeeds",
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
    id: 5,
    title: "Ladenzeit",
    category: "chargingTime230Vs",
    image: image6,
    options: [
      {
        name: "ab 1 Stunde",
        value: 1,
        id: 1,
        categoryName: "chargingTime230V",
      },
      {
        name: "ab 10 Stunde",
        value: 10,
        id: 2,
        categoryName: "chargingTime230V",
      },
      {
        name: "ab 20 Stunde",
        value: 20,
        id: 3,
        categoryName: "chargingTime230V",
      },
      {
        name: "ab 40 Stunde",
        value: 40,
        id: 4,
        categoryName: "chargingTime230V",
      },
    ],
  },
  {
    id: 4,
    title: "Aufbautyp",
    category: "categorys",
    image: image5,
    options: [
      {
        name: "Pritsche",
        value: "Pritsche",
        id: 1,
        categoryName: "category",
      },
      {
        name: "Kipper",
        value: "Kipper",
        id: 2,
        categoryName: "category",
      },
      {
        name: "Koffer",
        value: "Koffer",
        id: 3,
        categoryName: "category",
      },
      {
        name: "Kasten",
        value: "Kasten",
        id: 4,
        categoryName: "category",
      },
    ],
  },
];

function FiltersMobile() {
  /* UseStates */
  const [userInputMinPrice, SetUserInputMinPrice] = useState(0);
  const [userInputMaxPrice, SetUserInputMaxPrice] = useState(99000);
  const { state, dispatch } = useStore();
  const [clicked, setClicked] = useState(false);

  /* handling the min and max input  */
  const changeHandleMin = (e) => {
    SetUserInputMinPrice(e.target.value);
  };
  const changeHandleMax = (e) => {
    SetUserInputMaxPrice(e.target.value);
  };
  return (
    <div className="absolute bg-white w-full ">
      <div className="flex flex-col bg-white ">
        <div className="shadow-dropdown w-full">
          <div
            className={
              clicked
                ? "h-10 shadow-dropdown flex justify-between align-middle border-b"
                : "h-10 shadow-dropdown flex justify-between align-middle "
            }
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <div className="flex-1 flex">
              <div
                className="w-3.5 my-auto ml-6  
          "
              >
                <Image
                  src={filterImage}
                  alt="filter icon"
                  objectFit="cover"
                  width={8}
                  height={8}
                  layout="responsive"
                />
              </div>
              <span className="ml-2 font-black   my-auto text-sm text-blue-darker">
                Alle Filter anzeigen
              </span>
            </div>

            <div
              className={
                clicked
                  ? "flex items-center w-8 mr-5 my-auto transition transform rotate-180 origin-center	"
                  : "flex items-center w-8 mr-5 my-auto transition transform rotate-0 origin-center	 "
              }
            >
              <MdKeyboardArrowDown size={28} />
            </div>
          </div>
          <div className="">
            <div
              className={
                clicked
                  ? "font-bold my-auto text-sm text-blue-darker"
                  : "hidden"
              }
            ></div>
          </div>
        </div>
      </div>
      <div className={clicked ? "block" : "hidden"}>
        {priceFilterData.map((item) => (
          <div className="relative  " key={item.id}>
            <Sort />
            <div className="">
              <FilterItemMobile item={item} />
            </div>

            <AnimatePresence initial={false}>
              {state?.truncates == item.title && (
                <motion.div
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.2 }}
                  className="flex flex-col ml-8 relative   "
                >
                  <PriceInputs />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        {filtersData.map((item, index) => (
          <div key={item.id} className="">
            <FilterItemMobile item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FiltersMobile;

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

function FiltersMobile() {
  /* filter list */

  const filtersData = [
    {
      id: 1,
      category: "rangeLithiums",
      title: "Reichweite",
      image: image,
      options: [
        {
          value: 50,
          max: 1000,
          name: `ab 50 km`,
          id: 1,
          categoryName: "rangeLithium",
        },
        {
          id: 2,
          name: `ab 100 km`,
          value: 100,
          max: 1000,
          categoryName: "rangeLithium",
        },
        {
          id: 3,
          name: `ab 150 km`,
          value: 150,
          max: 1000,
          categoryName: "rangeLithium",
        },
        {
          id: 4,
          name: `ab 200 km`,
          value: 200,
          max: 1000,
          categoryName: "rangeLithium",
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
          name: `ab 100 kg`,
          value: 100,
          max: 100000,
          categoryName: "loadingWeight",
        },
        {
          id: 2,
          name: `ab 250 kg`,
          value: 250,
          max: 100000,
          categoryName: "loadingWeight",
        },
        {
          id: 3,
          name: `ab 450 kg`,
          value: 450,
          max: 100000,
          categoryName: "loadingWeight",
        },
        {
          id: 4,
          name: `ab 500 kg`,
          value: 500,
          max: 100000,
          categoryName: "loadingWeight",
        },
      ],
    },
    {
      id: 3,
      title: "Km/h",
      category: "maxSpeeds",
      image: image3,
      options: [
        {
          id: 1,
          name: `ab 50 km/h`,
          value: 50,
          categoryName: "maxSpeed",
        },
        {
          id: 2,
          name: `ab 80 km/h`,
          value: 80,
          categoryName: "maxSpeed",
        },
        {
          id: 3,
          name: `ab 120 km/h`,
          value: 120,
          categoryName: "maxSpeed",
        },
        {
          id: 4,
          name: `ab 180 km/h`,
          value: 180,
          categoryName: "maxSpeed",
        },
      ],
    },
    {
      id: 5,
      title: "Ladezeit",
      category: "chargingTimeLithiums",
      image: image6,
      options: [
        {
          name: `ab 5 Stunden`,
          value: 5,
          id: 1,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `ab 10 Stunden`,
          value: 10,
          id: 2,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `ab 15 Stunden`,
          value: 15,
          id: 3,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `ab 20 Stunden`,
          value: 20,
          id: 4,
          categoryName: "chargingTimeLithium",
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

  const priceFilterData = [
    {
      id: 1,
      category: "prices",
      title: "Preis",
      image: image4,
      options: [
        {
          value: 1,
          max: 10000,
          name: "0 - 10000 €",
          id: 1,
          categoryName: "price",
        },
        {
          id: 2,
          name: "10001 - 20000 €",
          value: 10001,
          max: 20000,
          categoryName: "price",
        },
        {
          id: 3,
          name: "20001 - 40000 €",
          value: 20001,
          max: 20000,
          categoryName: "price",
        },
        {
          id: 4,
          name: "40001 - 80000 €",
          value: 40001,
          max: 80000,
          categoryName: "price",
        },
      ],
    },
  ];
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
    <div className="absolute z-20 bg-white w-full shadow-lg">
      <div className="flex flex-col bg-white ">
        <div className="shadow-dropdown w-full ">
          <div
            className={
              clicked
                ? "h-14 shadow-dropdown flex justify-between align-middle border-b "
                : "h-14 shadow-dropdown flex justify-between align-middle "
            }
            onClick={() => {
              setClicked(!clicked);
            }}
          >
            <div className="flex-1 flex">
              <div className="w-3.5 my-auto ml-6">
                <Image
                  src={filterImage}
                  alt="filter icon"
                  objectFit="cover"
                  width={8}
                  height={8}
                  layout="responsive"
                />
              </div>
              <span className="ml-4 font-black my-auto text-sm text-blue-darker">
                {/* Alle Filter anzeigen */}
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
        </div>
      </div>
      <AnimatePresence initial={false}>
        {clicked && (
          <motion.div
            className={clicked ? "block " : "hidden"}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
          >
            {priceFilterData.map((item) => (
              <div className="relative  " key={item.id}>
                <Sort />
                <FilterItemMobile item={item} />
                <AnimatePresence initial={false}>
                  {state?.truncates == item.title && (
                    <motion.div
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: "tween", duration: 0.1 }}
                      className="flex flex-col relative"
                    >
                      <PriceInputs />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {filtersData.map((item) => (
              <div key={item.id}>
                <FilterItemMobile item={item} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FiltersMobile;

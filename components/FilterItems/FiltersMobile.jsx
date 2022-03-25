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

function FiltersMobile({ getContent }) {
  /* filter list */
  let fromWord = getContent.content[1].details.split(",")[0];
  let hourWord = getContent.content[1].details.split(",")[5];
  const filtersData = [
    {
      id: 1,
      category: "rangeLithiums",
      title: getContent.content[1].markdown.split(", ")[1],
      image: image,
      options: [
        {
          value: 50,
          max: 1000,
          name: `${fromWord} 50 km`,
          id: 1,
          categoryName: "rangeLithium",
        },
        {
          id: 2,
          name: `${fromWord} 100 km`,
          value: 100,
          max: 1000,
          categoryName: "rangeLithium",
        },
        {
          id: 3,
          name: `${fromWord} 150 km`,
          value: 150,
          max: 1000,
          categoryName: "rangeLithium",
        },
        {
          id: 4,
          name: `${fromWord} 200 km`,
          value: 200,
          max: 1000,
          categoryName: "rangeLithium",
        },
      ],
    },
    {
      id: 2,
      category: "loadingWeights",
      title: getContent.content[1].markdown.split(", ")[2],

      image: image2,
      options: [
        {
          id: 1,
          name: `${fromWord} 100 kg`,
          value: 100,
          max: 100000,
          categoryName: "loadingWeight",
        },
        {
          id: 2,
          name: `${fromWord} 250 kg`,
          value: 250,
          max: 100000,
          categoryName: "loadingWeight",
        },
        {
          id: 3,
          name: `${fromWord} 450 kg`,
          value: 450,
          max: 100000,
          categoryName: "loadingWeight",
        },
        {
          id: 4,
          name: `${fromWord} 500 kg`,
          value: 500,
          max: 100000,
          categoryName: "loadingWeight",
        },
      ],
    },
    {
      id: 3,
      title: getContent.content[1].markdown.split(", ")[3],

      category: "maxSpeeds",
      image: image3,
      options: [
        {
          id: 1,
          name: `${fromWord} 50 km/h`,
          value: 50,
          categoryName: "maxSpeed",
        },
        {
          id: 2,
          name: `${fromWord} 80 km/h`,
          value: 80,
          categoryName: "maxSpeed",
        },
        {
          id: 3,
          name: `${fromWord} 120 km/h`,
          value: 120,
          categoryName: "maxSpeed",
        },
        {
          id: 4,
          name: `${fromWord} 180 km/h`,
          value: 180,
          categoryName: "maxSpeed",
        },
      ],
    },
    {
      id: 5,
      title: getContent.content[1].markdown.split(", ")[4],
      category: "chargingTimeLithiums",
      image: image6,
      options: [
        {
          name: `${fromWord} 5 ${hourWord}`,
          value: 5,
          id: 1,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `${fromWord} 10 ${hourWord}`,
          value: 10,
          id: 2,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `${fromWord} 15 ${hourWord}`,
          value: 15,
          id: 3,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `${fromWord} 20 ${hourWord}`,
          value: 20,
          id: 4,
          categoryName: "chargingTimeLithium",
        },
      ],
    },
    {
      id: 4,
      title: getContent.content[1].markdown.split(", ")[5],
      category: "categorys",
      image: image5,
      options: [
        {
          name: getContent.content[1].details.split(", ")[1],
          value: "Pritsche",
          id: 1,
          categoryName: "category",
        },
        {
          name: getContent.content[1].details.split(", ")[2],
          value: "Kipper",
          id: 2,
          categoryName: "category",
        },
        {
          name: getContent.content[1].details.split(", ")[3],
          value: "Koffer",
          id: 3,
          categoryName: "category",
        },
        {
          name: getContent.content[1].details.split(", ")[4],
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
      title: getContent.content[1].markdown.split(", ")[0],
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
    <div className="absolute z-10 bg-white w-full">
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
              <span className="ml-2 font-black   my-auto text-sm text-blue-darker">
                {/* Alle Filter anzeigen */}
                {getContent.content[1].name}
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
            className={clicked ? "block" : "hidden"}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.1 }}
          >
            {priceFilterData.map((item) => (
              <div className="relative  " key={item.id}>
                <Sort getContent={getContent} />
                <FilterItemMobile item={item} getContent={getContent} />
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
                <FilterItemMobile item={item} getContent={getContent} />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FiltersMobile;

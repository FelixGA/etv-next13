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
          value: 150,
          name: `${fromWord} 150 km`,
          id: 1,
          categoryName: "rangeLithium",
        },
        {
          id: 2,
          name: `${fromWord} 200 km`,
          value: 200,
          categoryName: "rangeLithium",
        },
        {
          id: 3,
          name: `${fromWord} 250 km`,
          value: 250,
          categoryName: "rangeLithium",
        },
        {
          id: 4,
          name: `${fromWord} 500 km`,
          value: 500,
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
          name: `${fromWord} 500 kg`,
          value: 500,
          categoryName: "loadingWeight",
        },
        {
          id: 2,
          name: `${fromWord} 1000 kg`,
          value: 1000,
          categoryName: "loadingWeight",
        },
        {
          id: 3,
          name: `${fromWord} 1500 kg`,
          value: 1500,
          categoryName: "loadingWeight",
        },
        {
          id: 4,
          name: `${fromWord} 2500 kg`,
          value: 2500,
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
          name: `${fromWord} 10km/h`,
          value: 10,
          categoryName: "maxSpeed",
        },
        {
          id: 2,
          name: `${fromWord} 200km/h`,
          value: 200,
          categoryName: "maxSpeed",
        },
        {
          id: 3,
          name: `${fromWord} 400km/h`,
          value: 400,
          categoryName: "maxSpeed",
        },
        {
          id: 4,
          name: `${fromWord} 600km/h`,
          value: 600,
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
          name: `${fromWord} 1 ${hourWord}`,
          value: 1,
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
          name: `${fromWord} 20 ${hourWord}`,
          value: 20,
          id: 3,
          categoryName: "chargingTimeLithium",
        },
        {
          name: `${fromWord} 40 ${hourWord}`,
          value: 40,
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
    <div className="absolute z-10 bg-white w-full ">
      <div className="flex flex-col bg-white ">
        <div className="shadow-dropdown w-full z-40">
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
          <div className="">
            <div
              className={
                clicked
                  ? "font-bold	 my-auto text-sm text-blue-darker"
                  : "hidden"
              }
            ></div>
          </div>
        </div>
      </div>
      <div className={clicked ? "block" : "hidden"}>
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
                  transition={{ type: "tween", duration: 0.2 }}
                  className="flex flex-col ml-8 relative   "
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
      </div>
    </div>
  );
}

export default FiltersMobile;

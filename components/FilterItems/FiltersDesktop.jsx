import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/aufbautype.png";
import image6 from "../../public/images/ladezeit@2x.png";
import FilterItemDesktop from "./FilterItemDesktop";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import { useStore } from "../store";
import { motion, AnimatePresence } from "framer-motion";
import FilterOptionPrice from "./FilterOptionPrice";
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

function FiltersDesktop() {
  const { state, dispatch } = useStore();
  /* filter list */
  const filtersData = [
    {
      id: 1,
      category: "range230V",
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

  const getPriceFilterData = priceFilterData.map((item) => {
    return (
      <div className="relative  bg-white" key={item.id}>
        <FilterItemDesktop item={item} />
        <AnimatePresence initial={false}>
          {state?.truncates == item.title && (<motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.2 }}
            className=
              "flex flex-col ml-8 relative   "
            
          >
            <PriceInputs />
          </motion.div>)}
          
        </AnimatePresence>
      </div>
    );
  });
  const getFiltersData = filtersData.map((item) => {
    return (
      <div className="bg-white " key={item.id}>
        <FilterItemDesktop item={item} />
      </div>
    );
  });

  return (
    <div className="">
      <div className="">{getPriceFilterData}</div>
      {getFiltersData}
    </div>
  );
}
export default FiltersDesktop;
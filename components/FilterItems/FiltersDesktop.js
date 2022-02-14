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
      category: "ranges",
      title: "Reichweite",
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
      category: "weights",
      title: "Zuladung",

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
      title: "Km/h",

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
      category: "chargingTimes",
      image: image6,
      options: [
        {
          name: "ab 1 Stunde",
          value: 1,
          id: 1,
          categoryName: "chargingTime",
        },
        {
          name: "ab 10 Stunde",
          value: 10,
          id: 2,
          categoryName: "chargingTime",
        },
        {
          name: "ab 20 Stunde",
          value: 20,
          id: 3,
          categoryName: "chargingTime",
        },
        {
          name: "ab 40 Stunde",
          value: 40,
          id: 4,
          categoryName: "chargingTime",
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
      <div className="relative z-10 bg-white" key={item.id}>
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
      <div className=" " key={item.id}>
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
//     <div className="hidden md:block py-2  ">
//       {/* Preis */}

//       <div
//         className="cursor-pointer w-full bg-red-500"
//         // onClick={() => {
//         //   dispatch({
//         //     type: "truncate",
//         //     data: state?.truncates !== "price" ? "price" : "",
//         //   });
//         // }}
//       >
//         <div className="flex  justify-between border-b ">
//           <div className="flex pl-4  ">
//             <div className="w-6 my-auto ml-4 ">
//               <Image
//                 src={image4}
//                 alt="picture"
//                 objectFit="cover"
//                 width={24}
//                 height={28}
//                 layout="responsive"
//                 unoptimized={true}
//               />
//             </div>
//             <div className="my-auto pl-4">
//               <h4 className="py-3 font-bold text-blue-dark">Preis</h4>
//             </div>
//           </div>
//           <div className="flex flex-row items-center">
//             <span
//               className={state?.prices.length > 0 ? "flex  text-xl " : "hidden"}
//             >
//               ✓
//             </span>
//             <div
//               className={
//                 isActive
//                   ? "flex items-center w-6 mr-5 my-auto transition transform rotate-180 origin-center	"
//                   : "flex items-center w-6 mr-5 my-auto transition transform rotate-0 origin-center	 "
//               }
//             >
//               <MdKeyboardArrowDown size={25} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className={isActive ? " flex flex-col ml-8 mt-2 " : "hidden"}>
//         <div className="">
//           <FilterOptionPrice />
//         </div>

//    </div>

//     </div>
//   );
// }

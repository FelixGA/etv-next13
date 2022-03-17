import { useStore } from "../store";
import { motion, AnimatePresence } from "framer-motion";
import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
import image3 from "../../public/images/hoechstgeschwindigkeit.png";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/aufbautype.png";
import image6 from "../../public/images/ladezeit@2x.png";
import FilterItemDesktop from "./FilterItemDesktop";
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

function FiltersDesktop({ getContent }) {
  const { state, dispatch } = useStore();

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
          name: `${fromWord} 50km/h`,
          value: 50,
          categoryName: "maxSpeed",
        },
        {
          id: 2,
          name: `${fromWord} 80km/h`,
          value: 80,
          categoryName: "maxSpeed",
        },
        {
          id: 3,
          name: `${fromWord} 120km/h`,
          value: 120,
          categoryName: "maxSpeed",
        },
        {
          id: 4,
          name: `${fromWord} 180km/h`,
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
          name: "0-10000€",
          id: 1,
          categoryName: "price",
        },
        {
          id: 2,
          name: "10001-20000€",
          value: 10001,
          max: 20000,
          categoryName: "price",
        },
        {
          id: 3,
          name: "20001-40000€",
          value: 20001,
          max: 40000,
          categoryName: "price",
        },
        {
          id: 4,
          name: "40001-80000€",
          value: 40001,
          max: 80000,
          categoryName: "price",
        },
      ],
    },
  ];

  return (
    <div className="xl:ml-2 2xl:ml-40 ">
      <div className="">
        {priceFilterData.map((item) => (
          <div className="relative bg-white" key={item.id}>
            <FilterItemDesktop item={item} getContent={getContent} />
            <AnimatePresence initial={false}>
              {state?.truncates == item.title && (
                <motion.div
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.1 }}
                  className="flex flex-col ml-8 relative "
                >
                  <PriceInputs />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {filtersData.map((item) => (
        <div className="bg-white" key={item.id}>
          <FilterItemDesktop item={item} getContent={getContent} />
        </div>
      ))}
    </div>
  );
}
export default FiltersDesktop;

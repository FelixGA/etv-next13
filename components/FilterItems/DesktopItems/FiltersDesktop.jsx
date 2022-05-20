import { useStore } from "../../store";
import { motion, AnimatePresence } from "framer-motion";
import { filtersData, priceFilterData } from "../../../data/filtersData";
import FilterItemDesktop from "./FilterItemDesktop";
import PriceInputs from "../PriceInputs";
import FilterBrandItemDesktop from "./FilterBrandItemDesktop";

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

function FiltersDesktop({ getBrands }) {
  const { state, dispatch } = useStore();
  return (
    <div className="xl:ml-2 2xl:ml-40 ">
      <div className="">
        {priceFilterData.map((item, index) => (
          <div className="relative bg-white" key={index}>
            <FilterItemDesktop item={item} />
            <AnimatePresence initial={false}>
              {state?.truncates == item.title && (
                <motion.div
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.1 }}
                  className="relative flex flex-col ml-8 "
                >
                  <PriceInputs />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {filtersData.map((item, index) => (
        <div className="bg-white" key={index}>
          <FilterItemDesktop item={item} />
        </div>
      ))}
      <div className="bg-white">
        <FilterBrandItemDesktop item={getBrands} />
      </div>
    </div>
  );
}
export default FiltersDesktop;

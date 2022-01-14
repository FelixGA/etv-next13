import { useStore } from "../store";
import Link from "next/link";
import CarCardforPopUp from "./CarCardforPopUp";
import testImage from "../../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg";
import Image from "next/image";

const StickyPopUpForComparison = () => {
  const { state, dispatch } = useStore();
  /* GET CAR-CARDS-LIST */
  const getCarCardForPopup = state?.autoForComparisons?.map(
    (selectedCar, index) => {
      return (
        <div className="flex  w-56 h-28 mx-4" key={index}>
          <CarCardforPopUp selectedCar={selectedCar} />
        </div>
      );
    }
  );

  return (
    /* please keep the styles on this className */
    <div
      className={
        state.stickys
          ? "flex justify-center items-center h-32 lg:h-40 w-full bottom-0 sticky z-10 bg-black-lightest"
          : "hidden"
      }
    >
      <h3 className="hidden lg:flex text-3xl pr-20 text-white font-bold">
        Ihr Vergleich
      </h3>
      {/* conditions and mapping */}

      {state?.autoForComparisons?.length ? getCarCardForPopup : null}
      <div className="flex flex-col-reverse justify-between pl-4 relative  h-full">
        <div className="mb-7">
          <Link href="/en" as="/en">
            <a>
              <button className="bg-grey-light w-36 h-8 text-[#1F1E80]">
                Vergleich
              </button>
            </a>
          </Link>
        </div>
        <div className="absolute top-5 right-0">
          <span className="text-white text-sm  cursor-pointer ">
            alle löschen
          </span>
        </div>
      </div>
    </div>
  );
};
export default StickyPopUpForComparison;

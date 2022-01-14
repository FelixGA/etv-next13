import { useStore } from "../store";
import Link from "next/link";
import CarCardforPopUp from "./CarCardforPopUp";

const StickyPopUpForComparison = () => {
  const { state, dispatch } = useStore();
  /* GET CAR-CARDS-LIST */
  const getCarCardForPopup = state?.autoForComparisons?.map(
    (selectedCar, index) => {
      return (
        <div className="flex w-1/4" key={index}>
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
          ? "flex flex-row h-32 lg:h-40 w-full sticky bottom-0 z-10 bg-black-lightest"
          : "hidden"
      }
    >
      <h4 className="hidden lg:flex text-2xl px-2">Ihr Vergleich</h4>
      {/* conditions and mapping */}
      {state?.autoForComparisons?.length ? getCarCardForPopup : null}
      <Link href="/en" as="/en">
        <a>
          <p className="bg-grey-light ">Vergleich</p>
        </a>
      </Link>
    </div>
  );
};
export default StickyPopUpForComparison;

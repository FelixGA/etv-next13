import { useStore } from "../store";
import Image from "next/image";

const StickyPopUpForComparison = () => {
  const { state, dispatch } = useStore();

  console.log("STATES ", state.stickys, state.autoForComparisons);

  const myLoader = ({ src }) => {
    // return state?.autoForComparisons.map(
    //   (el) => `http://localhost:1337${el.pic}`
    // );

    return src;
  };
  const popupSliderComponent = state?.autoForComparisons?.map((el) => {
    return (
      <div className="container">
        <div className=" w-full sm:max-w-xs w-100 ">
          <Image
            loader={myLoader}
            src={`http://localhost:1337${el.pic}`}
            alt="picture"
            width={90}
            height={90}
            // layout="responsive"
            objectFit="cover"
          />
          <h4 className="text-l font-bold text-grey-lightest pb-2">
            {el.title}
          </h4>
        </div>
      </div>
    );
  });

  return (
    <div
      className={
        state.stickys
          ? "flex flex-row h-32 lg:h-40 w-full sticky bottom-0 z-10 bg-black-lightest"
          : "hidden"
      }
    >
      {state?.autoForComparisons?.length
        ? //   &&
          // state?.autoForComparisons?.length <= 3
          popupSliderComponent
        : null}
    </div>
  );
};
export default StickyPopUpForComparison;

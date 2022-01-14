import Image from "next/image";
import { useState } from "react";
import { useStore } from "../store";
function CarCardforPopUp(props) {
  const { state, dispatch } = useStore();

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className=" flex text-grey-lightest  bg-red-600 ">
        <button
          onClick={() => {
            dispatch({
              type: "autoForComparison",
              data: state.autoForComparisons.filter(
                (el) => el !== props.selectedCar
              ),
            });
          }}
        >
          X
        </button>
      </div>
      <div className=" bg-green-400">
        <Image
          loader={myLoader}
          src={`http://localhost:1337${props.selectedCar.pic}`}
          alt="picture"
          width={90}
          height={90}
          // layout="responsive"
          objectFit="cover"
        />
        <div className=" flex ">
          <p className="text-grey-lightest">{props.selectedCar.price}</p>
          <h4 className="text-l font-bold text-grey-lightest pb-2">
            {props.selectedCar.title}
          </h4>
        </div>
      </div>
    </>
  );
}
export default CarCardforPopUp;

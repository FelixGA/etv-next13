import Image from "next/image";
import { useState } from "react";
import testImage from "../../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";
function CarCardforPopUp(props) {
  const { state, dispatch } = useStore();

  const myLoader = ({ src }) => {
    return src;
  };

  return (
    <div className="min-w-36 w-full relative ">
      <Image
        className="rounded-sm brightness-50"
        loader={myLoader}
        src={`http://localhost:1337${props.selectedCar.pic}`}
        alt="picture"
        objectFit="cover"
        width={228.97}
        height={111}
        layout="responsive"
      />

      <div className="absolute bottom-20 left-2">
        <h4 className="mt-10 text-lg font-black text-white ">
          {props.selectedCar.title}
        </h4>
      </div>
      <div className="absolute top-20 right-2 ">
        <p className="text-white font-black text-lg">
          {`ab ${props.selectedCar.price} €`}
        </p>
      </div>
      <div
        className="absolute top-1 right-1 cursor-pointer"
        onClick={() => {
          dispatch({
            type: "autoForComparison",
            data: state.autoForComparisons.filter(
              (el) => el !== props.selectedCar
            ),
          });
        }}
      >
        <AiOutlineClose size={20} color="white" />
      </div>
    </div>

    // <div className="w-full ">

    //     <div className=" flex bg-blue-500 z-20">
    //       <p className="text-grey-lightest">{props.selectedCar.price}</p>
    //       <h4 className="text-l font-bold text-grey-lightest pb-2">
    //         {props.selectedCar.title}
    //       </h4>
    //     </div>
    //   </div>
    //   <span
    //     className="bg-red-500 z-40"
    //     onClick={() => {
    //       dispatch({
    //         type: "autoForComparison",
    //         data: state.autoForComparisons.filter(
    //           (el) => el !== props.selectedCar
    //         ),
    //       });
    //     }}
    //   >
    //     <AiOutlineClose size={20} />
    //   </span>
    // </div>
  );
}
export default CarCardforPopUp;

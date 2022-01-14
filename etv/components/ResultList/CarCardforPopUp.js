import Image from "next/image";

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
        className="rounded-sm"
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
            type: "disabledButton",
            data: props.selectedCar.title,
          });
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
  );
}
export default CarCardforPopUp;

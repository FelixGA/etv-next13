import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";

function CarCardForPopUpMobile(props) {
  const { state, dispatch } = useStore();
  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <div className="grid grid-cols-3  ">
      <div className=" w-20 sm:w-28 mx-2">
        <Image
          className=" md:rounded-md brightness-50"
          loader={myLoader}
          src={`http://localhost:1337${props.selectedCar.pic}`}
          alt="picture"
          objectFit="cover"
          width={228.97}
          height={111}
          layout="responsive"
        />
        <p className="text-sm text-white text-center">
          {props.selectedCar.title}
        </p>
      </div>
    </div>
  );
}

export default CarCardForPopUpMobile;

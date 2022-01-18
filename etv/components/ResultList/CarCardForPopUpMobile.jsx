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
    <div className="flex flex-row w-full bg-green-500">
      <div className="w-12 ">
        <Image
          className=" lg:rounded-md brightness-50"
          loader={myLoader}
          src={`http://localhost:1337${props.selectedCar.pic}`}
          alt="picture"
          objectFit="cover"
          width={228.97}
          height={111}
          layout="responsive"
        />{" "}
      </div>
    </div>
  );
}

export default CarCardForPopUpMobile;

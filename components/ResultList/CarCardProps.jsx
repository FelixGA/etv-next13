import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";

function CarCardProps(props) {
  /*   let imagesForProp = [image, image2, image3, image4]; */
  console.log(props.details);
  return (
    <div className=" pl-8 flex h-20 items-center  ">
      <div className=" ">
        <Image
          className=" rounded-full"
          src={props.image}
          alt={props.details?.key}
          width={40}
          height={40}
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col flex-1 justify-center text-sm pl-4 ">
        <div className="text-blue-dark font-bold ">{props.details?.key}</div>
        <div className="text-grey-dark font-bold ">
          {props.details?.value} {props.details?.type} kg
        </div>
      </div>
    </div>
  );
}

export default CarCardProps;

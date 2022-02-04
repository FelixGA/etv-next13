import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/ladezeit@2x.png";

function CarCardProps(props) {
  /*   let imagesForProp = [image, image2, image3, image4]; */
  return (
    <div className="flex  bg-green-500  h-1/2 items-center ">
      <div className=" ">
        <Image
          className=" rounded-full"
          src={image}
          alt="Reichweite"
          width={150}
          height={150}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col w-full justify-center text-sm pl-4">
        <div className="text-blue-dark font-bold ">{props.prop?.key}</div>
        <div className="text-grey-dark font-bold ">
          {props.prop?.value} {props.prop?.type}kg/h
        </div>
      </div>
    </div>
  );
}

export default CarCardProps;

import Image from "next/image";

function CarCardProps(props) {
  /*   let imagesForProp = [image, image2, image3, image4]; */
  // console.log(props.details);
  return (
    <div className="pl-2 xl:pl-4 flex h-20 items-center ">
      <div className="rounded-full bg-[#E7EEF2] ">
        <div className="p-2 rounded-full w-12 h-12">
          <Image
            src={props.image}
            alt={props.details?.key}
            width={150}
            height={150}
            objectFit="contain"
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-center text-sm lg:pl-2 ">
        <div className="text-blue-dark font-bold ">{props.details?.key}</div>
        <div className="text-grey-dark font-bold ">
          {props.details?.value}
          {/* {props.details?.type}  */}
          kg
        </div>
      </div>
    </div>
  );
}

export default CarCardProps;

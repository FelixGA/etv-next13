import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import { AiOutlineClose } from "react-icons/ai";
function ActiveFilterEntry() {
  const activeFilterData = [
    {
      id: 1,
      value: "10000-80000€",
      image: image,
    },
    {
      id: 2,
      value: "bis 100 km",
      image: image2,
    },
    {
      id: 3,
      value: "bis 100 kg",
      image: image3,
    },
    {
      id: 4,
      value: "bis 80km/h",
      image: image4,
    },
    {
      id: 5,
      value: "Weitere Filter",
      image: image4,
    },
  ];
  return (
    <div className="mt-4 sm:mt-14 grid gap-2 grid-cols-2 sm:grid-cols-3  lg:grid-cols-3   xl:grid-cols-4  2xl:grid-cols-5">
      {activeFilterData.map((item, index) => (
        <div className=" flex justify-between  ml-2 w-fit" key={item.id}>
          <div className="child w-44    h-9 bg-grey-lighter  flex  justify-between items-center">
            <div className="imageWrapper w-6 ml-2">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="text-sm">{item.value}</div>
            <div className="w-3.5 my-auto mr-4 cursor-pointer">
              <AiOutlineClose size={20} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActiveFilterEntry;

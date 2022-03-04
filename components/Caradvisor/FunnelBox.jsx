import Link from "next/link";
import Image from "next/image";
import { useStore } from "../store";
import image4 from "../../public/images/preis.png";
import image5 from "../../public/images/aufbautype.png";
import image from "../../public/images/reichweite.png";
import image2 from "../../public/images/zuladung.png";
export default function FunnelBox({ currentFilter }) {
  const { state, dispatch } = useStore();

  return currentFilter !== "move to next" ? (
    <div className="flex justify-around items-center flex-wrap ">
      {currentFilter.options.map((item, index) => {
        return (
          <div
            onClick={() => {
              dispatch({
                type: item.categoryName,

                data:
                  item.categoryName == "price"
                    ? [{ min: item.value, max: item.max }]
                    : [{ min: item.value, max: 99999 }],
              });
            }}
            key={index}
            className="w-48 h-48 
            flex flex-col justify-center items-center  rounded-lg shadow-lg"
          >
            {" "}
            <div className="w-28 h-28  ">
              <Image
                src={item.image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <p className="font-bold text-black pt-8">{item.name}</p>
          </div>
        );
      })}
    </div>
  ) : (
    <div></div>
  );
}

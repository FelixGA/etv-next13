import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";
import { useState, useEffect } from "react";
function ActiveFilterEntry() {
  const { state, dispatch } = useStore();

  const [show, setShow] = useState(true);
  useEffect(() => {
    if (state.prices.length) {
      setShow(false);
    }
  }, [
    state.prices,
    state.ranges,
    state.maxspeeds,
    state.weights,
    state.chargingtimes,
  ]);

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
    <div
      className={
        show
          ? "grid gap-2 w-full grid-cols-1 mt-4 md:mt-0 sm:grid-cols-2  lg:grid-cols-4  xl:filter-grid  px-2"
          : "hidden"
      }
    >
      {activeFilterData.map((item) => (
        <div
          className="  w-full h-10 py-2  bg-grey-lighter  flex justify-between items-center "
          key={item.id}
        >
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
          <div className="text-md">{item.value}</div>
          <div className="w-3.5 my-auto mr-4 cursor-pointer">
            <AiOutlineClose size={20} />
          </div>
        </div>
      ))}
      {/* REMOVE ALL FILTERS */}
      <div className="w-fit flex items-end">
        <span
          className="text-sm  cursor-pointer"
          onClick={() => {
            setShow(!show);
            dispatch({
              type: "range",
              data: [],
            });
            dispatch({
              type: "weight",
              data: [],
            });
            dispatch({
              type: "price",
              data: [],
            });
          }}
        >
          alle Filter loschen
        </span>
      </div>
    </div>
  );
}

export default ActiveFilterEntry;

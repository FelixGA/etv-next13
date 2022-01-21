import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import image5 from "../../public/images/more-svgrepo-com.png";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";
import { useState, useEffect } from "react";
function ActiveFilterEntry() {
  const { state, dispatch } = useStore();
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    if (
      state?.prices.length ||
      state?.ranges.length ||
      state?.weights.length ||
      state?.maxSpeeds.length ||
      state?.chargingTimes.length
    ) {
      setShowAll(true);
    }
  }, [
    state?.prices,
    state?.ranges,
    state?.weights,
    state?.maxSpeeds,
    // state?.chargingTimes,
  ]);

  const activeFilterData = [
    {
      id: 1,
      value: state?.prices.length
        ? state?.prices.map((el) => el.min + "-" + el.max).join("") + "€"
        : null,

      image: image4,
    },
    {
      id: 2,
      value: state?.ranges.length
        ? state?.ranges.map((el) => "ab " + el.min).join("") + " km"
        : null,
      image: image,
    },
    {
      id: 3,
      value: state?.weights.length
        ? state?.weights.map((el) => "ab " + el.min).join("") + " kg"
        : null,
      image: image2,
    },
    {
      id: 4,
      value:
        state?.maxSpeeds.length || state?.maxSpeeds.length == undefined
          ? state?.maxSpeeds.map((el) => "ab " + el.min).join("") + " km/h"
          : null,
      image: image3,
    },
    // {
    //   id: 5,
    //   value: "Weitere Filter",
    //   image: image5,
    // },
  ];

  return (
    <div
      className={
        showAll
          ? "grid gap-2 w-full grid-cols-1 mt-4 md:mt-0 sm:grid-cols-2  lg:grid-cols-4  xl:filter-grid  px-2"
          : "hidden"
      }
    >
      {activeFilterData?.map((item, index) => (
        <div
          className={
            item.value !== null
              ? " w-full h-10 py-2  bg-grey-lighter  flex justify-between items-center "
              : "hidden"
          }
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
          <div
            onClick={() => {
              if (item.id === 1) dispatch({ type: "price", data: [] });
              if (item.id === 2) dispatch({ type: "range", data: [] });
              if (item.id === 3) dispatch({ type: "weight", data: [] });
              if (item.id === 4) dispatch({ type: "maxSpeed", data: [] });
            }}
            className={"w-3.5 my-auto mr-4 cursor-pointer"}
          >
            <AiOutlineClose size={20} />
          </div>
        </div>
      ))}
      {/* REMOVE ALL FILTERS */}
      <div
        className={
          state?.ranges.length ||
          state?.prices.length ||
          state?.weights.length ||
          state?.maxSpeeds.length ||
          state?.chargingTimes.length
            ? "w-fit flex items-end"
            : "hidden"
        }
      >
        <span
          className="text-sm  cursor-pointer"
          onClick={() => {
            setShowAll(!showAll);
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
            dispatch({
              type: "maxSpeed",
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

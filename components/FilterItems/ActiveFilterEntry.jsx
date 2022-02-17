import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import image5 from "../../public/images/ladezeit@2x.png";
import image6 from "../../public/images/more-svgrepo-com.png";
import { AiOutlineClose } from "react-icons/ai";
import { useStore } from "../store";
import { useEffect } from "react";
function ActiveFilterEntry(props) {
  const { state, dispatch } = useStore();

  useEffect(() => {
    if (
      state?.prices.length ||
      state?.range230Vs.length ||
      state?.loadingWeights.length ||
      state?.maxSpeeds.length ||
      state?.chargingTime230Vs.length ||
      state?.categorys.length
    ) {
      props.setShowAll(true);
    }
    if (
      !state?.prices.length &&
      !state?.range230Vs.length &&
      !state?.loadingWeights.length &&
      !state?.maxSpeeds.length &&
      !state?.chargingTime230Vs.length &&
      !state?.categorys.length
    ) {
      props.setShowAll(false);
    }
  }, [
    state?.prices,
    state?.range230Vs,
    state?.loadingWeights,
    state?.maxSpeeds,
    state?.chargingTime230Vs,
    state?.categorys,
  ]);
  console.log(props.showAll);
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
      value: state?.range230Vs.length
        ? state?.range230Vs.map((el) => "ab " + el.min).join("") + " km"
        : null,
      image: image,
    },
    {
      id: 3,
      value: state?.loadingWeights.length
        ? state?.loadingWeights.map((el) => "ab " + el.min).join("") + " kg"
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
    {
      id: 5,
      value:
        state?.chargingTime230Vs.length ||
        state?.chargingTime230Vs.length == undefined
          ? state?.chargingTime230Vs.map((el) => "ab " + el.min).join("") + " h"
          : null,
      image: image5,
    },
    {
      id: 6,
      value:
        state?.categorys.length || state?.categorys == undefined
          ? state?.categorys.map((el) => "Typ: " + el.min).join("")
          : null,
      image: image6,
    },
  ];

  return (
    <div
      className={
        props.showAll
          ? "grid gap-2 w-full grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 xl:filter-grid  px-2 items-start  mt-5"
          : "hidden"
      }
    >
      {activeFilterData?.map((item, index) => (
        <div
          className={
            item.value !== null
              ? " flex-1 h-10 py-2  bg-grey-lighter flex justify-between items-center "
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
              if (item.id === 2) dispatch({ type: "range230V", data: [] });
              if (item.id === 3) dispatch({ type: "loadingWeight", data: [] });
              if (item.id === 4) dispatch({ type: "maxSpeed", data: [] });
              if (item.id === 5)
                dispatch({ type: "chargingTime230V", data: [] });
              if (item.id === 6) dispatch({ type: "category", data: [] });
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
          state?.range230Vs.length ||
          state?.prices.length ||
          state?.loadingWeights.length ||
          state?.maxSpeeds.length ||
          state?.chargingTime230Vs.length ||
          state?.categorys.length
            ? " flex items-end h-10 "
            : "hidden"
        }
      >
        <div
          className="text-sm  cursor-pointer"
          onClick={() => {
            props.setShowAll(!props.showAll);
            dispatch({
              type: "range230V",
              data: [],
            });
            dispatch({
              type: "loadingWeight",
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
            dispatch({
              type: "chargingTime230V",
              data: [],
            });
            dispatch({
              type: "category",
              data: [],
            });
          }}
        >
          alle Filter loschen
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterEntry;

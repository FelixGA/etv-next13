import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const [shownCars, setShownCars] = useState([]);

  /* useEffect to apply the filters */
  useEffect(() => {
    if (!state?.prices || !state?.loadingWeights || !state?.Range230Vs || !state?.maxSpeeds || !state?.chargingTime230Vs || props.sortedCars?.length === 0)
      return;
    let filteredCars = props.sortedCars?.filter((car) => {
      if (
        state?.prices?.length > 0 &&
        state?.prices?.every(
          (entry) => entry.min > car.price || entry.max < car.price
        )
      )
        return false;

      if (
        state?.loadingWeights?.length > 0 &&
        state?.loadingWeights?.every(
          (entry) =>
            entry.min > car.loadingWeight.value || entry.max < car.loadingWeight.value
        )
      )
        return false;
      if (
        state?.Range230Vs?.length > 0 &&
        state?.Range230Vs?.every(
          (entry) => entry.min > car.Range230V.value || entry.max < car.Range230V.value
        )
      )
        return false;
      if (
        state?.maxSpeeds?.length > 0 &&
        state?.maxSpeeds?.every(
          (entry) =>
            entry.min > car.maxSpeed.value || entry.max < car.maxSpeed.value
        )
      )
        return false;
      if (
        state?.chargingTime230Vs?.length > 0 &&
        state?.chargingTime230Vs?.every(
          (entry) =>
            entry.min > car.chargingTime230V.value ||
            entry.max < car.chargingTime230V.value
        )
      )
        return false;
      if (
        state?.categorys?.length > 0 &&
        !state?.categorys?.some((entry) => entry.min == car.category)
      )
        return false;

      return true;
    });

    setShownCars(filteredCars);
  }, [
    state?.prices,
    state?.loadingWeights,
    state?.Range230Vs,
    state?.maxSpeeds,
    state?.chargingTime230Vs,
    state?.categorys,
    props.sortedCars,
  ]);
  /* ɢᴇᴛ pop up for not meeting criteria */
  const showMoreMessage = (
    <div className="mx-auto">
      <p className="text-base md:text-xl text-black-darkest">
        Ist ihr gesuchter Transporter nicht dabei?
      </p>

      <ButtonForAlleTransporter />
    </div>
  );
  /* ɢᴇᴛ the cars upon filters */
  
  const getdisplayedCars = shownCars?.map((caritem, index) => {
    return (
      <div className="container-product" key={index}>
        <div className="product-icon"></div>
        <CarCard caritem={caritem} />
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full   lg:w-full lg:m-2 bg-grey-extra lg:bg-white">
      {shownCars?.length === 0 ? showMoreMessage : getdisplayedCars}
    </div>
  );
};
export default ResultList;

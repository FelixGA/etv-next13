import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
import { useState, useEffect } from "react";
import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const [shownCars, setShownCars] = useState([]);

  /* useEffect to apply the filters */
  useEffect(() => {
    if (!state?.prices || !state?.weights || props.sortedCars?.length === 0)
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
        state?.weights?.length > 0 &&
        state?.weights?.every(
          (entry) =>
            entry.min > car.weight.value || entry.max < car.weight.value
        )
      )
        return false;
      if (
        state?.ranges?.length > 0 &&
        state?.ranges?.every(
          (entry) => entry.min > car.range.value || entry.max < car.range.value
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
        state?.chargingTimes?.length > 0 &&
        state?.chargingTimes?.every(
          (entry) =>
            entry.min > car.chargingTime.value ||
            entry.max < car.chargingTime.value
        )
      )
        return false;
      if (
        state?.categorys?.length > 0 &&
        !state?.categorys?.some((entry) => entry.min == car.categorie)
      )
        return false;

      return true;
    });

    setShownCars(filteredCars);
  }, [
    state?.prices,
    state?.weights,
    state?.ranges,
    state?.maxSpeeds,
    state?.chargingTimes,
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
  const getdisplayedCars = shownCars?.map((caritem) => {
    return (
      <div className="container-product" key={caritem.id}>
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

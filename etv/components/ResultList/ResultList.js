import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
import { useState, useEffect } from "react";
import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const [shownCars, setShownCars] = useState([]);
  console.log("STATES", state);
  /* useEffect to apply the filters */
  useEffect(() => {
    console.log(props.sendCars);
    if (!state?.prices || !state?.weights || props.sendCars?.length === 0)
      return;
    let filteredCars = props.sendCars?.filter((car) => {
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

      return true;
    });
    console.log(0, filteredCars);
    setShownCars(filteredCars);
  }, [
    state,
    /*  state.prices,
    state.weights,
    state.ranges, */
    props.sendCars,
  ]);
  /* ɢᴇᴛ pop up for not meeting criteria */
  const showMoreMessage = (
    <div className="mx-auto">
      <p className="text-base md:text-xl text-black-darkest">
        Ist ihr gesuchter Transporter nicht dabei?
      </p>
      <span onClick={() => window.location.reload(false)}>
        <ButtonForAlleTransporter />
      </span>
    </div>
  );
  /* ɢᴇᴛ the cars upon filters */
  const getdisplayedCars = shownCars?.map((caritem) => {
    return (
      <div className="container-product" key={caritem.id}>
        <div
          className="product-icon"
          //LATER for the individuAL product
          // onClick={() => {
          //   history.push(`/en/detail/${caritem._id}`);

          // }}
        ></div>
        <CarCard caritem={caritem} />
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full  md:m-auto lg:w-full lg:m-2 bg-grey-extra lg:bg-white">
      {shownCars?.length === 0 ? showMoreMessage : getdisplayedCars}
    </div>
  );
};
export default ResultList;

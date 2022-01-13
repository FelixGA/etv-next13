import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
import { useState, useEffect } from "react";
import ButtonForAlleTransporter from "../../components/Sliders/ButtonForAlleTransporter";
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const [autos, setAutos] = useState(props.sendCars);
  console.log("STATES", state);
  /* useEffect to apply the filters */
  useEffect(() => {
    if (!state?.prices || !state?.weights || props.sendCars?.length === 0)
      return;
    let filteredCars = props.sendCars?.filter((car) => {
      if (
        state?.prices?.length > 0 &&
        state?.prices?.some(
          (entry) => entry.min < car.price && entry.max > car.price
        )
      )
        if (
          state?.weights?.length > 0 &&
          state?.weights?.some(
            (entry) =>
              car.weight.value > entry.min && car.weight.value < entry.max
          )
        )
          if (
            state?.ranges?.length > 0 &&
            state?.ranges?.some(
              (entry) =>
                car.range.value > entry.min && car.range.value < entry.max
            )
          )
            return car;
    });

    state.prices.length || state.weights.length ? setAutos(filteredCars) : null;
  }, [state.prices, state.weights, props.sendCars]);
  /* ɢᴇᴛ pop up for not meeting criteria */
  const popup = (
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
  const getdisplayedCars = autos?.map((caritem) => {
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
  /* ɢᴇᴛ the cars WITHOUT filters */
  const getdisplayedCarsAsInitial = props.sendCars?.map((caritem) => {
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
      {autos
        ? autos?.length === 0
          ? popup
          : getdisplayedCars
        : getdisplayedCarsAsInitial}
    </div>
  );
};
export default ResultList;

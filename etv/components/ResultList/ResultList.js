import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
import { useState, useEffect } from "react";

const ResultList = (props) => {
  const { state, dispatch } = useStore();
  //const displayedCars = props.sendCars;
  const [autos, setAutos] = useState(props.sendCars);
  console.log(state.weights);
  // filter cars
  useEffect(() => {
    if (!state?.prices || props.sendCars?.length === 0) return;
    let filteredCars = props.sendCars?.filter((car) => {
      if (
        state?.prices?.length > 0 &&
        state?.prices?.some(
          (entry) => entry.min < car.price && entry.max > car.price
        )
      ) {
        // console.log(props.sendCars);
        return car;
      }

      if (
        state?.weights?.length > 0 &&
        state?.weights?.some(
          (entry) => entry.min < car.weight && entry.max > car.weight
        )
      ) {
        console.log(props.sendCars);
        return car;
      }
      return;
    });
    state.prices.length ? setAutos(filteredCars) : autos;
  }, [state.prices, props.sendCars]);

  //state.filter, sendCars
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
      {autos ? getdisplayedCars : getdisplayedCarsAsInitial}
    </div>
  );
};
export default ResultList;

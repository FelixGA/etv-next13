import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
import { useState, useEffect } from "react";

const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const displayedCars = props.sendCars;
  const [autos, setAutos] = useState();
  // filter cars
  useEffect(() => {
    if (!state?.prices || displayedCars?.length === 0) return;
    let filteredCars = displayedCars?.filter((car) => {
      if (
        state?.prices?.length > 0 &&
        state?.prices?.some(
          (entry) => entry.min < car.price && entry.max > car.price
        )
      ) {
        return car;
      }
      console.log("true PASSED", car);

      return;
      // if (
      //   state.filter.weight?.length > 0 &&
      //   state.filter.weight.every(
      //     (entry) => entry.min > car.weight || entry.max < car.weight
      //   )
      // )
      //   return;
    });

    // filteredCars ? setAutos(filteredCars) : setAutos(displayedCars);
    // console.log("WHAT WE FILTERED", filteredCars);
    // setAutos(filteredCars);
  }, [state.prices]);

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
  return (
    <div className="flex flex-col w-full  md:m-auto lg:w-full lg:m-2 bg-grey-extra lg:bg-white">
      {getdisplayedCars}
    </div>
  );
};
export default ResultList;

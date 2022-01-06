import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";

const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const { cars } = state;
  const displayedCars = props.getCars;

  const getdisplayedCars = displayedCars?.map((caritem) => {
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

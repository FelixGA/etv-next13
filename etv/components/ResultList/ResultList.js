import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
<<<<<<< HEAD

const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const { cars } = state;
  console.log(props);

  const displayedCars = props.getCars;
=======
const ResultList = (props) => {
  const { state, dispatch } = useStore();
  const { cars } = state;

  const displayedCars = props.getCarslowest;
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106

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
<<<<<<< HEAD
    <>
      <div className="flex flex-col w-full  md:m-auto lg:w-full lg:m-2 bg-grey-extra lg:bg-white">
        {getdisplayedCars}
      </div>
    </>
=======
    <div className="flex flex-col w-full  md:m-auto lg:w-full lg:m-2 bg-grey-extra lg:bg-white">
      {getdisplayedCars}
    </div>
>>>>>>> 79f8b63f504ac1d9ed938b7517745ff0970e2106
  );
};
export default ResultList;

import CarCard from "../../components/ResultList/CarCard";
import { useStore } from "../store";
const ResultList = () => {
  const { state, dispatch } = useStore();
  const { cars } = state;
  console.log(cars);

  const caritems = [
    {
      id: 1,
      title: "Renault Kangoo Z.E",
      price: "19.000",
      image: require("../../public/images/ARI-458-Kipper-L-Heck-300x199.jpg"),
      description: "RGF",
      quitefar: "160",
      weight: "2800",
      distance: "100",
      vmax: "1400",
      loadingtime: "3",
      ergebnis: "1.5",
    },
    {
      id: 2,
      title: "Renault  Z.E",
      price: "29.000",
      image: require("../../public/images/Addax-MT-Laubgitter-Wiki-300x200.jpg"),
      description: "RGdrtgF",
      quitefar: "160",
      weight: "3800",
      distance: "120",
      vmax: "1200",
      loadingtime: "3",
      ergebnis: "1.6",
    },
    {
      id: 3,
      title: " Kangoo Z.E",
      price: "59.000",
      image: require("../../public/images/VW-e-Crafter-Front-300x225.jpg"),
      description: "RGF",
      quitefar: "1600",
      weight: "180",
      distance: "160",
      vmax: "1000",
      loadingtime: "9",
      ergebnis: "1.2",
    },
    {
      id: 4,
      title: " srgdrg Z.E",
      price: "12.000",
      image: require("../../public/images/Stama-Maestro-Front-300x200.jpg"),
      description: "RGF",
      quitefar: "100",
      weight: "1800",
      distance: "10",
      vmax: "10",
      loadingtime: "19",
      ergebnis: "3.2",
    },
    {
      id: 5,
      title: " Kandrgf Z.E",
      price: "199.000",
      image: require("../../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg"),
      description: "RGF",
      quitefar: "1000",
      weight: "18000",
      distance: "1000",
      vmax: "10000",
      loadingtime: "99",
      ergebnis: "1.2",
    },
  ];
  const getCaritems = caritems.map((caritem) => {
    return (
      <div className="container-product" key={caritems.id}>
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
    <div className="flex flex-col w-full md:w-3/4 md:m-auto lg:w-3/4 lg:m-2 bg-grey-extra lg:bg-white">
      {getCaritems}
    </div>
  );
};
export default ResultList;

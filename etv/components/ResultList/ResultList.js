import Image from "next/image";
import CarCard from "../../components/ResultList/CarCard";
const ResultList = () => {
  const caritems = [
    {
      id: 1,
      title: "Renault Kangoo Z.E",
      price: "€ 19.000",
      image: require("../../public/images/ARI-458-Kipper-L-Heck-300x199.jpg"),
      description: "RGF",
      quitefar: "160km",
      weight: "2800kg",
      distance: "100",
      vmax: "1400km/h",
      loadingtime: "3h",
      ergebnis: "1.5",
    },
    {
      id: 2,
      title: "Renault  Z.E",
      price: "€ 19.000",
      image: require("../../public/images/Addax-MT-Laubgitter-Wiki-300x200.jpg"),
      description: "RGdrtgF",
      quitefar: "160km",
      weight: "3800kg",
      distance: "120",
      vmax: "1200km/h",
      loadingtime: "3h",
      ergebnis: "1.6",
    },
    {
      id: 3,
      title: " Kangoo Z.E",
      price: "€ 19.000",
      image: require("../../public/images/VW-e-Crafter-Front-300x225.jpg"),
      description: "RGF",
      quitefar: "1600km",
      weight: "180kg",
      distance: "160",
      vmax: "1000km/h",
      loadingtime: "9h",
      ergebnis: "1.2",
    },
    {
      id: 4,
      title: " srgdrg Z.E",
      price: "€ 29.000",
      image: require("../../public/images/Stama-Maestro-Front-300x200.jpg"),
      description: "RGF",
      quitefar: "100km",
      weight: "1800kg",
      distance: "10",
      vmax: "10km/h",
      loadingtime: "19h",
      ergebnis: "3.2",
    },
    {
      id: 5,
      title: " Kandrgf Z.E",
      price: "€ 99.000",
      image: require("../../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg"),
      description: "RGF",
      quitefar: "1000km",
      weight: "18000kg",
      distance: "1000",
      vmax: "10000km/h",
      loadingtime: "99h",
      ergebnis: "1.2",
    },
  ];
  const getCaritems = caritems.map((caritem) => {
    return (
      <div className="container-product">
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
    <div className="flex flex-col w-full lg:w-4/5 h-screen bg-red-200">
      {getCaritems}
    </div>
  );
};
export default ResultList;

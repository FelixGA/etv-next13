import { useState, useEffect } from "react";
import Basics from "./Basics";
import CarDimentions from "./CarDimentions";
import Details from "./Details";

const TechnicalDetails = ({ carItem }) => {
  const [basics, SetBasics] = useState([]);
  const [vehichleDimentions, SetVehichleDimentions] = useState([]);
  const [details, SetDetails] = useState([]);

  // console.log(carItem);

  /* to get the new data in case they are updated */
  /* get two subsets of the car properties to map them */
  useEffect(() => {
    const basics = [
      carItem.seats,
      carItem.range230V,
      carItem.rangeLithium,
      carItem.maxSpeed,
      carItem.chargingTimeLithium,
      carItem.chargingTime230V,
      carItem.chargingTimeFast,
      carItem.power,
      carItem.loadingWeight,
      carItem.curbweight,
    ];
    SetBasics(basics);

    const vehichleDimentions = [
      /* carItem.carSizes, */
      { key: "Fahrzeugmaße" },
      carItem.carSizesLength,
      carItem.carSizesWidth,
      carItem.carSizesHeight,
      carItem.wheelbase,
      carItem.loadingVolume, // "Laderaum-Maße"
      carItem.loadingVolumeLength,
      carItem.loadingVolumeWidth,
      carItem.loadingVolumeHeight,
      carItem.loadingVolumeTotal,
      carItem.loadingArea,
    ];
    SetVehichleDimentions(vehichleDimentions);

    const details = [
      { key: "Garantie:", value: " " },
      carItem.batteryGuarantee,
      carItem.guarantee,
      { key: "Akku:", value: " " },
      carItem.batteryCapacityLithium,
      carItem.batteryCapacityBlei,
      carItem.batteryIncluded,
      carItem.consumption,
      { key: "Sonstiges:", value: " " },
      // carItem.availability,
      carItem.subsidies,
    ];
    SetDetails(details);

  }, [carItem]);

  return (
    <div className="flex flex-col items-start justify-center w-full pt-8 pb-16 lg:pt-12 lg:px-4 ">
      <h3 className="pl-4 text-3xl font-bold text-blue-extra lg:text-4xl print:h-0 print:hidden">
        Technische Daten
      </h3>
      <div className="flex flex-col w-full lg:flex-row print:flex-row ">
        <Basics basics={basics} carItem={carItem} />
        <CarDimentions
          vehichleDimentions={vehichleDimentions}
          carItem={carItem}
        />
        <Details details={details} carItem={carItem} />
      </div>
      {/* <div className="flex flex-col w-full m-auto lg:w-1/2 ">
      </div> */}
    </div>
  );
};
export default TechnicalDetails;

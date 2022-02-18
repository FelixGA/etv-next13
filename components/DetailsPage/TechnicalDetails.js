import { useState, useEffect } from "react";
import Basics from "./Basics";
import CarDimentions from "./CarDimentions";
import Details from "./Details";

const TechnicalDetails = ({ carItem }) => {
  const [basics, SetBasics] = useState([]);
  const [vehichleDimentions, SetVehichleDimentions] = useState([]);
  const [details, SetDetails] = useState([]);

  /* to get the new data in case they are updated */
  /* get two subsets of the car properties to map them */
  useEffect(() => {
    const basics = [
      carItem.range230V,
      carItem.rangeLithium,
      carItem.maxSpeed,
      carItem.chargingTime230V,
      carItem.chargingTimeLithium,
      carItem.chargingTimeFast,
      carItem.loadingWeight,
      carItem.curbweight,
    ];
    SetBasics(basics);
    const details = [
      carItem.subsidies,
      carItem.batteryGuarantee,
      carItem.guarantee,
      carItem.availability,
    ];
    SetDetails(details);
    const vehichleDimentions = [
      { key: carItem.loadingVolume.key },
      {
        value:
          carItem.loadingVolume.valueheight + " " + carItem.carSizes.baseUnit,
        key: carItem.loadingVolume.height,
      },
      {
        value:
          carItem.loadingVolume.valuewidth + " " + carItem.carSizes.baseUnit,
        key: carItem.loadingVolume.width,
      },
      {
        value:
          carItem.loadingVolume.valuelength + " " + carItem.carSizes.baseUnit,
        key: carItem.loadingVolume.length,
      },

      { key: carItem.carSizes.key },
      {
        value: carItem.carSizes.valueheight + " " + carItem.carSizes.baseUnit,
        key: carItem.carSizes.height,
      },
      {
        value: carItem.carSizes.valuewidth + " " + carItem.carSizes.baseUnit,
        key: carItem.carSizes.width,
      },
      {
        value: carItem.carSizes.valuelength + " " + carItem.carSizes.baseUnit,
        key: carItem.carSizes.length,
      },
    ];

    SetVehichleDimentions(vehichleDimentions);
  }, [carItem]);

  /* calculations */
  let loadingspace = parseFloat(
    (carItem?.loadingVolume.valueheight *
      carItem?.loadingVolume.valuewidth *
      carItem?.loadingVolume.valuelength) /
      1000000
  ).toFixed(2);
  let truckBed = parseFloat(
    (carItem?.loadingVolume.valuewidth * carItem?.loadingVolume.valuelength) /
      1000
  ).toFixed(2);
  return (
    <div className="w-full flex flex-col justify-center items-start lg:pt-12  px-4 py-8 lg:px-24  ">
      <h3 className="text-black-darkest font-bold py-2 lg:text-3xl for-print	">
        Technische Daten
      </h3>
      <div className="flex flex-col w-full lg:flex-row">
        <Basics basics={basics} carItem={carItem} />
        <CarDimentions
          vehichleDimentions={vehichleDimentions}
          carItem={carItem}
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2 m-auto ">
        <Details details={details} carItem={carItem} />
      </div>
    </div>
  );
};
export default TechnicalDetails;

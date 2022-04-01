import { useState, useEffect } from "react";
import Basics from "./Basics";
import CarDimentions from "./CarDimentions";
import Details from "./Details";

const TechnicalDetails = ({ carItem }) => {
  const [basics, SetBasics] = useState([]);
  const [vehichleDimentions, SetVehichleDimentions] = useState([]);
  const [details, SetDetails] = useState([]);
  console.log("carItem", carItem);

  /* to get the new data in case they are updated */
  /* get two subsets of the car properties to map them */
  useEffect(() => {
    const basics = [
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
    const details = [
      carItem.subsidies,
      carItem.batteryGuarantee,
      carItem.guarantee,
      carItem.availability,
      carItem.batteryCapacityLithium,
      carItem.batteryCapacityBlei,
      carItem.batteryIncluded,
      carItem.consumption,
      carItem.seats,
    ];

    SetDetails(details);
    const vehichleDimentions = [
      carItem.carSizes,
      carItem.loadingVolumeHeight,
      carItem.loadingVolumeLength,
      carItem.wheelbase,
      carItem.loadingVolumeWidth,
      carItem.loadingVolume,
      carItem.carSizesHeight,
      carItem.carSizesLength,
      carItem.carSizesWidth,
      carItem.loadingVolumeTotal,
      carItem.loadingArea,
    ];

    // const vehichleDimentions = [
    //   { key: carItem.carSizes.key },
    //   {
    //     value: carItem.carSizes.valueheight + " " + carItem.carSizes.baseUnit,
    //     key: carItem.carSizes.height,
    //   },
    //   {
    //     value: carItem.carSizes.valuewidth + " " + carItem.carSizes.baseUnit,
    //     key: carItem.carSizes.width,
    //   },
    //   {
    //     value: carItem.carSizes.valuelength + " " + carItem.carSizes.baseUnit,
    //     key: carItem.carSizes.length,
    //   },
    //   {
    //     key: carItem.carSizes.wheelbase,
    //     value: carItem.carSizes.valuewheelbase + " mm",
    //   },

    //   { key: carItem.loadingVolume.key },

    //   {
    //     value:
    //       carItem.loadingVolume.valueheight + " " + carItem.carSizes.baseUnit,
    //     key: carItem.loadingVolume.height,
    //   },
    //   {
    //     value:
    //       carItem.loadingVolume.valuewidth + " " + carItem.carSizes.baseUnit,
    //     key: carItem.loadingVolume.width,
    //   },
    //   {
    //     value:
    //       carItem.loadingVolume.valuelength + " " + carItem.carSizes.baseUnit,
    //     key: carItem.loadingVolume.length,
    //   },

    //   {
    //     key: carItem.loadingArea.key,
    //     value: carItem.loadingArea.value + " " + carItem.loadingArea.baseUnit,
    //   },
    //   {
    //     key: carItem.loadingVolumeTotal.key,
    //     value:
    //       carItem.loadingVolumeTotal.value +
    //       " " +
    //       carItem.loadingVolumeTotal.baseUnit,
    //   },
    // ];

    SetVehichleDimentions(vehichleDimentions);
  }, [carItem]);

  /* calculations */
  // let loadingspace = parseFloat(
  //   (carItem?.loadingVolume.valueheight *
  //     carItem?.loadingVolume.valuewidth *
  //     carItem?.loadingVolume.valuelength) /
  //     1000000
  // ).toFixed(2);
  // let truckBed = parseFloat(
  //   (carItem?.loadingVolume.valuewidth * carItem?.loadingVolume.valuelength) /
  //     1000
  // ).toFixed(2);
  return (
    <div className="w-full flex flex-col justify-center items-start lg:pt-12 lg:px-4 py-8 ">
      <h3 className="text-blue-extra font-bold text-3xl lg:text-4xl pl-4">
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

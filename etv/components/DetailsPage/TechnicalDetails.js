import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
const TechnicalDetails = ({ carItem }) => {
  const [basics, SetBasics] = useState([]);
  const [vehichleDimentions, SetVehichleDimentions] = useState([]);

  /* to get the new data in case they are updated */
  /* get two subsets of the car properties to map them */
  useEffect(() => {
    const basics = [
      carItem.range,
      carItem.weight,
      carItem.maxSpeed,
      carItem.chargingTime[0],
      carItem.subsidies,
      carItem.guarantee,
      carItem.chargingTime[2],
    ];
    console.log(basics);
    SetBasics(basics);
    // const vehichleDimentions = (({
    //   loadingHeight,
    //   loadingVolume,
    //   seats,
    //   height,
    //   width,
    //   length,
    //   wheelbase,
    //   loadArea,
    //   curbWeight,
    // }) => [
    //   loadingHeight,
    //   loadingVolume,
    //   seats,
    //   height,
    //   width,
    //   length,
    //   wheelbase,
    //   loadArea,
    //   curbWeight,
    // ])(carItem);
    // SetVehichleDimentions(vehichleDimentions);
  }, [carItem]);

  return (
    <div className="w-full flex flex-col justify-center items-start lg:pt-12  px-4 py-8 lg:px-24">
      <h3 className="text-black-darkest font-bold py-2 lg:text-3xl">
        Technische Daten
      </h3>
      <div className="flex flex-col w-full lg:flex-row">
        <section className="w-full lg:w-1/2 lg:px-2">
          <h3 className="text-black-darkest font-bold py-2">Grundlagen</h3>
          <div className="flex flex-col w-full text-[#2C3F53] font-bold ">
            {basics?.map((item, index) => (
              <div
                key={index}
                className={
                  index % 2 == 0
                    ? "flex flex-row w-full bg-[#F2F5F8] "
                    : "flex flex-row w-full "
                }
              >
                <p className="w-1/2 py-1">{item.key}</p>
                <p className="w-1/2 py-1">
                  {item.value} {item.baseUnit}
                </p>
              </div>
            ))}
          </div>
          <h3 className="text-black-darkest font-bold py-2">Details</h3>
          <div className="flex flex-col w-full text-[#2C3F53] font-bold ">
            <p>dst</p>
          </div>
        </section>
        <section className="w-full lg:w-1/2 lg:px-2">
          <h3 className="text-black-darkest font-bold py-2">Fahrzeug Maße </h3>
          {/* <div className="flex flex-col w-full text-[#2C3F53] font-bold">
            {vehichleDimentions?.map((item, index) => (
              <div
                key={uuidv4()}
                className={
                  index % 2 == 0
                    ? "flex flex-row w-full bg-[#F2F5F8] "
                    : "flex flex-row w-full "
                }
              >
                <p className="w-1/2 py-1">{item.key}</p>
                <p className="w-1/2 py-1">
                  {item.value} {item.baseUnit}
                </p>
              </div>
            ))}
          </div> */}
        </section>
      </div>
    </div>
  );
};
export default TechnicalDetails;

 
import { useState, useEffect } from "react";
const TechnicalDetails = ({ carItem }) => {
  const [basics, SetBasics] = useState([]);
  const [vehichleDimentions, SetVehichleDimentions] = useState([]);
  const [details, SetDetails] = useState([]);
//console.log(carItem)
  /* to get the new data in case they are updated */
  /* get two subsets of the car properties to map them */
  useEffect(() => {
    const basics = [
      carItem.Range230V,
      carItem.RangeLithium,
      carItem.loadingWeight,
      carItem.maxSpeed,
      carItem.chargingTime230V,
      carItem.chargingTimeLithium,
      carItem.chargingTimeFast,
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
      carItem.loadingVolume,
      carItem.carSizes,
     
  ];

    SetVehichleDimentions(vehichleDimentions);
  }, [carItem]);
console.log(vehichleDimentions)
  return (
    <div className="w-full flex flex-col justify-center items-start lg:pt-12  px-4 py-8 lg:px-24  ">
      <h3 className="text-black-darkest font-bold py-2 lg:text-3xl for-print	">
        Technische Daten
      </h3>
      <div className="flex flex-col w-full lg:flex-row">
        <section className="w-full lg:w-1/2 lg:px-2">
          <h3 className="text-black-darkest font-bold pt-8 pb-4">Grundlagen</h3>
          <div className="flex flex-col w-full text-[#2C3F53] lg:pr-6">
            <div
              className="
                 flex flex-row w-full bg-[#F2F5F8] "
            >
              <p className="w-1/2 py-1 ">Class:</p>
              <p className="w-1/2 py-1">{carItem.typeClass}</p>
            </div>
            {basics?.map((item, index) => (
              <div
                key={index}
                className={
                  index % 2 !== 0
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
        </section>
        <section className="w-full lg:w-1/2 lg:px-2 lg:pl-6 ">
          <h3 className="text-black-darkest font-bold pt-8 pb-4">
            Fahrzeug Maße{" "}
          </h3>
          <div className="flex flex-col w-full text-[#2C3F53] ">
            {vehichleDimentions?.map((item, index) => (
              <div
                 key={index}
                className={
                  index % 2 == 0
                    ? "flex flex-row w-full bg-[#F2F5F8] "
                    : "flex flex-row w-full "
                }
              >
                <p className="w-1/2 py-1">{item.Key}</p>
                <p className="w-1/2 py-1">
                  {item.value} {item.baseUnit}
                </p>
                <p className="w-1/2 py-1">
                  {item.value} {item.baseUnit}
                </p>
               
              </div>
            ))}
            <h3 className="text-black-darkest font-bold pt-8 pb-4">
            Details
          </h3>
            {details?.map((item, index) => (
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
        </section>
      </div>
    </div>
 );
};
export default TechnicalDetails;

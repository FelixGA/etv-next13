import TestResult from "../repeated/TestResult";
import { useState, useEffect } from "react";

export default function ActiveCompareEntries({ keys, comparedCars }) {
  const [entries, setEntries] = useState([]);
  console.log(entries, "test");

  useEffect(() => {
    if (!keys?.length > 0 || !comparedCars?.length > 0) return;
    const entries = [];

    const entryKeys = [];
    for (const key of keys) {
      entryKeys.push(comparedCars[0][key].key);
      console.log(entryKeys);
      // console.log(comparedCars[0][key].key);
    }
    entries.push(entryKeys);

    for (const car of comparedCars) {
      const carValues = [];
      for (const key of keys) {
        const entryValues = [];

        const entry = car[key];
        carValues.push(`${entry.value} ${entry.baseUnit}`);
      }
      entries.push(carValues);
    }
    setEntries(entries);
  }, [keys, comparedCars]);
  return (
    <>
      {/* KEYS */}

      {/* <div className="flex items-center flex-1 bg-white  pl-8">
          <h3 className="text-blue-extra text-xl font-bold ">Grundlagen</h3>
        </div> */}

      {entries.map((entry, index) => (
        <div
          key={index}
          className="relative h-full bg-grey-lighter min-w-[160px]"
        >
          {entry.map((value, index) => (
            <p
              className={`${
                index % 2 == 1 ? "bg-grey-lighter" : "bg-white"
              } text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8 h-10`}
            >
              {value}
            </p>
          ))}
        </div>
      ))}

      {/* VALUES */}
      {/* {comparedCars?.map((item, index) => (
        <div className="relative min-w-[160px]">
          <div className="flex lg:hidden h-11 md:h-[76px] items-end pb-2">
            <h2 className="text-sm font-bold text-[#F45625] pl-4 lg:pl-8">
              Testnote
              <span className="text-green-light">{item.rating.value}</span>
            </h2>
          </div>
          <div className="hidden lg:flex h-20 p-4 pl-8">
            <TestResult
              itemKey={item.rating.key}
              itemValue={item.rating?.value || "-"}
            />
          </div>
          <div className=" h-10 bg-grey-lighter flex-1 flex items-center ">
            <h3 className="second-category-title text-sm lg:text-lg font-medium text-blue-extra pl-4 lg:pl-8">
              {item.typeClass}
            </h3>
          </div>
          <div className="third-category ">
            <h3 className="third-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 flex items-center text-blue-extra">
              {item.range230V.value}
              <span> &nbsp;{item.range230V.baseUnit}</span>
            </h3>
          </div>

          <div className="forth-category  bg-grey-lighter">
            <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
              {item.rangeLithium.value}

              <span> &nbsp;{item.rangeLithium.baseUnit}</span>
            </h3>
          </div>
          <div className="fifth-category h-10">
            <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
              {item.maxSpeed.value}
              <span> &nbsp;{item.maxSpeed.baseUnit}</span>
            </h3>
          </div>
          <div className="sixth-category h-10 bg-grey-lighter">
            <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
              {item.chargingTime230V.value}
              <span> &nbsp;{item.chargingTime230V.baseUnit}</span>
            </h3>
          </div>
          <div className="seventh-category h-10">
            <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
              {item.chargingTimeLithium.value}
              <span> &nbsp;{item.chargingTimeLithium.baseUnit}</span>
            </h3>
          </div>
          <div className="eigth-category h-10  bg-grey-lighter">
            <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
              {item.chargingTimeFast.value}
              <span> &nbsp;{item.chargingTimeFast.baseUnit}</span>
            </h3>
          </div>

          <div className="ten-category h-10 bg-white">
            <h3 className="ten-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center ">
              {item.power.value}
              <span> &nbsp;{item.power.baseUnit}</span>
            </h3>
          </div>
          <div className="eleven-category h-10 bg-grey-lighter ">
            <h3 className="eleven-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
              payload
            </h3>
          </div>
          <div className="twelwe-category h-10 bg-white ">
            <h3 className="twelwe-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
              {item.curbweight.value}
              <span> &nbsp;{item.curbweight.baseUnit}</span>
            </h3>
          </div>
          <div className="thirtine-category h-10 bg-grey-lighter">
            <h3 className="thirtine-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
              Gesamtgewicht
            </h3>
          </div>
        </div>
      ))} */}
    </>
  );
}

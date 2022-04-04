import TestResult from "../repeated/TestResult";
import { useState, useEffect } from "react";

import ButtonAnfragen from "../ResultList/ButtonAnfragen";

export default function ActiveCompareEntries({ keys, comparedCars }) {
  const [entries, setEntries] = useState([]);
  // console.log(comparedCars);
  let testResultArr = comparedCars.map((test) => test.rating);

  useEffect(() => {
    if (!keys?.length > 0 || !comparedCars?.length > 0) return;
    let entries = [];
    let totalWeight = [];
    for (let i = 0; i < comparedCars.length; i++) {
      let weight =
        comparedCars[i].curbweight.value +
        comparedCars[i].loadingWeight.value +
        " kg";
      totalWeight.push(weight);
    }
    const entryKeys = [];
    for (const key of keys) {
      entryKeys.push(
        comparedCars[0][key].key ? comparedCars[0][key].key : keys[0]
      );
    }
    entries.push(entryKeys);

    for (const car of comparedCars) {
      const carValues = [];
      {
      }

      for (const key of keys) {
        const entryValues = [];

        const entry = car[key];

        carValues.push(`${entry.value} ${entry.baseUnit}`);
      }
      entries.push(carValues);
    }
    /* Main keys push to position 8 for calculating the total weight */

    entries[0].splice(9, 0, "Gesamtgewicht");
    for (let i = 1; i < comparedCars?.length + 1; i++) {
      // console.log(comparedCars, "comparedCars");
      entries[i].splice(9, 0, totalWeight[i - 1]);
    }

    setEntries(entries);
    // console.log(entries);
  }, [keys, comparedCars]);

  return (
    <>
      {entries.map((entry, index) => (
        <div key={index} className="relative h-full min-w-[160px]">
          {index == 0 ? (
            <div className="flex items-end pb-1 flex-1 bg-white h-18 pl-4 lg:pl-8">
              <h3 className="text-blue-extra text-2xl font-bold pb-2">
                Grundlagen
              </h3>
            </div>
          ) : (
            <div className="pt-1 lg:pt-4 flex items-center h-18 lg:pl-8 pb-2">
              <TestResult testResultArr={testResultArr[index - 1]} />
            </div>
          )}
          {/* ADDS THE CLASS TYPE AS FIRST LINE */}
          {index == 0 ? (
            <div className="flex items-center  flex-1 bg-grey-lighter h-12 pl-4 lg:pl-8 ">
              <p className="text-blue-extra text-sm lg:text-lg  ">Klasse</p>
            </div>
          ) : (
            <div className="flex items-center  flex-1 bg-grey-lighter h-12 pl-4 lg:pl-8">
              <p className="text-blue-extra text-sm lg:text-lg ">
                {" "}
                {comparedCars[index - 1].typeClass}
              </p>
            </div>
          )}

          {entry.map((value, index) => (
            <>
              <div
                key={index}
                className={`${
                  index % 2 == 1
                    ? "bg-grey-lighter flex items-center h-12 "
                    : "bg-white flex items-center h-12"
                }`}
              >
                <p className="text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8">
                  {value || "-"}
                </p>
              </div>
            </>
          ))}
        </div>
      ))}
    </>
  );
}

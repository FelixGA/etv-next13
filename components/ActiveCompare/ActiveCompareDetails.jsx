import TestResult from "../repeated/TestResult";
import { useState, useEffect } from "react";

import ButtonAnfragen from "../ResultList/ButtonAnfragen";

export default function ActiveCompareDetails({ keys, comparedCars }) {
  const [entries, setEntries] = useState([]);
  console.log(comparedCars);
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

      for (const key of keys) {
        const entryValues = [];

        const entry = car[key];

        carValues.push(`${entry.value} ${entry.baseUnit}`);
      }
      entries.push(carValues);
    }
    /* Main keys push to position 8 for calculating the total weight */
    console.log(entries, "entries test");
    setEntries(entries);
    // console.log(entries);
  }, [keys, comparedCars]);

  return (
    <>
      {entries.map((entry, index) => (
        <div key={index} className="relative h-full min-w-[160px] ">
          <h3
            className={
              index == 0
                ? "h-16 font-bold text-blue-extra pl-4 lg:pl-8 pt-5 text-2xl"
                : "h-16 invisible"
            }
          >
            Details
          </h3>
          {/* ADDS THE CLASS TYPE AS FIRST LINE */}

          {entry.map((value, index) => (
            <div
              className={`${
                index % 2 == 1
                  ? "bg-white flex items-center h-12 "
                  : "bg-grey-lighter  flex items-center h-12"
              }`}
            >
              <p className="text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8">
                {value || "-"}
              </p>
            </div>
          ))}
          <div
            className={
              index !== 0
                ? "pl-4 md:pl-8 bg-grey-border h-20 flex items-center"
                : ""
            }
          >
            {index !== 0 ? (
              <ButtonAnfragen />
            ) : (
              <div className="bg-grey-border h-20"></div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

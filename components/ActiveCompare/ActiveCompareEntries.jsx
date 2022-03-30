import TestResult from "../repeated/TestResult";
import { useState, useEffect } from "react";

import ButtonAnfragen from "../ResultList/ButtonAnfragen";

export default function ActiveCompareEntries({ keys, comparedCars }) {
  // (comparedCars, "blablabla");
  const [entries, setEntries] = useState([]);

  let testResultArr = comparedCars.map((test) => test.rating);
  // (testResultArr);

  useEffect(() => {
    if (!keys?.length > 0 || !comparedCars?.length > 0) return;
    const entries = [];

    const entryKeys = [];
    for (const key of keys) {
      entryKeys.push(comparedCars[0][key].key);
      // (entryKeys);
      // (comparedCars[0][key].key);
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
      {entries.map((entry, index) => (
        <div key={index} className="relative h-full min-w-[160px] bg-white">
          {index == 0 ? (
            <div className="flex items-end pb-1 flex-1 bg-white h-18 pl-4 lg:pl-8">
              <h3 className="text-blue-extra text-xl font-bold pb-2">
                Grundlagen
              </h3>
            </div>
          ) : (
            <div className="pt-1 lg:pt-4 flex items-center h-18 lg:pl-8">
              <TestResult testResultArr={testResultArr[index - 1]} />
            </div>
          )}

          {entry.map((value, index) => (
            <div
              className={`${
                index % 2 == 1
                  ? "bg-white flex items-center h-12 "
                  : "bg-grey-lighter flex items-center h-12"
              }`}
            >
              <p
                className={
                  value.includes("Laderaum-Maße")
                    ? "text-blue-extra text-lg font-bold pl-4 lg:pl-8"
                    : "text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8"
                }
              >
                {value[0] == 0 || value.includes("undefined") ? "-" : value}
              </p>
            </div>
          ))}
          <div
            className={
              index !== 0 ? "pl-4 bg-grey-border h-20 flex items-center" : ""
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

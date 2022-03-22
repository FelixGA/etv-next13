import TestResult from "../repeated/TestResult";
import { useState, useEffect } from "react";
import ActiveCompareButton from "./ActiveCompareButton";
import ButtonAnfragen from "../ResultList/ButtonAnfragen";

export default function ActiveCompareEntries({ keys, comparedCars }) {
  // console.log(test, "blablabla");
  const [entries, setEntries] = useState([]);
  // console.log(entries, "test");
  let testResultArr = comparedCars.map((test) => test.rating);
  // console.log(testResultArr);

  useEffect(() => {
    if (!keys?.length > 0 || !comparedCars?.length > 0) return;
    const entries = [];

    const entryKeys = [];
    for (const key of keys) {
      entryKeys.push(comparedCars[0][key].key);
      // console.log(entryKeys);
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
      {entries.map((entry, index) => (
        <div key={index} className="relative h-full min-w-[160px] bg-white">
          {index == 0 ? (
            <div className="flex items-end pb-2 flex-1 bg-white h-20 pl-4 lg:pl-8">
              <h3 className="text-blue-extra text-xl font-bold ">Grundlagen</h3>
            </div>
          ) : (
            <div className="pt-6 lg:pt-4 flex items-center h-20 lg:pl-8">
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
              <p className="text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8">
                {value}
              </p>
            </div>
          ))}
          <div
            className={
              index !== 0 ? "px-4 bg-grey-border h-20 flex items-center" : ""
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

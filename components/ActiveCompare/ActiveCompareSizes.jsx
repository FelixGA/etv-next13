import { useState, useEffect } from "react";

export default function ActiveCompareSizes({ keys, comparedCars }) {
  const [columns, setColumns] = useState([]);
  let testResultArr = comparedCars.map((test) => test.rating);

  useEffect(() => {
    if (!keys?.length > 0 || !comparedCars?.length > 0) return;
    let columns = [];
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
    columns.push(entryKeys);

    for (const car of comparedCars) {
      const carValues = [];

      for (const key of keys) {
        const entryValues = [];

        const entry = car[key];

        carValues.push(`${entry.value} ${entry.baseUnit}`);
      }
      columns.push(carValues);
    }
    /* Main keys push to position 8 for calculating the total weight */

    setColumns(columns, "entries");
  }, [keys, comparedCars]);

  return (
    <>
      {columns.map((col, colIndex) => (
        <div key={colIndex} className="relative h-full min-w-[160px]  ">
          {/* ADDS THE CLASS TYPE AS FIRST LINE */}

          {col.map((value, index) => (
            <>
              {index == 0 && (
                <div className="col-span-full row-span-full" key={index}>
                  {colIndex == 0 ? (
                    <>
                      <p className="h-16 pt-5 pl-4 text-2xl font-bold text-blue-extra lg:pl-8 ">
                        Maße
                      </p>
                      <p className="pt-4 pl-4 text-base font-bold bg-grey-lighter h-14 text-blue-extra lg:pl-8">
                        Laderaummaße:
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="h-16 pt-4 pl-4 text-2xl font-bold bg-white text-blue-extra lg:pl-8 "></p>
                      <p className="pt-4 pl-4 text-2xl font-bold bg-grey-lighter h-14 text-blue-extra lg:pl-8 "></p>
                    </>
                  )}
                </div>
              )}
              {index == 4 && (
                <div className="col-span-full row-span-full">
                  {colIndex == 0 ? (
                    <p className="pt-4 pl-4 text-base font-bold h-14 text-blue-extra lg:pl-8">
                      Fahrzeugmaße:
                    </p>
                  ) : (
                    <p className="pt-4 pl-4 text-2xl font-bold h-14 text-blue-extra lg:pl-8 "></p>
                  )}
                </div>
              )}
              <div
                className={`${
                  index == 1 ||
                  index == 3 ||
                  index == 4 ||
                  index == 6 ||
                  index == 8
                    ? "bg-grey-lighter flex items-center h-12"
                    : "bg-white flex items-center h-12 "
                }`}
              >
                <p className="pl-4 text-sm text-blue-extra lg:text-lg lg:pl-8">
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

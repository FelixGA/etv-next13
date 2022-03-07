import React from "react";

export default function ActiveCompareMaßeKeys({ getKeys, comparedCars }) {
  let test = getKeys.slice(11, 12);
  let test2 = getKeys.slice(15, 21);
  let test3 = [...test, ...test2];
  // let test3 = getKeys.slice(21);
  // console.log(test3, "test3");
  // console.log(getKeys, "all");
  // console.log(test, "test");
  // console.log(test2, "test2");
  return (
    <>
      <div
        className={
          comparedCars.length ? "w-full border-r bg-grey-border" : "hidden"
        }
      >
        <div className="w-32 lg:w-56 xl:w-64 2xl:w-72 "></div>
        {test3.map((key, index) => (
          <div
            key={index}
            className={
              index % 2 == 0
                ? "flex items-center h-10 flex-1 bg-white"
                : "flex items-center h-10 flex-1  bg-grey-lighter"
            }
          >
            <h3 className="pl-4 lg:pl-8 text-blue-extra text-sm lg:text-lg ">
              {key}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}

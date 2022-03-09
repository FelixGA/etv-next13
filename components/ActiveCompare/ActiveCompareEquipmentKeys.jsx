import React from "react";

export default function ActiveCompareEquipmentKeys({ getKeys, comparedCars }) {
  let equipmentKeys = getKeys.slice(21);
  // console.log(equipmentKeys);
  return (
    <>
      <div
        className={
          comparedCars.length ? " border-r bg-grey-border sm:w-full" : "hidden"
        }
      >
        {/* <div className="w-32 lg:w-56 xl:w-64 2xl:w-72 "></div> */}
        {equipmentKeys.map((key, index) => (
          <div
            key={index}
            className={
              index % 2 == 0
                ? "flex items-center h-10 flex-1 bg-white pr-1"
                : "flex items-center h-10 flex-1  bg-grey-lighter pr-1"
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

import React from "react";

export default function ActiveCompareEquipmentKeys({ getKeys, comparedCars }) {
  return (
    <>
      <div
        className={
          comparedCars.length ? "w-full border-r-2 shadow-xl " : "hidden"
        }
      >
        {getKeys
          .map((key, index) => (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "flex items-center h-10 flex-1 bg-grey-lighter"
                  : "flex items-center h-10 flex-1 bg-white"
              }
            >
              <h3 className="p-4 text-[#2C3F53] text-sm ">{key}</h3>
            </div>
          ))
          .splice(11)}

        {/* <div className="w-[105%] bg-[#D0DDEA] h-20"></div> */}
      </div>
    </>
  );
}

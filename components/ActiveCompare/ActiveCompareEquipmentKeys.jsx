import React from "react";

export default function ActiveCompareEquipmentKeys({ getKeys, comparedCars }) {
  return (
    <>
      <div className={comparedCars.length ? "w-full " : "hidden"}>
        {getKeys
          .map((item, index) => (
            <div
              key={index}
              className={
                index % 2 == 0
                  ? "flex items-center h-10 flex-1 bg-grey-lighter"
                  : "flex items-center h-10 flex-1 bg-white"
              }
            >
              <h3 className="p-4 text-blue-extra text-lg ">{item}</h3>
            </div>
          ))
          .splice(11)}

        {/* <div className="w-[105%] bg-[#D0DDEA] h-20"></div> */}
      </div>
    </>
  );
}

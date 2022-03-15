import React from "react";

export default function ActiveCompareEquipment({ getKeys, comparedCars }) {
  let equipmentKeys = getKeys.slice(21);
  return (
    <>
      {/* KEYS */}
      <div className="flex flex-col min-w-[160px]">
        <div
          className={
            comparedCars.length
              ? "relative bg-grey-lighter flex flex-col min-w-[160px] "
              : "hidden"
          }
        >
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
      </div>
      {/* VALUES */}
      <div className="flex min-w-[160px]">
        {comparedCars?.map((item, index) => (
          <div className=" " key={index}>
            <div className="data-content-categories relative min-w-[160px]">
              <div className="pl-8 relative lg:w-[255px] xl:w-[340px] top-12 pr-4 border-4"></div>
              <div className=" relative ">
                <div className="h-10 bg-white  flex items-center">
                  <h3 className="second-category-title text-sm lg:text-lg font-medium text-blue-extra pl-4 lg:pl-8">
                    {item.batteryCapacityBlei.value}
                    <span> &nbsp;{item.batteryCapacityBlei.baseUnit}</span>
                  </h3>
                </div>
                <div className="third-category h-10 bg-grey-lighter">
                  <h3 className="third-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex items-center text-blue-extra">
                    {item.batteryCapacityLithium.value}
                    <span> &nbsp;{item.batteryCapacityLithium.baseUnit}</span>
                  </h3>
                </div>

                <div className="forth-category h-10 bg-white">
                  <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8   text-blue-extra flex items-center">
                    {item.batteryGuarantee.value}
                    <span> &nbsp;{item.batteryGuarantee.baseUnit}</span>
                  </h3>
                </div>
                <div className="fifth-category h-10 bg-grey-lighter">
                  <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  text-blue-extra flex items-center">
                    {item.batteryIncluded.value}
                    {/* <span> &nbsp;{item.batteryIncluded.baseUnit}</span> */}
                  </h3>
                </div>
                <div className="sixth-category h-10 bg-white">
                  <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8   text-blue-extra flex items-center">
                    {item.consumption.value}
                    <span> &nbsp;{item.consumption.baseUnit}</span>
                  </h3>
                </div>
                <div className="seventh-category h-10 bg-grey-lighter">
                  <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  text-blue-extra flex items-center">
                    {item.availability.value}
                    <span> &nbsp;{item.availability.baseUnit}</span>
                  </h3>
                </div>
                <div className="eigth-category h-10  bg-white">
                  <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8   text-blue-extra flex items-center">
                    {item.guarantee.value}
                    <span> &nbsp;{item.guarantee.baseUnit}</span>
                  </h3>
                </div>
                <div className="eigth-category h-10  bg-grey-lighter">
                  <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8   text-blue-extra flex items-center">
                    {item.seats.value}
                    {/* <span> &nbsp;{item.seats.baseUnit}</span> */}
                  </h3>
                </div>
                <div className="eigth-category h-10  bg-white">
                  <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8   text-blue-extra flex items-center">
                    {item.subsidies.value}
                    <span> &nbsp;{item.subsidies.baseUnit}</span>
                  </h3>
                </div>
              </div>
            </div>
            {/*  <div
              className={
                comparedCars
                  ? " flex-1 pl-4 xl:pl-8 bg-[#D0DDEA] h-20 flex items-center pr-2"
                  : "hidden"
              }
            >
              <button className="h-8 w-full bg-orange-lighter rounded-[5px] font-bold tex-blue-darker ">
                Weiter
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

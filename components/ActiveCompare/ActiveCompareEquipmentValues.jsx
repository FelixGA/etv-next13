import React from "react";

export default function ActiveCompareEquipmentValues({ comparedCars }) {
  return (
    <>
      {comparedCars?.map((item, index) => (
        <div className="" key={index}>
          <div
            className="data-content-categories relative "
            /* key={index} */
          >
            {/* IMAGE + HEADING */}

            <div className=" relative">
              <div className=" h-10 bg-grey-lighter w-full flex items-center ">
                <h3 className="second-category-title text-sm lg:text-lg font-medium text-blue-extra pl-8">
                  {item.typeClass}
                </h3>
              </div>
              <div className="third-category h-10">
                <h3 className="third-category-title text-sm lg:text-lg h-10 pl-8 w-full flex items-center text-blue-extra">
                  {item.range230V.value}
                  <span> &nbsp;{item.range230V.baseUnit}</span>
                </h3>
              </div>

              <div className="forth-category h-10 bg-grey-lighter">
                <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-8  w-full text-blue-extra flex items-center">
                  {item.rangeLithium.value}

                  <span> &nbsp;{item.rangeLithium.baseUnit}</span>
                </h3>
              </div>
              <div className="fifth-category h-10">
                <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-8 w-full text-blue-extra flex items-center">
                  {item.maxSpeed.value}
                  <span> &nbsp;{item.maxSpeed.baseUnit}</span>
                </h3>
              </div>
              <div className="sixth-category h-10 bg-grey-lighter">
                <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-8  w-full text-blue-extra flex items-center">
                  {item.chargingTime230V.value}
                  <span> &nbsp;{item.chargingTime230V.baseUnit}</span>
                </h3>
              </div>
              <div className="seventh-category h-10">
                <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-8 w-full text-blue-extra flex items-center">
                  {item.chargingTimeLithium.value}
                  <span> &nbsp;{item.chargingTimeLithium.baseUnit}</span>
                </h3>
              </div>
              <div className="eigth-category h-10  bg-grey-lighter">
                <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-8  w-full text-blue-extra flex items-center">
                  {item.chargingTimeFast.value}
                  <span> &nbsp;{item.chargingTimeFast.baseUnit}</span>
                </h3>
              </div>

              <div className="ten-category h-10 bg-white">
                <h3 className="ten-category-title text-sm lg:text-lg h-10 pl-8 w-full text-blue-extra flex items-center ">
                  {item.power.value}
                  <span> &nbsp;{item.power.baseUnit}</span>
                </h3>
              </div>
              <div className="eleven-category h-10 bg-grey-lighter ">
                <h3 className="eleven-category-title text-sm lg:text-lg h-10 pl-8 w-full text-blue-extra flex items-center">
                  payload
                </h3>
              </div>
              <div className="twelwe-category h-10 bg-white ">
                <h3 className="twelwe-category-title text-sm lg:text-lg h-10 pl-8 w-full text-blue-extra flex items-center">
                  {item.curbweight.value}
                  <span> &nbsp;{item.curbweight.baseUnit}</span>
                </h3>
              </div>
              <div className="thirtine-category h-10 bg-grey-lighter">
                <h3 className="thirtine-category-title text-sm lg:text-lg h-10 pl-8 w-full text-blue-extra flex items-center">
                  Gesamtgewicht
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

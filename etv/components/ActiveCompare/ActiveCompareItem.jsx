import React from "react";

function ActiveCompareItem(props) {
  const carsData = props.comparedCars.map((item, index) => (
    <>
      <div
        className="data-content-categories   lg:w-64 xl:w-88 2xl:w-[380px] "
        key={index}
      >
        <div className="placeholder-image-clone flex xl:hidden h-16 bg-yellow-400 w-56 lg:w-full xl:w-88 2xl:w-[380px]"></div>
        <div className="flex items-center w-full h-10 pl-4">
          <h2 className="text-sm font-bold text-[#F45625] xl:hidden">
            Testnote <span className="text-[#0B8E78]">{item.rating.value}</span>
          </h2>
          <div className="hidden xl:flex  w-48 h-12 border border-blue-lighter mb-8 ">
            <div className="text-xs  w-16 h-full bg-orange-dark text-white flex items-center justify-center">
              <span className="font-bold"> TEST</span>
            </div>
            <div className=" flex flex-col justify-center w-full">
              <div className="pt-10 ">
                <span className="text-xxs tracking-widest pl-2.5">
                  ERGEBNIS
                </span>
              </div>
              <div className="flex flex-row pb-8">
                <div className="">
                  <span className="relative bottom-1 pl-2.5 font-black text-m ">
                    {item.rating.value}
                  </span>
                </div>
                <div className="pb-2">
                  <span className="relative bottom-1 text-xs font-black pl-3 tracking-widest ">
                    {item.rating.key}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-category h-10 bg-[#F2F5F8] w-full flex items-center">
          <h3 className="second-category-title text-md font-medium text-[#2C3F53] pl-4">
            Reichweite
          </h3>
        </div>
        <div className="third-category h-10">
          <h3 className="third-category-title h-10 pl-4 w-full flex items-center text-[#2C3F53]">
            {item.weight.value} kg
          </h3>
        </div>
        <div className="forth-category h-10">
          <h3 className="forth-category-title h-10 pl-4 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            {item.chargingTime.value}
          </h3>
        </div>
        <div className="fifth-category h-10">
          <h3 className="fifth-category-title h-10 pl-4 w-full text-[#2C3F53] flex items-center">
            Höchst- geschwindigkeit
          </h3>
        </div>
        <div className="sixth-category h-10">
          <h3 className="sixth-category-title h-10 pl-4 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            Nutzlastpreis
          </h3>
        </div>
        <div className="seventh-category h-10">
          <h3 className="seventh-category-title h-10 pl-4 w-full text-[#2C3F53] flex items-center">
            {item.price},- €
          </h3>
        </div>
        <div className="eigth-category h-10 mt-20">
          <h3 className="eigth-category-title text-2xl pl-4 xl:text-md font-bold text-[#2C3F53]">
            Ausstattung
          </h3>
        </div>
        <div className="ninth-category h-10">
          <h3 className="ninth-category-title h-10 pl-4 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            Elektrische Fensterheber
          </h3>
        </div>
        <div className="ten-category h-10">
          <h3 className="ten-category-title h-10 pl-4 w-full text-[#2C3F53] flex items-center">
            {item.ABS.value}
          </h3>
        </div>
        <div className="eleven-category h-10">
          <h3 className="eleven-category-title h-10 pl-4 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            {item.airBags.value}
          </h3>
        </div>
        <div className="twelwe-category h-10">
          <h3 className="twelwe-category-title h-10 pl-4 w-full text-[#2C3F53] flex items-center">
            {item.airConditioning.value}
          </h3>
        </div>
        <div className="thirtine-category h-10">
          <h3 className="thirtine-category-title h-10 pl-4 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            Goldene Wasserhähne
          </h3>
        </div>
      </div>
    </>
  ));
  return carsData;
}

export default ActiveCompareItem;

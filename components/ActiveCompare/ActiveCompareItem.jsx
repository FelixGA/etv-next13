import Image from "next/image";
import image from "../../public/images/ARI-458-Kipper-L-Heck-300x199.jpg";
import TestResult from "../repeated/TestResult";

export default function ActiveCompareItem({ comparedCars }) {
  console.log(comparedCars, "00000");
  // console.log(comparedCars[0].rating);

  return (
    <>
      {comparedCars?.map((item, index) => (
        <div className="" key={index}>
          <div
            className="data-content-categories relative "
            /* key={index} */
          >
            {/* IMAGE + HEADING */}
            <div className="relative">
              <div className="lg:bg-grey-lighter  absolute -z-10 inset-0"></div>

              <div className="   ml-4 relative ">
                <Image
                  className="rounded-md md:rounded-lg brightness-50 "
                  src={item.src}
                  alt="picture"
                  objectFit="cover"
                  width={400}
                  height={300}
                ></Image>
                <div className="lg:absolute lg:top-0 pl-4 ">
                  <h3 className="text-[#2C3F53] lg:text-white pt-2 font-bold text-sm lg:text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex lg:hidden  h-18 py-auto items-end pb-2">
                <h2 className="text-sm font-bold text-[#F45625] ">
                  Testnote
                  <span className="text-green-light">{item.rating.value}</span>
                </h2>
              </div>
              <div className="hidden lg:flex  pr-0 mt-2">
                <TestResult
                  itemKey={item.rating.key}
                  itemValue={item.rating?.value || "-"}
                />
              </div>
            </div>

            <div className=" relative top-0 lg:top-2">
              <div className=" h-10 bg-grey-lighter w-full flex items-center ">
                <h3 className="second-category-title text-sm lg:text-lg font-medium text-[#2C3F53] pl-8">
                  {item.typeClass}
                </h3>
              </div>
              <div className="third-category h-10">
                <h3 className="third-category-title text-sm lg:text-lg h-10 pl-8 w-full flex items-center text-[#2C3F53]">
                  {item.range230V.value}
                  <span> &nbsp;{item.range230V.baseUnit}</span>
                </h3>
              </div>

              <div className="forth-category h-10 bg-grey-lighter">
                <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-8  w-full text-[#2C3F53] flex items-center">
                  {item.rangeLithium.value}

                  <span> &nbsp;{item.rangeLithium.baseUnit}</span>
                </h3>
              </div>
              <div className="fifth-category h-10">
                <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  {item.maxSpeed.value}
                  <span> &nbsp;{item.maxSpeed.baseUnit}</span>
                </h3>
              </div>
              <div className="sixth-category h-10 bg-grey-lighter">
                <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-8  w-full text-[#2C3F53] flex items-center">
                  {item.chargingTime230V.value}
                  <span> &nbsp;{item.chargingTime230V.baseUnit}</span>
                </h3>
              </div>
              <div className="seventh-category h-10">
                <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  {item.chargingTimeLithium.value}
                  <span> &nbsp;{item.chargingTimeLithium.baseUnit}</span>
                </h3>
              </div>
              <div className="eigth-category h-10  bg-grey-lighter">
                <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-8  w-full text-[#2C3F53] flex items-center">
                  {item.chargingTimeFast.value}
                  <span> &nbsp;{item.chargingTimeFast.baseUnit}</span>
                </h3>
              </div>

              <div className="ten-category h-10 bg-white">
                <h3 className="ten-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center ">
                  {item.power.value}
                  <span> &nbsp;{item.power.baseUnit}</span>
                </h3>
              </div>
              <div className="eleven-category h-10 bg-grey-lighter ">
                <h3 className="eleven-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  payload
                </h3>
              </div>
              <div className="twelwe-category h-10 bg-white ">
                <h3 className="twelwe-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  {item.curbweight.value}
                  <span> &nbsp;{item.curbweight.baseUnit}</span>
                </h3>
              </div>
              <div className="thirtine-category h-10 bg-grey-lighter">
                <h3 className="thirtine-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  Gesamtgewicht
                </h3>
              </div>
            </div>
            <div className=" flex-1 lg:hidden pl-8 bg-[#D0DDEA] h-20 flex items-center">
              <button className="h-8 w-3/4  bg-orange-lighter rounded-[5px] font-bold tex-blue-darker">
                Weiter
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

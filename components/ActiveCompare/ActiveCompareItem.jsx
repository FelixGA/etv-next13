import Image from "next/image";
import Link from "next/link";
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

            <div className="relative h-36 xl:h-72 ">
              <div className="lg:bg-grey-lighter absolute -z-10 inset-0 lg:h-64 xl:h-72"></div>
              <Link href={`/transporter/${item.name}`}>
                <div className="relative md:top-2 lg:top-12 xl:top-10 2xl:top-6 px-1 md:px-2 xl:pl-8 cursor-pointer">
                  <a>
                    <Image
                      className="rounded-md md:rounded-lg brightness-50 "
                      src={item.src}
                      alt="picture"
                      objectFit="cover"
                      width={380}
                      height={250}
                    ></Image>
                  </a>

                  <div className="lg:absolute lg:top-0 md:pl-4 h-10">
                    <h3 className="text-blue-extra lg:text-white md:pt-2 font-black text-sm lg:text-lg line-clamp-3">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative">
              <div className="flex lg:hidden h-11 md:h-[76px] items-end pb-2">
                <h2 className="text-sm font-bold text-[#F45625] pl-4 lg:pl-8">
                  Testnote
                  <span className="text-green-light">{item.rating.value}</span>
                </h2>
              </div>
              <div className="hidden lg:flex pt-6 lg:pt-36 xl:pt-6 pl-8 pb-3 ">
                <TestResult
                  itemKey={item.rating.key}
                  itemValue={item.rating?.value || "-"}
                />
              </div>
              <div className=" h-10 bg-grey-lighter flex-1 flex items-center ">
                <h3 className="second-category-title text-sm lg:text-lg font-medium text-blue-extra pl-4 lg:pl-8">
                  {item.typeClass}
                </h3>
              </div>
              <div className="third-category h-10">
                <h3 className="third-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 flex items-center text-blue-extra">
                  {item.range230V.value}
                  <span> &nbsp;{item.range230V.baseUnit}</span>
                </h3>
              </div>

              <div className="forth-category h-10 bg-grey-lighter">
                <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
                  {item.rangeLithium.value}

                  <span> &nbsp;{item.rangeLithium.baseUnit}</span>
                </h3>
              </div>
              <div className="fifth-category h-10">
                <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
                  {item.maxSpeed.value}
                  <span> &nbsp;{item.maxSpeed.baseUnit}</span>
                </h3>
              </div>
              <div className="sixth-category h-10 bg-grey-lighter">
                <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
                  {item.chargingTime230V.value}
                  <span> &nbsp;{item.chargingTime230V.baseUnit}</span>
                </h3>
              </div>
              <div className="seventh-category h-10">
                <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
                  {item.chargingTimeLithium.value}
                  <span> &nbsp;{item.chargingTimeLithium.baseUnit}</span>
                </h3>
              </div>
              <div className="eigth-category h-10  bg-grey-lighter">
                <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
                  {item.chargingTimeFast.value}
                  <span> &nbsp;{item.chargingTimeFast.baseUnit}</span>
                </h3>
              </div>

              <div className="ten-category h-10 bg-white">
                <h3 className="ten-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center ">
                  {item.power.value}
                  <span> &nbsp;{item.power.baseUnit}</span>
                </h3>
              </div>
              <div className="eleven-category h-10 bg-grey-lighter ">
                <h3 className="eleven-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
                  payload
                </h3>
              </div>
              <div className="twelwe-category h-10 bg-white ">
                <h3 className="twelwe-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
                  {item.curbweight.value}
                  <span> &nbsp;{item.curbweight.baseUnit}</span>
                </h3>
              </div>
              <div className="thirtine-category h-10 bg-grey-lighter">
                <h3 className="thirtine-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
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

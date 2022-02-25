import Image from "next/image";
import image from "../../public/images/ARI-458-Kipper-L-Heck-300x199.jpg";
import TestResult from "../repeated/TestResult";

export default function ActiveCompareItem({ comparedCars }) {
  console.log(comparedCars, "00000");

  return (
    <>
      {comparedCars?.map((item, index) => (
        <div className="w-full" key={index}>
          <div
            className="data-content-categories relative "
            /* key={index} */
          >
            {/* IMAGE + HEADING */}
            <div className="bg-grey-lighter lg:h-72 absolute w-full top-0"></div>
            <div className="w-44 h-44 lg:w-80 lg:h-72 xl:w-[70%] ml-4 relative lg:top-10 xl:top-12">
              <Image
                className="rounded-md md:rounded-lg brightness-50 "
                src={item.src}
                alt="picture"
                objectFit="cover"
                width={100.35}
                height={66.9}
                layout="responsive"
              ></Image>
              <div className="lg:absolute lg:top-0 pl-4 ">
                <h3 className="text-[#2C3F53] lg:text-white pt-2 font-bold text-sm lg:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="flex lg:hidden  h-18 pl-8 py-auto items-end pb-2">
              <h2 className="text-sm font-bold text-[#F45625] ">
                Testnote
                <span className="text-green-light">1.5</span>
              </h2>
            </div>
            <div className="hidden lg:flex  pr-20 mt-2">
              <TestResult />
            </div>

            <div className=" relative top-0 lg:top-2">
              <div className=" h-10 bg-grey-lighter w-full flex items-center ">
                <h3 className="second-category-title text-sm lg:text-lg font-medium text-[#2C3F53] pl-8">
                  {item.typeClass}
                </h3>
              </div>
              <div className="third-category h-10">
                <h3 className="third-category-title text-sm lg:text-lg h-10 pl-8 w-full flex items-center text-[#2C3F53]">
                  135 kg
                </h3>
              </div>

              <div className="forth-category h-10">
                <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-8 bg-grey-lighter w-full text-[#2C3F53] flex items-center">
                  1561 d
                </h3>
              </div>
              <div className="fifth-category h-10">
                <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  155 km/h
                </h3>
              </div>
              <div className="sixth-category h-10">
                <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-8 bg-grey-lighter w-full text-[#2C3F53] flex items-center">
                  Nutzlastpreis
                </h3>
              </div>
              <div className="seventh-category h-10">
                <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  25000,- €
                </h3>
              </div>
              <div className="eigth-category h-10  bg-grey-lighter lg:bg-white">
                <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-8 bg-grey-lighter w-full text-[#2C3F53] flex items-center">
                  test
                </h3>
              </div>

              <div className="ten-category h-10 bg-grey-lighter lg:bg-white">
                <h3 className="ten-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center ">
                  grdge
                </h3>
              </div>
              <div className="eleven-category h-10">
                <h3 className="eleven-category-title text-sm lg:text-lg h-10 pl-8 bg-white lg:bg-grey-lighter w-full text-[#2C3F53] flex items-center">
                  fsdsd
                </h3>
              </div>
              <div className="twelwe-category h-10 bg-grey-lighter lg:bg-white">
                <h3 className="twelwe-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
                  ---
                </h3>
              </div>
              <div className="thirtine-category h-10">
                <h3 className="thirtine-category-title text-sm lg:text-lg h-10 pl-8 bg-white lg:bg-grey-lighter w-full text-[#2C3F53] flex items-center">
                  xdasdas
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

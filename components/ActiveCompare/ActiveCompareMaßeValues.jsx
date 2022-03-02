import Image from "next/image";

export default function ActiveCompareMaßeValues({ comparedCars }) {
  return (
    <>
      {comparedCars?.map((item, index) => (
        <div className="" key={index}>
          <div className="data-content-categories relative ">
            <div className="pl-8 relative lg:w-[255px] xl:w-[340px] top-12 pr-4"></div>
            <div className=" relative">
              <div className=" h-10 bg-white flex-1 flex items-center ">
                <h3 className="second-category-title text-sm lg:text-lg font-medium text-blue-extra pl-4 lg:pl-8">
                  {item.loadingHeight.value}
                  <span> &nbsp;{item.loadingHeight.baseUnit}</span>
                </h3>
              </div>
              <div className="third-category h-10 bg-grey-lighter">
                <h3 className="third-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 flex items-center text-blue-extra">
                  {/* {item.loadingVolume.key}
                  <span> &nbsp;{item.loadingVolume.baseUnit}</span> */}
                  test
                </h3>
              </div>

              <div className="forth-category h-10 bg-white">
                <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
                  {item.loadingVolume.valueheight}
                  <span> &nbsp;{item.loadingVolume.baseUnit}</span>
                </h3>
              </div>
              <div className="fifth-category h-10 bg-grey-lighter">
                <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
                  {item.loadingVolume.valuewidth}
                  <span> &nbsp;{item.loadingVolume.baseUnit}</span>
                </h3>
              </div>
              <div className="sixth-category h-10 bg-white">
                <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
                  {item.loadingVolume.valuelength}
                  <span> &nbsp;{item.loadingVolume.baseUnit}</span>
                </h3>
              </div>
              <div className="seventh-category h-10 bg-grey-lighter">
                <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8 flex-1 text-blue-extra flex items-center">
                  Ladefläche
                </h3>
              </div>
              <div className="eigth-category h-10  bg-white">
                <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-4 lg:pl-8  flex-1 text-blue-extra flex items-center">
                  Ladevolumen
                </h3>
              </div>
            </div>
          </div>
          <div
            className={
              comparedCars
                ? " flex-1 lg:hidden pl-4 xl:pl-8 bg-[#D0DDEA] h-20 flex items-center"
                : "hidden"
            }
          >
            <button className="h-8 w-full  bg-orange-lighter rounded-[5px] font-bold tex-blue-darker">
              Weiter
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

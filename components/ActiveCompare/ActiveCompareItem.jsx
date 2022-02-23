import Image from "next/image";
import image from "../../public/images/ARI-458-Kipper-L-Heck-300x199.jpg";

export default function ActiveCompareItem(props) {
  return (
    <div>
      {/* {props.comparedCars.map((item, index) => ( */}
      <div
        className="data-content-categories w-full  lg:w-64 xl:w-88 2xl:w-[380px] "
        /* key={index} */
      >
        <div className="w-48 h-36 lg:hidden pl-8">
          <Image
            className="rounded-md md:rounded-lg brightness-50 "
            src={image}
            alt="picture"
            objectFit="cover"
            width={100.35}
            height={66.9}
            layout="responsive"
          ></Image>
          <div className="">
            <h3 className="text-[#2C3F53] pt-2 font-bold text-sm">
              ARI-458-Kipper-L-Heck
            </h3>
          </div>
        </div>

        <div className="flex items-center w-full h-10 pl-8">
          <h2 className="text-sm font-bold text-[#F45625] lg:hidden">
            Testnote
            <span className="text-green-light">1.5</span>
          </h2>
          <div className="hidden lg:flex  w-48 h-12 border border-blue-lighter mb-8 ">
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
                    1.6
                  </span>
                </div>
                <div className="pb-2">
                  <span className="relative bottom-1 text-xs font-black pl-3 tracking-widest ">
                    gut
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-category h-10 bg-[#F2F5F8] w-full flex items-center">
          <h3 className="second-category-title text-sm lg:text-lg font-medium text-[#2C3F53] pl-8">
            222 km
          </h3>
        </div>
        <div className="third-category h-10">
          <h3 className="third-category-title text-sm lg:text-lg h-10 pl-8 w-full flex items-center text-[#2C3F53]">
            135 kg
          </h3>
        </div>

        <div className="forth-category h-10">
          <h3 className="forth-category-title text-sm lg:text-lg h-10 pl-8 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            1561 d
          </h3>
        </div>
        <div className="fifth-category h-10">
          <h3 className="fifth-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
            155 km/h
          </h3>
        </div>
        <div className="sixth-category h-10">
          <h3 className="sixth-category-title text-sm lg:text-lg h-10 pl-8 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            Nutzlastpreis
          </h3>
        </div>
        <div className="seventh-category h-10">
          <h3 className="seventh-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
            25000,- €
          </h3>
        </div>
        <div className="eigth-category h-10 lg:mt-20 bg-[#F2F5F8] lg:bg-white">
          <h3 className="eigth-category-title text-sm lg:text-lg h-10 pl-8 bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            test
          </h3>
        </div>
        <div className="ninth-category h-10">
          <h3 className="ninth-category-title text-sm lg:text-lg h-10 pl-8 bg-white lg:bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            fgfrsg
          </h3>
        </div>
        <div className="ten-category h-10 bg-[#F2F5F8] lg:bg-white">
          <h3 className="ten-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center ">
            grdge
          </h3>
        </div>
        <div className="eleven-category h-10">
          <h3 className="eleven-category-title text-sm lg:text-lg h-10 pl-8 bg-white lg:bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            fsdsd
          </h3>
        </div>
        <div className="twelwe-category h-10 bg-[#F2F5F8] lg:bg-white">
          <h3 className="twelwe-category-title text-sm lg:text-lg h-10 pl-8 w-full text-[#2C3F53] flex items-center">
            ---
          </h3>
        </div>
        <div className="thirtine-category h-10">
          <h3 className="thirtine-category-title text-sm lg:text-lg h-10 pl-8 bg-white lg:bg-[#F2F5F8] w-full text-[#2C3F53] flex items-center">
            xdasdas
          </h3>
        </div>
        <div className=" w-full lg:hidden pl-8 bg-[#D0DDEA] h-20 flex items-center">
          <button className="h-8 w-3/4  bg-orange-lighter rounded-[5px] font-bold tex-blue-darker">
            Weiter
          </button>
        </div>
      </div>
    </div>
  );
}

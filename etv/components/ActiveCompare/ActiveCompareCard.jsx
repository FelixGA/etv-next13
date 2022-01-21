import Image from "next/image";

function ActiveCompareCard(props) {
  const myLoader = ({ src }) => {
    return src;
  };

  /*  const test = props.comparedCars; */

  const test = props?.comparedCars?.map((caritem, index) => (
    <div className="container  flex flex-col " key={index}>
      {/* <div className="invisible xl:visible xl:flex xl:bg-red-700 xl:w-full xl:h-72 xl:items-center"></div> */}
      <div className="w-28 sm:w-36 md:w-48 lg:w-56 xl:w-80 pl-5 xl:pr-3">
        <Image
          className="rounded-md md:rounded-lg brightness-50 "
          loader={myLoader}
          src={`http://localhost:1337${caritem.photo.data[0].attributes.url}`}
          alt="picture"
          objectFit="cover"
          width={100.35}
          height={66.9}
          layout="responsive"
        />
      </div>

      <div className="pl-5 pb-[3px]">
        <h3 className="font-bold text-xs text-[#2C3F53] h-9 pt-2">
          {caritem?.title}
        </h3>
      </div>
      <div className="flex flex-col pt-1 w-full ">
        {/* FIRST SECTION */}
        <div className="flex items-center w-full h-10 pl-5 xl:mt-10">
          <h2 className="text-sm font-bold xl:hidden">Testnote 1,2</h2>
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
                    1.5
                  </span>
                </div>
                <div className="pb-2">
                  <span className="relative bottom-1 text-xxs font-black pl-3 tracking-widest ">
                    GUT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center pl-5 h-10  bg-[#F2F5F8]">
          <h3 className="text-sm font-medium text-[#2C3F53] ">150km</h3>
        </div>
        <div className="flex items-center pl-5 h-10  ">
          <h3 className="text-sm font-medium ">754kg</h3>
        </div>
        <div className="flex items-center pl-5 h-10  bg-[#F2F5F8]">
          <h3 className="text-sm font-medium ">6h (Schuko), 2h (Typ 2)</h3>
        </div>
        <div className="flex items-center pl-5 h-10  ">
          <h3 className="text-sm font-medium ">Warp 4</h3>
        </div>
        <div className="flex items-center pl-5 h-10  bg-[#F2F5F8]">
          <h3 className="text-sm font-medium ">12€/kg</h3>
        </div>
        <div className="flex items-center pl-5 h-10  ">
          <h3 className="text-sm font-medium ">9647,- €</h3>
        </div>
        {/* SECOND SECTION */}
        <div className="md:pt-16">
          <div className="flex items-center pl-5 h-10 bg-[#F2F5F8] lg:bg-white ">
            <h2 className="text-sm font-bold"></h2>
          </div>
          <div className="flex items-center pl-5 h-10 bg-white lg:bg-[#F2F5F8] ">
            <h3 className="text-sm font-medium ">ja</h3>
          </div>
          <div className="flex items-center pl-5 h-10  bg-[#F2F5F8] lg:bg-white">
            <h3 className="text-sm font-medium ">ja</h3>
          </div>
          <div className="flex items-center pl-5 h-10 bg-white lg:bg-[#F2F5F8] ">
            <h3 className="text-sm font-medium ">2x Fahrer, Beifahrer</h3>
          </div>
          <div className="flex items-center pl-5 h-10  bg-[#F2F5F8] lg:bg-white">
            <h3 className="text-sm font-medium ">Serienmäßig</h3>
          </div>

          <div className="flex items-center pl-5 h-10 bg-white lg:bg-[#F2F5F8] ">
            <h3 className="text-sm font-medium ">ja</h3>
          </div>
        </div>
      </div>
      <div className="bg-[#D0DDEA] w-full h-24 flex items-center xl:mt-20 pl-4">
        <div className="bg-[#FFAB00] w-[50%] sm:w-[75%] md:w-[90%] h-8 flex  justify-center">
          <button className="">Weiter</button>
        </div>
      </div>
    </div>
  ));

  return <>{test}</>;
}

export default ActiveCompareCard;

import Image from "next/image";
import testImage from "../../public/images/ari_458_pritsche_frontansicht_6e125d42d4.jpg";

function ActiveCompareCard() {
  const myLoader = ({ src }) => {
    return src;
  };
  return (
    <div className="container mr-2  flex flex-col ">
      {/* <div className="invisible xl:visible xl:flex xl:bg-red-700 xl:w-full xl:h-72 xl:items-center"></div> */}
      <div className="w-36 lg:w-56 xl:w-80 pl-2 ">
        <Image
          className=" md:rounded-md brightness-50"
          loader={myLoader}
          src={testImage}
          alt="picture"
          objectFit="cover"
          width={100.35}
          height={66.9}
          layout="responsive"
        />
      </div>

      <div className="pl-2">
        <h3 className="font-bold text-xs text-[#2C3F53] pt-[7px] pb-4">
          Renault Kangoo Z.E.
        </h3>
      </div>
      <div className="flex flex-col pt-1 w-full ">
        {/* FIRST SECTION */}
        <div className="flex items-center w-full h-10 pl-2 ">
          <h2 className="text-sm font-bold">Testnote 1,2</h2>
        </div>
        <div className="flex items-center pl-2 h-10  bg-[#F2F5F8]">
          <h3 className="text-xs font-medium ">150km</h3>
        </div>
        <div className="flex items-center pl-2 h-10  ">
          <h3 className="text-xs font-medium ">754kg</h3>
        </div>
        <div className="flex items-center pl-2 h-10  bg-[#F2F5F8]">
          <h3 className="text-xs font-medium ">6h (Schuko), 2h (Typ 2)</h3>
        </div>
        <div className="flex items-center pl-2 h-10  ">
          <h3 className="text-xs font-medium ">Warp 4</h3>
        </div>
        <div className="flex items-center pl-2 h-10  bg-[#F2F5F8]">
          <h3 className="text-xs font-medium ">12€/kg</h3>
        </div>
        <div className="flex items-center pl-2 h-10  ">
          <h3 className="text-xs font-medium ">9647,- €</h3>
        </div>
        {/* SECOND SECTION */}
        <div className="md:pt-16">
          <div className="flex items-center pl-2 h-10  ">
            <h2 className="text-sm font-bold"></h2>
          </div>
          <div className="flex items-center pl-2 h-10 bg-[#F2F5F8] ">
            <h3 className="text-xs font-medium ">ja</h3>
          </div>
          <div className="flex items-center pl-2 h-10  ">
            <h3 className="text-xs font-medium ">ja</h3>
          </div>
          <div className="flex items-center pl-2 h-10 bg-[#F2F5F8] ">
            <h3 className="text-xs font-medium ">2x Fahrer, Beifahrer</h3>
          </div>
          <div className="flex items-center pl-2 h-10  ">
            <h3 className="text-xs font-medium ">Serienmäßig</h3>
          </div>

          <div className="flex items-center pl-2 h-10 bg-[#F2F5F8] ">
            <h3 className="text-xs font-medium ">ja</h3>
          </div>
        </div>
      </div>
      <div className="bg-[#F2F5F8] w-full h-24 flex items-center mt-20">
        <div className="bg-[#FFAB00] w-[50%] sm:w-[75%] md:w-[90%] h-8 flex  justify-center">
          <button className="">Weiter</button>
        </div>
      </div>
    </div>
  );
}

export default ActiveCompareCard;

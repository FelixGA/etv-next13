import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import filterImage from "../../public/images/filter-icon.png";
import TruncateFilter from "./TruncateFilter";
function FilterBlock() {
  return (
    <div className="bg-grey-extra shadow-dropdown">
      <div className="h-10 shadow-dropdown flex flex-row justify-between align-middle">
        <div className="w-full  flex flex-row ">
          <div className="w-3.5 my-auto ml-8">
            <Image
              src={filterImage}
              alt="filter icon"
              objectFit="cover"
              width={8}
              height={8}
              layout="responsive"
            />
          </div>{" "}
          <span className="ml-2 font-bold  my-auto text-sm text-blue-darker">
            Alle Filter anzeigen
          </span>
        </div>
        <span>{"   "}</span>
        <span className="font-bold	mr-6 my-auto text-sm text-blue-darker">
          ˅
        </span>
      </div>
      <TruncateFilter />
      <div className="flex flex-row justify-center w-full mt-4">
        <div className="flex flex-col ml-2">
          <div className="w-44 h-9 bg-grey-lighter mt-2 flex flex-row justify-between">
            <div className="w-full  flex flex-row">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image4}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">3000-9000 €</span>
            </div>

            <div className="mr-3 my-auto">
              <span className="text-3xl  ">×</span>
            </div>
          </div>
          <div className="w-44 h-9 bg-grey-lighter mt-2 flex flex-row justify-between">
            <div className="w-full  flex flex-row">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image3}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">bis 80km/h</span>
            </div>

            <div className="mr-3 my-auto">
              <span className="text-3xl  ">×</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <div className="w-44 h-9 bg-grey-lighter mt-2 flex flex-row justify-between">
            <div className="w-full  flex flex-row">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">Bis 100 km</span>
            </div>

            <div className="mr-3 my-auto">
              <span className="text-3xl  ">×</span>
            </div>
          </div>
          <div className="w-44 h-9 bg-grey-lighter mt-2 flex flex-row justify-between">
            <div className="w-full  flex flex-row">
              <div className="w-6 my-auto ml-2">
                <Image
                  src={image2}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <span className="text-sm my-auto pl-2">bis 100 kg</span>
            </div>

            <div className="mr-3 my-auto">
              <span className="text-3xl  ">×</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-2">
        <h1 className="text-xl text-black-dark pl-8">
          Die besten E-Transporter nach Ihrer Auswahl
        </h1>
      </div>
    </div>
  );
}

export default FilterBlock;

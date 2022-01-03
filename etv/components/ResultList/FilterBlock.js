import Image from "next/image";
import { useState } from "react";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import filterImage from "../../public/images/filter-icon.png";
import arrowDown from "../../public/images/Chevron_down.png";
import X from "../../public/images/X.png";
import TruncateFilterMobile from "./TruncateFilterMobile";
import TruncateFilterDesktop from "./TruncateFilterDesktop";
function FilterBlock() {
  const [truncate, setTruncate] = useState(false);
  return (
    <div>
      <div className=" bg-grey-extra shadow-dropdown md:hidden">
        <div className="h-10 shadow-dropdown flex flex-row justify-between align-middle">
          <div
            className="w-full  flex flex-row "
            onClick={() => setTruncate(!truncate)}
          >
            <div
              className="w-3.5 my-auto ml-6 
          "
            >
              <Image
                src={filterImage}
                alt="filter icon"
                objectFit="cover"
                width={8}
                height={8}
                layout="responsive"
              />
            </div>
            <span className="ml-2 font-black  my-auto text-sm text-blue-darker">
              Alle Filter anzeigen
            </span>
          </div>
          <span>{"   "}</span>
          <div
            className="w-4 mr-4 my-auto"
            onClick={() => setTruncate(!truncate)}
          >
            <Image
              src={arrowDown}
              alt="filter icon"
              objectFit="cover"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
        </div>
        <div className="">
          <div
            className={
              truncate ? "font-bold	 my-auto text-sm text-blue-darker" : "hidden"
            }
          >
            <div>
              <TruncateFilterMobile />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center w-full mt-4 lg:w-3/4 lg:ml-auto   lg:justify-start">
        <div className="flex flex-col ml-2  md:flex-row  ">
          <div className="w-44 h-9 bg-grey-lighter mt-2  flex flex-row justify-between ">
            <div className="  flex flex-row">
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

            <div className="w-3.5 my-auto mr-3 ">
              <Image
                src={X}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />{" "}
            </div>
          </div>
          <div className="w-44 h-9 bg-grey-lighter mt-2 flex flex-row justify-between xl:ml-1 ">
            <div className="  flex flex-row">
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
            <div className="w-3.5 my-auto mr-3 ">
              <Image
                src={X}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-2  md:flex-row">
          <div className="w-44 h-9 bg-grey-lighter mt-2  flex flex-row justify-between xl:mr-1">
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

            <div className="w-3.5 my-auto mr-3 ">
              <Image
                src={X}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />{" "}
            </div>
          </div>
          <div className="w-44 h-9 bg-grey-lighter mt-2 flex flex-row justify-between xl:ml-1">
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

            <div className="w-3.5 my-auto mr-3 ">
              <Image
                src={X}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />{" "}
            </div>
          </div>
        </div>
        <div className="hidden xl:w-48 h-auto xl:flex xl:items-end">
          <span className="text-sm pl-4">alle Filter loschen</span>
        </div>
      </div>
      <div className="mt-8 pb-2 w-full lg:w-3/4  lg:ml-auto">
        <h1 className="text-xl text-black-dark pl-8">
          Die besten E-Transporter nach Ihrer Auswahl
        </h1>
      </div>
    </div>
  );
}

export default FilterBlock;

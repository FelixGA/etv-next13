import arrowDown from "../../public/images/Chevron_down.png";
import Image from "next/image";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
import { useState } from "react";
function TruncateFilter() {
  const [truncPrice, setTruncPrice] = useState(false);
  const [truncDistance, setTruncDistance] = useState(false);
  const [truncLoad, setTruncLoad] = useState(false);
  const [truncSpeed, setTruncSpeed] = useState(false);
  const [truncMoreFilters, setTruncMoreFilters] = useState(false);

  return (
    <div className="bg-[#Fff]">
      <div className="flex flex-col mt-2 ">
        {/* Preis */}
        <div
          className="my-1 cursor-pointer "
          onClick={() => setTruncPrice(!truncPrice)}
        >
          <div className="flex flex-row justify-between border-b ">
            <div className="flex flex-row ">
              <div className="w-6 my-auto ml-4  ">
                <Image
                  src={image4}
                  alt="picture"
                  objectFit="cover"
                  width={24}
                  height={28}
                  layout="responsive"
                />
              </div>
              <div className="pl-4 my-auto mt-2">
                <h4 className="py-3 font-bold text-blue-dark text-base">
                  Preis
                </h4>
              </div>
            </div>
            <div className="w-3 mr-4 mt-7">
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
        </div>
      </div>
      <div className={truncPrice ? " flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
            defaultChecked
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5 text-lg"
          >
            3000-9000 €
          </label>
        </div>
        {/* min max buttons */}
        <div className="wrapper py-4 flex flex-row justify-start">
          <div className="flex py-2 mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="min €"
              className="pl-4 w-18"
            />
          </div>
          <div className="flex py-2  mx-2 w-20 h-9 bg-transparent border rounded-lg border-blue-dark">
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="max €"
              className="pl-4 w-18"
            />
          </div>
        </div>
      </div>

      {/* Reichweite */}

      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncDistance(!truncDistance)}
      >
        <div className="flex flex-row justify-between border-b ">
          <div className="flex flex-row">
            <div className="w-6  ml-4 mt-4">
              <Image
                src={image3}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto mt-2">
              <h4 className="py-3 font-bold text-blue-dark text-base">
                Reichweite
              </h4>
            </div>
          </div>
          <div className="w-3 mr-4 mt-7">
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
      </div>
      <div className={truncDistance ? "flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
      </div>

      {/* Zuladung */}

      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncLoad(!truncLoad)}
      >
        <div className="flex flex-row justify-between border-b">
          <div className="flex flex-row">
            <div className="w-6  ml-4 mt-4">
              <Image
                src={image}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto mt-2">
              <h4 className="py-3 font-bold text-blue-dark text-base">
                Zuladung
              </h4>
            </div>
          </div>
          <div className="w-3 mr-4 mt-7">
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
      </div>
      <div className={truncLoad ? "flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
      </div>

      {/* Höchstgeschwindigkeit */}

      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncSpeed(!truncSpeed)}
      >
        <div className="flex flex-row justify-between  border-b">
          <div className="flex flex-row">
            <div className="w-6  ml-4 mt-4">
              <Image
                src={image2}
                alt="picture"
                objectFit="cover"
                width={24}
                height={28}
                layout="responsive"
              />
            </div>
            <div className="pl-4 my-auto mt-2">
              <h4 className="py-3 font-bold mr-6 text-blue-dark text-base">
                Höchstgeschwindigkeit
              </h4>
            </div>
          </div>
          <div className="w-3 mr-4 mt-7">
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
      </div>

      <div className={truncSpeed ? "flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
      </div>

      {/* Weitere Filter */}

      <div
        className="my-1 cursor-pointer"
        onClick={() => setTruncMoreFilters(!truncMoreFilters)}
      >
        <div className="flex flex-row justify-between  border-b">
          <div className="pl-14 my-auto mt-2">
            <h4 className="py-3 font-bold text-blue-dark text-base">
              Weitere Filter
            </h4>
          </div>
          <div className="w-3 mr-4 mt-7">
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
      </div>
      <div className={truncMoreFilters ? "flex flex-col ml-4 mt-2" : "hidden"}>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
        <div className="mt-1 flex flex-row py-2 ">
          <input
            className=" appearance-none   w-6 h-6 tex t-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
            type="checkbox"
            id="preis"
            name="preis"
          ></input>
          <label
            forhtml="preis"
            className="inline-flex items-center cursor-pointer pl-5"
          >
            3000-9000 €
          </label>
        </div>
      </div>

      {/*  */}
    </div>
  );
}

export default TruncateFilter;

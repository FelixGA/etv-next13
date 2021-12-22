import React from "react";
import heroSectionStyles from "../HeroSection/HeroSection.module.css";
import logos from "./logos.json";
import Image from "next/image";

const HeroSection = () => {
  const details = [
    {
      category: "Price",
      options: [
        {
          name: "3000-9000 ",
          value: "3000-9000 ",
        },
        {
          name: "9000-15000",
          value: "9000-15000",
        },
        {
          name: "15000-20000",
          value: "15000-20000",
        },
        {
          name: "20000-25000",
          value: "20000-25000",
        },
        {
          name: "25000-30000",
          value: "25000-30000",
        },
        {
          name: "30000-35000",
          value: "30000-35000",
        },
      ],
    },

    {
      category: "Reichweite",
      options: [
        {
          name: "ab 150km ",
          value: "ab 150km ",
        },
        {
          name: "ab 200km",
          value: "ab 200km",
        },
        {
          name: "ab 250km",
          value: "ab 250km",
        },
      ],
    },
    {
      category: "Nutzlast",
      options: [
        {
          name: "ab:500kg",
          value: "ab:500kg ",
        },
        {
          name: "ab:1000kg",
          value: "ab:1000kg",
        },
        {
          name: "ab:1500kg",
          value: "ab:1500kg",
        },
      ],
    },
  ];

  return (
    <div className="hero-section-container m-4 laptop:w-3/4 ">
      <div className="main-heading-container flex flex-row justify-between ">
        <div>
          <Image
            className="m-[1px]"
            src="/images/medal.png"
            width={166}
            height={166}
          />
        </div>
        <div className="main-heading-text ">
          <h1 className="text-2xl pl-3 ">Elektrotransporter-Vergleich</h1>
          <p className="text-grey-darker text-base pl-3">
            Hier finden Sie den{" "}
            <b className="text-grey-darkest font-bold">
              passenden Elektrotransporter,
            </b>
            genau für Ihre Ansprüche
          </p>
        </div>
      </div>
      <div className="laptop:flex laptop:justify-between laptop: items-center bg-yellow-light h-24">
        <h2 className="text-blue-dark font-bold m-4 laptop:hidden ">
          Jetzt vergleichen
        </h2>

        <div className="comaprison-input-container m-4  items-center laptop:flex laptop:flex-row laptop:justify-between flex-1 ">
          <div className="h-14 mx-2 pt-2 gmsou text-base bg-white	galaxyfold:w-[70vw] tablet:w-[80vw] laptop:w-[18vw] ">
            <label
              className="px-2 flex flex-row justify-between px-2 text-left"
              for="standard-select"
            >
              Reichweite <div className=" relative top-6">▼</div>
            </label>
            <div className=" m-1">
              <select
                className=" p-4 relative bottom-6
               text-base font-bold text-blue-dark appearance-none bg-transparent border-none pl-1 m-0 "
                id="standard-select"
              >
                {details[1].options.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="h-14 mx-2 my-4 pt-2 gmsou text-base bg-white galaxyfold:w-[70vw] tablet:w-[80vw] laptop:w-[18vw]	">
            <label
              className="px-2 flex flex-row justify-between px-2 text-left"
              for="standard-select"
            >
              Preis <div className=" relative top-6">▼</div>
            </label>
            <div className=" m-1">
              <select
                className=" p-4 relative bottom-6
               text-base font-bold text-blue-dark appearance-none bg-transparent border-none pl-1 m-0 "
                id="standard-select"
              >
                {details[0].options.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <span className="flex galaxyfold:flex-col tablet:flex-row  justify-around flex-wrap">
            <div className=" h-14 my-4 pt-2 gmsou ml-1 mb-6 galaxyfold:w-[70vw] tablet:w-[40vw] laptop:w-[18vw] text-base bg-white">
              <label
                className="px-2 flex flex-row justify-between px-2 text-left"
                for="standard-select"
              >
                Nutzlast <div className=" relative right-0 top-6">▼</div>
              </label>
              <div className=" mt-1 px-1">
                <select
                  className=" p-4 relative bottom-6 text-base font-bold appearance-none bg-transparent border-none pl-1 m-0  text-blue-dark"
                  id="standard-select"
                >
                  {details[2].options.map((option) => (
                    <option value={option.value}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="bg-blue-dark hover:bg-blue-light text-white font-bold  px-2 mb-5 my-3 text-sm rounded-lg">
              Jetzt vergleichen
            </button>
          </span>
        </div>
      </div>
      <div className="icons-container flex flex-row justify-around flex-wrap">
        {logos.map((logo, index) => (
          <i className="m-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              key={index}
              width={48}
              height={48}
            />
          </i>
        ))}
      </div>
    </div>
  );
};
export default HeroSection;

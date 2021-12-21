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
          name: "3000-9000 ▼",
          value: "3000-9000 ▼",
        },
        {
          name: "9000-15000",
          value: "9000-15000",
        },
        {
          name: "15000-20000",
          value: "15000-20000",
        },
      ],
    },

    {
      category: "Reichweite",
      options: [
        {
          name: "ab 150km ▼",
          value: "ab 150km ▼",
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
          name: "ab:500kg ▼",
          value: "ab:500kg ▼",
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
    <div className="hero-section-container m-4">
      <div className="main-heading-container flex flex-row justify-between">
        <div>
          <img className="m-[1px]" src="/images/medal.png" />
        </div>
        <div className="main-heading-text ">
          <h1 className="text-2xl ">Elektrotransporter-Vergleich</h1>
          <p className="text-grey-darker text-base">
            Hier finden Sie den{" "}
            <b className="text-grey-darkest font-bold">
              passenden Elektrotransporter,
            </b>
            genau für Ihre Ansprüche
          </p>
        </div>
      </div>
      <div className="comparison-container bg-yellow-light">
        <h2 className="text-blue-dark font-bold m-4">Jetzt vergleichen</h2>

        <div className="comaprison-input-container m-4 ">
          <div className=" m-1 text-sm bg-white">
            <label className="px-2 text-left" for="standard-select">
              Reichweite
            </label>
            <div className=" m-3">
              <select
                className="text-sm text-blue-dark appearance-none bg-white border-none pr-1 m-0 w-full"
                id="standard-select"
              >
                {details[1].options.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className=" m-1 text-sm bg-white">
            <label className="px-2 text-left" for="standard-select">
              Preis
            </label>
            <div className=" m-3">
              <select
                className="text-sm appearance-none bg-white border-none pr-1 m-0 w-full text-blue-dark"
                id="standard-select"
              >
                {details[0].options.map((option) => (
                  <option value={option.value}>{option.name}</option>
                ))}
              </select>
            </div>
          </div>
          <span className="flex flex-row justify-between flex-wrap">
            <div className="weight ml-1 mb-6 w-[25vw] text-sm bg-white">
              <label className="px-2" for="standard-select">
                Nutzlast
              </label>
              <div className=" mt-3 px-1">
                <select
                  className="text-sm appearance-none bg-white border-none pr-1 m-0 w-full text-blue-dark"
                  id="standard-select"
                >
                  {details[2].options.map((option) => (
                    <option value={option.value}>{option.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-3 px-3 mb-5 my-3 text-sm rounded-lg">
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

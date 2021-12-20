import React from "react";
import styles from "../HeroSection/HeroSection.module.css";

const HeroSection = () => {
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
            <div className="m-3" class="select">
              <select className="text-sm" id="standard-select">
                <option value="Option 1">3000-9000 ▼</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option length">
                  Option that has too long of a value to fit
                </option>
              </select>
            </div>
          </div>
          <div className=" m-1 text-sm bg-white">
            <label className="px-2 text-left" for="standard-select">
              Preis
            </label>
            <div className="m-3" class="select">
              <select className="text-sm" id="standard-select">
                <option value="Option 1">3000-9000 ▼</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
                <option value="Option 4">Option 4</option>
                <option value="Option 5">Option 5</option>
                <option value="Option length">
                  Option that has too long of a value to fit
                </option>
              </select>
            </div>
          </div>
          <span className="flex flex-row justify-between flex-wrap">
            <div className="weight ml-1 mb-6 w-[25vw] text-sm bg-white">
              <label className="px-2" for="standard-select">
                Nutzlast
              </label>
              <div className="mt-3 px-2" class="select">
                <select className="text-sm" id="standard-select">
                  <option value="Option 1">ab:500kg ▼ </option>

                  <option value="Option 2">Option 2 </option>
                  <option value="Option 3">Option 3</option>
                  <option value="Option 4">Option 4</option>
                  <option value="Option 5">Option 5</option>
                  <option value="Option length">
                    Option that has too long of a value to fit
                  </option>
                </select>
              </div>
            </div>
            <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-3 px-3 mb-5 my-3 text-sm rounded-lg">
              Jetzt vergleichen
            </button>
          </span>
        </div>
      </div>
      <div className="icons-container">
        <i>1</i>
        <i>2</i>
        <i>3</i>
        <i>4</i>
        <i>5</i>
      </div>
    </div>
  );
};
export default HeroSection;

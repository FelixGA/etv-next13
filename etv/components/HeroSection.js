import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="main-heading-container">
        <div>
          <Image src="/images/medal.png" alt="picture" width={50} height={50} />
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
      <div className="comparison-container">
        <h2 className="text-blue-dark font-bold">Jetzt vergleichen</h2>

        <div className="comaprison-input-container">
          <div className="distance">Reichweite</div>
          <div className="price">Preis</div>

          <span className="together">
            <div className="weight">Nutzlast</div>
            <button className="bg-blue-dark hover:bg-blue-light text-white font-bold py-4 px-4 mb-5 mr-5 rounded-lg">
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

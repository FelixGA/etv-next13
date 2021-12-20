import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      <div className="main-heading-container">
        <div>
          <Image src="/images/de.png" alt="picture" width={50} height={50} />
        </div>
        <div className="main-heading-text">
          <h1>elektrotransporter</h1>
          <p>
            Hier finden Sie den passenden Elektrotransporter, genau für Ihre
            Ansprüche
          </p>
        </div>
      </div>
      <div className="comparison-container">
        <h2>Jetzt vergleichen</h2>

        <div className="comaprison-input-container">
          <div className="distance">Reichweite</div>
          <div className="price">Preis</div>
          <div className="weight">Nutzlast</div>
          <button>Jetzt vergleichen</button>
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

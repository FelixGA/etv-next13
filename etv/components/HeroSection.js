import React from "react";

const HeroSection = () => {
  return (
    <div class="hero-section-container">
      <div class="main-heading-container">
        <div>
          <img src="./public/images/de.png" />
        </div>
        <div class="main-heading-text">
          <h1>elektrotransporter</h1>
          <p>
            Hier finden Sie den passenden Elektrotransporter, genau für Ihre
            Ansprüche
          </p>
        </div>
      </div>
      <div class="comparison-container">
        <h2>Jetzt vergleichen</h2>

        <div class="comaprison-input-container">
          <div class="distance">Reichweite</div>
          <div class="price">Preis</div>
          <div class="weight">Nutzlast</div>
          <button>Jetzt vergleichen</button>
        </div>
      </div>
      <div class="icons-container">
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

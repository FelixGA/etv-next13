import React from "react";
import Image from "next/image";
const BottomSlider = () => {
  return (
    <div className="bottom-slider-container">
      <h2>Beliebte Kategorien</h2>
      <Image src="/images/de.png" alt="picture" width={50} height={50} />

      <button>Alle Transporter anzeigen</button>
    </div>
  );
};
export default BottomSlider;

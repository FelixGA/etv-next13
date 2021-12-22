import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../public/images/1.png";
import image2 from "../public/images/2.png";
import image3 from "../public/images/3.png";
import image4 from "../public/images/4.png";
import image5 from "../public/images/5.png";
function sliderTest() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const [transL, setTransL] = useState(false);
  const [transR, setTransR] = useState(false);

  useEffect(() => {
    if (transR) {
      setTimeout(() => {
        setTransR(false);
      }, 800);
    }
    if (transL) {
      setTimeout(() => {
        setTransL(false);
        setIndex((index + 1) % images.length);
        setIndex1((index1 + 1) % images.length);
      }, 800);
    }
  }, [transL, transR]);
  const beliebtecategorien = [
    {
      name: "preisgunstig",
      image: image1,
      id: 1,
    },
    {
      name: "boo auto",
      image: image2,
      id: 2,
    },
    {
      name: "no auto",
      image: image3,

      id: 3,
    },
    {
      name: "more autoss",
      image: image4,
      id: 4,
    },
    {
      name: "again?? auto",
      image: image5,
      id: 5,
    },
  ];
  console.log(beliebtecategorien[0].name);
  const images = [image1, image2, image3, image4, image5];
  const handlePrev = () => {
    setTransR(true);
    setTransL(false);

    const nextIndex = index - 1;
    const nextIndex1 = index1 - 1;

    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }

    if (nextIndex1 < 0) {
      setIndex1(images.length - 1);
    } else {
      setIndex1(nextIndex1);
    }
  };

  const handleNext = () => {
    setTransL(true);
    setTransR(false);

    console.log("you clicked");
  };
  return (
    <>
      <div className="flex justify-center space-x-4 mt-16">
        <button
          className="h-auto w-10 bg-yellow-800 font-extrabold text-3xl"
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <div className="relative w-96 border-2 h-56 overflow-hidden rounded-xl">
          <p className="bg-grey-dark text-white">
            {beliebtecategorien[index].name}
          </p>
          <Image
            className={`absolute object-contain z-20 w-full h-full p-4 ${
              transL
                ? "transition duration-500 ease-linear transform -translate-x-full"
                : transR
                ? "animate-slideL"
                : ""
            }`}
            src={images[index]}
            alt=""
          />{" "}
          <p className="bg-grey-dark text-white">
            {beliebtecategorien[index1].name}
          </p>
          <Image
            className={`absolute object-contain z-0 w-full h-full p-4 ${
              transL
                ? "animate-slideR"
                : transR
                ? "transition duration-500 ease-linear transform translate-x-full"
                : ""
            }`}
            src={images[index1]}
            alt=""
          />
        </div>
        <button
          className="h-auto w-10 bg-yellow-800 font-extrabold text-3xl"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </>
  );
}

export default sliderTest;

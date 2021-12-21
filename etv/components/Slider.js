import Link from "next/link";
import Image from "next/image";
import React from "react";
import image from "../public/images/de.png";
const Slider = () => {
  return (
    <div className=" min-w-64 mr-10">
      <div className=" border-2 w-72  ">
        <Image
          src={image}
          alt="picture"
          objectFit="cover"
          width={264}
          height={244}
          layout="responsive"
        />

        <h3 className="text-center text-xl font-black text-black-dark mt-8 mb-4	tracking-wide">
          Überschrift
        </h3>
        <div className="slider__item-text">
          <p className="text-sm text-center font-Inter text-blue-lighter	">
            Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen
            werden.
          </p>
        </div>

        <div className="flex  w-48 h-12 border border-blue-lighter m-auto mt-8">
          <div className="text-xs w-12 h-full bg-orange-dark text-white flex items-center justify-center">
            <span className="font-bold"> TEST</span>
          </div>
          <div className="flex flex-col justify-evenly ">
            <div className="pt-10 ">
              <span className="text-xxs tracking-widest pl-2.5">ERGEBNIS</span>
            </div>
            <div className="flex flex-row pb-8">
              <div className="">
                <span className="pl-2.5 font-black text-m ">1,4</span>
              </div>
              <div className="pb-2">
                <span className="text-xxs font-black pl-3 tracking-widest ">
                  {" "}
                  SEHR GUT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-8">
          <Link href="#">
            <a className="text-xs text-center text-blue-darker ">
              Mehr erfahren{"          "}
              <span className="text-blue-darkest text-base">-></span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Slider;

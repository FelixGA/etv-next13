import Link from "next/link";
import Image from "next/image";
import React from "react";
/* import image from "../public/images/VW-e-Crafter-Front-300x225.jpg"; */
const images = [
  {
    index: 1,
    title: "ARI 458",
    image: require("../public/images/VW-e-Crafter-Front-300x225.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 2,
    title: "ARI 145",
    image: require("../public/images/Stama-Maestro-Front-300x200.jpg"),
    desc: "Das Lastenmoped verfügt über zwei stabile Gepäckträger. Die Nutzlast beträgt 105 kg.",
  },
  {
    index: 3,
    title: "ARI 802",
    image: require("../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 4,
    title: "ARI 901",
    image: require("../public/images/Addax-MT-Laubgitter-Wiki-300x200.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 5,
    title: "ARI 345",
    image: require("../public/images/ARI-458-Kipper-L-Heck-300x199.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 6,
    title: "ARI 802",
    image: require("../public/images/VW-e-Crafter-Front-300x225.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 7,
    title: "ARI 901",
    image: require("../public/images/Stama-Maestro-Front-300x200.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 8,
    title: "ARI 345",
    image: require("../public/images/Maxus-eDeliver-3-Front-2-300x200.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 9,
    title: "ARI 802",
    image: require("../public/images/Addax-MT-Laubgitter-Wiki-300x200.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
  {
    index: 10,
    title: "ARI 345",
    image: require("../public/images/ARI-458-Kipper-L-Heck-300x199.jpg"),
    desc: "Kurze Beschreibung zum Auto soll nicht länger als zwei Zeilen werden.",
  },
];

const TopSliderCard = () => {
  return images.map((item, index) => (
    <div className="min-w-64 mr-2 pl-6" key={index}>
      <div className="w-72">
        <Image
          src={item.image}
          alt="picture"
          objectFit="cover"
          width={264}
          height={244}
          layout="responsive"
        />

        <h3 className="text-center text-xl font-black text-black-dark mt-8 mb-4	tracking-wide">
          {item.title}
        </h3>
        <div className="slider__item-text">
          <p className="text-sm text-center font-Inter text-blue-lighter	">
            {item.desc}
          </p>
        </div>

        <div className="flex  w-48 h-12 border border-blue-lighter m-auto mt-8">
          <div className="text-xs w-16 h-full bg-orange-dark text-white flex items-center justify-center">
            <span className="font-bold"> TEST</span>
          </div>
          <div className=" flex flex-col justify-center w-full">
            <div className="pt-10 ">
              <span className="text-xxs tracking-widest pl-2.5">ERGEBNIS</span>
            </div>
            <div className="flex flex-row pb-8">
              <div className="">
                <span className="relative bottom-1 pl-2.5 font-black text-m ">
                  1,4
                </span>
              </div>
              <div className="pb-2">
                <span className="relative bottom-1 text-xxs font-black pl-3 tracking-widest ">
                  SEHR GUT
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full text-center mt-8">
          <Link href="#">
            <a className="text-xs text-center text-blue-darker ">
              Mehr erfahren
              <span className="text-blue-lightest font-thin text-2xl pl-4 relative top-1">
                ➔
                {/*  <img
                  src={require("/public/images/Arrow-right-512.png")}
                  alt="ᗒ"
                /> */}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  ));
};
export default TopSliderCard;

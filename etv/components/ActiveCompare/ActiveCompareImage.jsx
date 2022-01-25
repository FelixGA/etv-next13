import React from "react";
import Image from "next/image";

function ActiveCompareImage(props) {
  const myLoader = ({ src }) => {
    return src;
  };

  const carsData2 = props.comparedCars.map((item, index) => (
    <div key={index}>
      <div className="lg:w-64 xl:w-88 2xl:w-[380px] p-4">
        <Image
          className="rounded-md md:rounded-lg brightness-[75%] "
          loader={myLoader}
          src={`http://localhost:1337${item.photo.data[0].attributes.url}`}
          alt="picture"
          objectFit="cover"
          width={100.35}
          height={66.9}
          layout="responsive"
        />
        <div className="relative">
          <p className="absolute bottom-48 left-6 text-xl text-white font-bold">
            Renault Kangoo Z.E.
          </p>
        </div>
      </div>
    </div>
  ));
  return carsData2;
}

export default ActiveCompareImage;

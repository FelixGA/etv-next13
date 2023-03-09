import { useState, useEffect } from "react";
import Image from "next/image";
import useMedia from "/hooks/useMedia";
import { useRouter } from "next/router";

export default function Trustimages({ getBrands }) {
  let brandsLength = getBrands.length;
  // console.log(brandsLength%2);
  if(brandsLength%2===1) {
    brandsLength=brandsLength-1;
    // console.log(brandsLength);
  }
  
  const [tick, setTick] = useState(0);
  const [showCount, setShowCount] = useState(1);
  const [shownImages, setShownImages] = useState([]);
  const { md } = useMedia();
  const router = useRouter();

  // set number of shown images depending on viewport
  useEffect(() => {
    md ? setShowCount(4) : setShowCount(2);
  }, [md]);

  // update shown images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (tick + showCount < brandsLength) {
        setTick(tick + showCount);
      } else {
        setTick(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [shownImages, tick, showCount, getBrands]);

  // rerender shownImages when tick or viewport changed
  useEffect(() => {
    if (!brandsLength > 0) return;
    const shownImages = [...getBrands.slice(tick, tick + showCount)];
    setShownImages(shownImages);
  }, [tick, showCount, getBrands]);

  return (
    <div
    className={"flex justify-center mt-0 lg:mt-0 overflow-hidden filter-gray"}
      // className={
      //   router.pathname == "/home"
      //     ? "flex justify-center overflow-hidden filter-gray"
      //     : "flex justify-center mt-8 lg:mt-0 overflow-hidden filter-gray"
      // }
    >
      {shownImages?.map((image, index) => (
        <div
        className={"mx-4 my-8 lg:my-24 w-[200px] h-[50px]"}
          // className={
          //   router.pathname == "/home"
          //     ? "p-8"
          //     : "mx-4 my-8 lg:my-24 w-[200px] h-[50px]"
          // }
          key={index}
        >
          <Image
            className="filter grayscale"
            src={image.src}
            alt={image.title}
            width={200}
            height={50}
            objectFit="contain"
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
}

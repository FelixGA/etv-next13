// import logos from "./logos.json";
// import Image from "next/image";
// import Link from "next/link";

// export default function CarBrandsLogos({ getBrands }) {
//   return (
//     <div className="flex flex-wrap justify-around icons-container">
//       {getBrands?.map((brand, index) => (
//         <Link href={`/fahrzeuge/${brand.slug}`} key={index}>
//           <i className=" lg:scale-125">
//             <Image src={brand.src} alt={brand.title} width={56} height={48} />
//           </i>
//         </Link>
//       ))}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import Image from "next/image";
import useMedia from "/hooks/useMedia";

export default function Trustimages({ getBrands }) {
  const [tick, setTick] = useState(0);
  const [showCount, setShowCount] = useState(1);
  const [shownImages, setShownImages] = useState([]);
  const { md } = useMedia();

  // set number of shown images depending on viewport
  useEffect(() => {
    md ? setShowCount(4) : setShowCount(2);
  }, [md]);

  // update shown images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (tick + showCount < getBrands.length) {
        setTick(tick + showCount);
      } else {
        setTick(0);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [shownImages, tick, showCount, getBrands]);

  // rerender shownImages when tick or viewport changed
  useEffect(() => {
    if (!getBrands.length > 0) return;
    const shownImages = [...getBrands.slice(tick, tick + showCount)];
    setShownImages(shownImages);
  }, [tick, showCount, getBrands]);

  return (
    <div className="flex justify-center mt-8 overflow-hidden filter-gray">
      {shownImages?.map((image, index) => (
        <div className="mx-4 my-8 lg:my-12" key={index}>
          <Image
            className="filter grayscale"
            src={image.src}
            alt={image.title}
            width={200}
            height={50}
            objectFit="contain"
          />
        </div>
      ))}
    </div>
  );
}

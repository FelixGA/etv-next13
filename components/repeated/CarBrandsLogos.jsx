import logos from "./logos.json";
import Image from "next/image";
export default function CarBrandsLogos() {
  return (
    <div className="icons-container flex justify-around flex-wrap pt-14 lg:pt-10">
      {logos.map((logo, index) => (
        <i className="m-2 lg:my-10 lg:scale-125" key={index}>
          <Image src={logo.src} alt={logo.alt} width={48} height={48} />
        </i>
      ))}
    </div>
  );
}

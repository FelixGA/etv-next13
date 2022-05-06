import logos from "./logos.json";
import Image from "next/image";
import Link from "next/link";

export default function CarBrandsLogos({ getBrands }) {
  return (
    <div className="flex flex-wrap justify-around icons-container pt-14 lg:pt-10">

      {props?.getBrands?.map((brand, index) => (
        <Link href={`/fahrzeuge/${brand.slug}`} key={index}>
          <i className="m-2 lg:my-10 lg:scale-125">

            <Image src={brand.src} alt={brand.title} width={56} height={48} />
          </i>
        </Link>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import tileCatalogue from "/public/images/ETV Rectangle.jpg";
import tileFacebook from "/public/images/ETV Rectangle2.jpg";
import tileYoutube from "/public/images/ETV Rectangle3.jpg";

const data = [
  {
    href: "https://www.elektrotransporter-vergleich.de/sheets/ETVBroschuere.pdf",
    image: tileCatalogue,
    alt: "Catalogue",
  },
  {
    href: "https://www.elektrotransporter-vergleich.de/caradvisor",
    image: tileYoutube,
    alt: "Kaufberater",
  },
  {
    href: "https://www.facebook.com/ARIMotorsElektrofahrzeuge/",
    image: tileFacebook,
    alt: "Facebook",
  },
];

export default function SideBar(props) {
  return (
    <div className="hidden mr-2 lg:block xl:mr-0 ">
      {data.map((tile) => (
        <Link href={tile.href} key={tile.href}>
          <a className="" rel="noreferrer" download={tile.href}>
            <div className="h-[250px] w-[320px] hover:scale-105 transition transform overflow-hidden shadow-xl my-10">
              <Image
                src={tile.image}
                alt={tile.alt}
                width={320}
                height={250}
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

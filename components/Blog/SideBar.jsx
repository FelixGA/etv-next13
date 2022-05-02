import Image from "next/image";
import Link from "next/link";
import tileCatalogue from "/public/images/unnamed.png";
import tileFacebook from "/public/images/unnamed.png";
import tileYoutube from "/public/images/unnamed.png";

const data = [
  { href: "/downloads", image: tileCatalogue, alt: "Catalogue" },
  {
    href: "https://www.youtube.com/c/ARIMotorsGmbH/featured",
    image: tileYoutube,
    alt: "YouTube",
  },
  {
    href: "https://www.facebook.com/ARIMotorsElektrofahrzeuge/",
    image: tileFacebook,
    alt: "Facebook",
  },
];

export default function SideBar(props) {
  return (
    <div className="hidden mr-2 lg:block xl:mr-0">
      {data.map((tile) => (
        <Link href={tile.href} key={tile.href}>
          <a
            className="flex flex-row my-10 overflow-hidden transition transform hover:scale-105"
            rel="noreferrer"
          >
            <Image
              src={tile.image}
              alt={tile.alt}
              width={250}
              height={250}
              objectFit="cover"
            />
          </a>
        </Link>
      ))}
    </div>
  );
}

import Image from "next/image";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import ListItems from "./ListItems";
import footerWords from "../../data/footerData";
import { useState, useEffect } from "react";
import Logo from "../repeated/Logo";

const Footer = ({ blogs, brands, vehicles }) => {
  let iconSize = [20, 25];

  const magazineList = [
    { category: "Hersteller", slug: "manufacturer" },
    { category: "Neuigkeiten", slug: "news" },
    { category: "Förderung", slug: "subsidies" },
    { category: "Häufig gestellte Fragen", slug: "frequentlyaskedquestions" },
    { category: "Glossar", slug: "glossar" },
  ];
  const [getBrands, setGetBrands] = useState(brands);

  useEffect(() => {
    setGetBrands(brands);
  }, [brands, blogs]);

  const marken = brands?.filter(brand => brand.leicht? brand.leicht : 0);
  // console.log(marken);

  const rights = [
    {
      slug: "impressum",
      title: "Impressum",
      category: "rechtlichesundkontakt",
    },
    { slug: "kontakt", title: "Kontakt", category: "rechtlichesundkontakt" },
    {
      slug: "dataprotection",
      title: "Datenschutzerklärung",
      category: "rechtlichesundkontakt",
    },
    {
      slug: "termsofservice",
      title: "Allgemeine Geschäftsbedingungen",
      category: "rechtlichesundkontakt",
    },
  ];

  const jetzt = new Date();
  const jahr = jetzt.getFullYear();

  return (
    <>
      <footer className="px-2 shadow-2xl xl:px-4 bg-blue-darker sm:flex sm:flex-col lg:flex-row-reverse lg:justify-between ">
        <nav className="flex flex-col justify-around my-4 xl:justify-between sm:flex-row sm:items-start lg:w-[80%] sm:pb-8 print:hidden lg:pl-8">
          <div className="flex flex-col ">
            <h3 className="flex items-end justify-center text-xs font-bold tracking-wider sm:justify-start h-14 xl:text-base">
              <Link href="/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich">
                <a className="text-white ">{`Elektro Transporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-6 ">
              <ul className="grid gap-x-2 gap-y-5 lg:grid-cols-2 lg:grid-flow-row sm:justify-items-start text-[#b1a7a7] print:hidden">
                {brands?.map((brand, index) => (
                  <li
                    className="lg:w-[110px] xl:w-[150px] 2xl:w-[200px] "
                    key={index}
                  >
                    <Link href={`/fahrzeuge/${brand.slug}`}>
                      <a className="flex justify-center w-full text-sm md:justify-start xl:text-lg">
                        {brand.title ? brand.title : brand}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <ListItems itemsList={reviewsList} /> */}
            </div>
          </div>

          {/* NEU */}
          <div className="flex flex-col">
            <h3 className="flex items-end justify-center text-xs font-bold tracking-wider sm:justify-start h-14 xl:text-base">
              <Link href="/fahrzeuge/leichtfahrzeuge-elektrotransporter">
                <a className="text-white ">{`Elektro Leichttransporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-6 lg:pr-4">
              <ul className="grid gap-x-2 gap-y-5 lg:grid-cols-2 lg:grid-flow-row sm:justify-items-start text-[#b1a7a7] print:hidden">
               {marken?.map((marke, index) => (
                  <li
                    className="lg:w-[110px] xl:w-[150px] 2xl:w-[200px] "
                    key={index}
                  >
                    <Link href={`/fahrzeuge/${marke.slug}`}>
                      <a className="flex justify-center w-full text-sm md:justify-start xl:text-lg">
                        {marke.title ? marke.title : marke}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div> 
          </div>

          <div className="flex flex-col justify-start sm:w-40 md:w-1/6 ">
            <h3 className="flex items-end justify-center text-xs font-bold tracking-wider sm:justify-start h-14 xl:text-base">
              <Link href="/magazin">
                <a className="text-white">{`Magazin`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-6">
              <ul className="flex flex-col text-[#b1a7a7] items-center sm:items-start pb-8">
                {magazineList
                  ?.map((blogCateg, index) => (
                    <li
                      className="flex items-center justify-between mb-5 "
                      key={index}
                    >
                      <Link href={`/magazin/${blogCateg.slug}`}>
                        <a className="text-sm text-left xl:text-lg">
                          {blogCateg.category}
                        </a>
                      </Link>
                    </li>
                  ))
                  .splice(0, 5)}
              </ul>
            </div>
          </div>

          {/* only for RECHTLICHES & KONTAKT
           */}
          <div className="flex flex-col items-center justify-center lg:mr-8 sm:items-start sm:w-40 md:w-1/6">
            <h3 className="flex items-center justify-center text-xs font-bold tracking-wider text-white xl:w-full md:justify-start sm:items-end h-14 xl:text-base">
              {`Rechtliches & Kontakt`.toUpperCase()}
            </h3>
            <div className="sm:pt-6">
              <ListItems itemsList={rights} />
            </div>
          </div>
        </nav>

        {/* logos and media
         */}
        <div className="relative flex flex-col items-center w-full px-4 pt-4 mx-auto md:pl-0 xl:pl-4 sm:items-start md:w-1/6 lg:pt-12">
          <div className="relative scale-90 right-2 sm:right-14 lg:right-4 xl:right-2 xl:scale-100">
            <Logo />
          </div>

          <div className="flex justify-center w-full print:hidden lg:justify-start">
            <p className="pt-6 pb-2 text-xs text-white lg:pl-2 lg:text-base xl:text-lg">
              {footerWords.map((item, index) => (
                <span className="" key={index}>
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className="relative ">
            <div className="flex justify-start pt-2 pb-8 mr-2 sm:justify-center sm:mr-0">
              <div className="p-2 transition scale-90 cursor-pointer xl:scale-100 hover:scale-110">
                <a href="https://www.facebook.com"
                  aria-label="facebook" target="_blank">
                    <BsFacebook size={25} fill="#fff" />
                </a>
              </div>
              <div className="p-2 transition scale-90 cursor-pointer hover:scale-110 xl:scale-100">
                <a href="https://www.youtube.com"
                   aria-label="youtube" target="_blank">
                    <BsYoutube size={30} fill="#fff" />
                  </a>
              </div>
              <div className="p-2 transition scale-90 cursor-pointer hover:scale-110 xl:scale-100">
                <a href="https://www.linkedin.com"
                   aria-label="linkedin" target="_blank">
                    <BsLinkedin size={25} fill="#fff" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="w-full h-[1px] bg-[#b1a7a7] print:hidden
"
      ></div>
      <div className="flex items-center justify-center h-16 text-xs tracking-wider text-white bg-blue-darker sm:text-lg sm:h-20 print:hidden">
        &copy; {jahr} Elektrotransporter-Vergleich.de
      </div>
    </>
  );
};
export default Footer;

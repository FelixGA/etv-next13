import Image from "next/image";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import ListItems from "./ListItems";
import footerWords from "../../data/footerData";
import { useState, useEffect } from "react";
import Logo from "../repeated/Logo";
const Footer = ({ blogs, brands }) => {
  const magazineList = [
    { category: "Hersteller", slug: "manufacturer" },
    { category: "Neuigkeiten", slug: "news" },
    { category: "Förderung", slug: "subsidies" },

    { category: "Häufig gestellte Fragen", slug: "frequentlyaskedquestions" },
  ];

  useEffect(() => {}, [brands, blogs]);
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

  return (
    <>
      <footer className="px-2 shadow-2xl xl:px-4 bg-blue-darker sm:flex sm:flex-col lg:flex-row-reverse lg:justify-around ">
        <nav className="flex flex-col items-center w-full my-4 justify-evenly lg:mr-14 xl:justify-evenly sm:flex-row sm:items-start lg:w-3/4 sm:pb-8 print:hidden">
          <div className="flex flex-col w-fit">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-base">
              <Link href="/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich">
                <a className="text-white ">{`Transporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-6 ">
              <ul className="grid lg:grid-rows-5 lg:grid-cols-[repeat(auto-fit,_minmax(50px,_1fr))] xl:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] lg:grid-flow-col text-[#b1a7a7] print:hidden">
                {brands?.map((blog, index) => (
                  <li className="h-[43px]  " key={index}>
                    <Link href={`/fahrzeuge/${blog.slug}`}>
                      <a className="flex justify-center w-full text-sm md:justify-start sm:text-lg">
                        {blog.title ? blog.title : blog}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <ListItems itemsList={reviewsList} /> */}
            </div>
          </div>
          <div className="flex flex-col justify-start sm:w-40 md:w-1/6 ">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-base">
              <Link href="/magazin">
                <a className="text-white">{`Magazin`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-4">
              <ul className="flex flex-col text-[#b1a7a7] items-center sm:items-start pb-8">
                {magazineList
                  ?.map((blogCateg, index) => (
                    <li
                      className="flex items-center justify-between my-2 "
                      key={index}
                    >
                      <Link href={`/magazin/${blogCateg.slug}`}>
                        <a className="text-sm text-left sm:text-lg">
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
          <div className="flex flex-col items-center justify-center sm:items-start sm:w-40 md:w-1/6">
            <h3 className="flex items-center justify-center text-sm font-bold tracking-wider text-white w-52 xl:w-full md:justify-start sm:items-end h-14 sm:text-base">
              {`Rechtliches & Kontakt`.toUpperCase()}
            </h3>
            <div className="sm:pt-4">
              <ListItems itemsList={rights} />
            </div>
          </div>
        </nav>
        {/* logos and media
         */}
        <div className="relative flex flex-col items-center px-4 pt-4 lg:pl-0 xl:pl-4 sm:items-start md:w-1/6 lg:pt-12 ">
          <div className="relative right-2">
            <Logo />
          </div>

          <div className="flex justify-center w-full print:hidden">
            <p className="pt-6 pb-2 lg:pl-2 text-xs text-center text-white w-[300px] sm:text-left lg:text-lg xl:text-lg">
              {footerWords.map((item, index) => (
                <span className="" key={index}>
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-start pt-2 pb-8 mr-2 sm:mr-0 w-28 lg:w-40">
            <div className="p-2 transition cursor-pointer hover:scale-110">
              <Link href="https://www.facebook.com">
                <a aria-label="facebook" target="_blank">
                  <BsFacebook size={25} fill="#fff" />
                </a>
              </Link>
            </div>
            <div className="p-2 transition cursor-pointer hover:scale-110 ">
              <Link href="https://www.youtube.com">
                <a aria-label="youtube" target="_blank">
                  <BsYoutube size={30} fill="#fff" />
                </a>
              </Link>
            </div>
            <div className="p-2 transition cursor-pointer hover:scale-110 ">
              <Link href="https://www.linkedin.com">
                <a aria-label="linkedin" target="_blank">
                  <BsLinkedin size={25} fill="#fff" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="w-full h-[1px] bg-[#b1a7a7] print:hidden
"
      ></div>
      <div className="flex items-center justify-center h-16 text-xs tracking-wider text-white bg-blue-darker sm:text-lg sm:h-20 print:hidden">
        &copy; 2022 Elektrotransporter-Vergleich.de
      </div>
    </>
  );
};
export default Footer;

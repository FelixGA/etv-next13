import Image from "next/image";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import ListItems from "./ListItems";
import footerWords from "../../data/footerData";
import { useState, useEffect } from "react";
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
      <footer className="print:hidden print:shadow-none shadow-2xl px-4 bg-blue-darker sm:flex sm:flex-col lg:flex-row-reverse lg:justify-around">
        <nav className="flex flex-col items-center justify-around w-full pb-4 xl:justify-evenly sm:flex-row sm:items-start lg:w-3/4 sm:pb-8 print:hidden ">
          <div className="flex flex-col justify-start w-full md:w-1/3">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-md">
              <Link href="/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich">
                <a className="text-white">{`Transporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="flex justify-center pt-4 md:justify-start">
              <ul className="flex flex-col flex-wrap pb-4 text-[#b1a7a7] items-center md:items-start justify-center w-48 print:hidden">
                {brands?.map((blog, index) => (
                  <li
                    className="flex items-center justify-between my-2"
                    key={index}
                  >
                    <Link href={`/fahrzeuge/${blog.slug}`}>
                      <a className="text-sm text-left sm:text-lg">
                        {blog.title ? blog.title : blog}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* <ListItems itemsList={reviewsList} /> */}
            </div>
          </div>
          <div className="flex flex-col justify-start sm:w-40 ">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-md">
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
          <div className="flex flex-col items-center justify-center sm:items-start sm:w-40">
            <h3 className="flex items-center justify-center text-sm font-bold tracking-wider text-white w-52 md:justify-start sm:items-end h-14 sm:text-md">
              {`Rechtliches & Kontakt`.toUpperCase()}
            </h3>
            <div className="sm:pt-4">
              <ListItems itemsList={rights} />
            </div>
          </div>
        </nav>
        {/* logos and media
         */}
        <div className="flex flex-col items-center px-4 pt-4 lg:pl-0 xl:pl-4 sm:items-start lg:w-1/4 lg:pt-8 md:px-8 print:hidden">
          <div className="flex flex-row items-center justify-center w-full sm:justify-start print:hidden">
            <div className="w-1/5 md:w-[9%] lg:w-[33%] xl:w-[20%] text-white print:hidden">
              <Link href={"/"}>
                <a>
                  <Image
                    className=""
                    src="/images/etv-logo-final-white.png"
                    width={60}
                    height={40}
                    objectFit="contain"
                    layout="responsive"
                  />
                </a>
              </Link>
            </div>
            <div className="w-fit sm:w-1/2 print:hidden">
              <Link href={"/"}>
                <a>
                  <p className="pr-4 text-xs font-bold text-white cursor-pointer sm:pr-0 sm:text-md">
                    ELEKTROTRANSPORTER
                    <br />
                    VERGLEICH
                  </p>
                </a>
              </Link>
            </div>
          </div>
          <div className="flex w-full print:hidden">
            <p className="w-full pt-6 pb-2 pl-0 text-xs text-center text-white lg:pl-4 sm:text-left lg:text-lg xl:text-lg">
              {footerWords.map((item, index) => (
                <span className="" key={index}>
                  {item}
                </span>
              ))}
            </p>
          </div>
          <div className="flex justify-between pt-2 pb-8 w-28 lg:w-40 sm:pl-4">
            <div className="transition cursor-pointer hover:scale-110">
              <Link href="https://www.facebook.com">
                <a target="_blank">
                  <BsFacebook size={25} fill="#fff" />
                </a>
              </Link>
            </div>
            <div className="transition cursor-pointer hover:scale-110">
              <Link href="https://www.youtube.com">
                <a target="_blank">
                  <BsYoutube size={30} fill="#fff" />
                </a>
              </Link>
            </div>
            <div className="transition cursor-pointer hover:scale-110">
              <Link href="https://www.linkedin.com">
                <a target="_blank">
                  <BsLinkedin size={25} fill="#fff" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-[1px] bg-[#b1a7a7] print:hidden"></div>
      <div className="flex items-center justify-center h-16 text-xs text-white bg-blue-darker sm:text-lg sm:h-20 print:hidden ">
        &copy; 2022 Elektrotransporter Vergleich
      </div>
    </>
  );
};
export default Footer;

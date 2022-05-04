import Image from "next/image";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import ListItems from "./ListItems";
import footerWords from "../../data/footerData";
import { useState, useEffect } from "react";
const Footer = ({ blogs, brands }) => {
  const magazineList = [
    { category: "Hersteller", slug: "hersteller" },
    { category: "Neuigkeiten", slug: "neuigkeiten" },
    { category: "Förderung", slug: "foerderung" },

    { category: "Häufig gestellte Fragen", slug: "haeufiggestelltefragen" },
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
      slug: "allgemeineGeschaeftsbedingungen",
      title: "Allgemeine Geschäftsbedingungen",
      category: "rechtlichesundkontakt",
    },
  ];

  return (
    <>
      <footer className="px-4 shadow-2xl bg-blue-darker sm:flex sm:flex-col lg:flex-row-reverse lg:justify-around print:hidden">
        <nav className="flex flex-col items-center justify-around w-full pb-4 xl:justify-evenly sm:flex-row sm:items-start lg:w-3/4 sm:pb-8 ">
          <div className="flex flex-col justify-start w-full md:w-1/3">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-md">
              <Link href="/fahrzeuge/elektrotransporter-nutzfahrzeuge-mit-elektro-antrieb-im-e-transporter-vergleich">
                <a className="text-white">{`Transporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-4 ">
              <ul className="flex flex-row flex-wrap sm:pb-4 text-[#b1a7a7] items-center md:items-start ">
                {brands?.map((blog, index) => (
                  <li
                    className="flex items-center justify-between pr-6 my-2"
                    key={index}
                  >
                    <Link href={`/fahrzeuge/${blog}`}>
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
              <ul className="flex flex-col sm:pb-4 text-[#b1a7a7] items-center sm:items-start ">
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
        <div className="flex flex-col items-center px-4 pt-4 lg:pl-0 sm:items-start lg:w-1/4 lg:pt-8 md:px-8">
          <div className="flex flex-row items-center justify-center w-full sm:justify-start">
            <div className="w-1/5 md:w-[9%] lg:w-[33%] xl:w-[20%] text-white ">
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
            <div className="w-fit sm:w-1/2">
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
          <div className="flex w-full">
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
      <div className="w-full h-[1px] bg-[#b1a7a7]"></div>
      <div className="flex items-center justify-center h-16 text-xs text-white bg-blue-darker sm:text-lg sm:h-20 ">
        &copy; 2022 Elektrotransporter Vergleich
      </div>
    </>
  );
};
export default Footer;

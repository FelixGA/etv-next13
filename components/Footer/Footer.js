import Image from "next/image";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import ListItems from "./ListItems";

const Footer = ({ blogs, reviews }) => {
  reviews;

  /*  select blogs upon category */

  const magazine = blogs?.filter((blog) => blog.category !== "referenzen");
  const rights = [
    {
      slug: "impressum",
      title: "Impressum",
      category: "rechtlichesundkontakt",
    },
    { slug: "kontakt", title: "Kontakt", category: "rechtlichesundkontakt" },
    {
      slug: "datenschutzerklaerung",
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
      <footer className="px-4 bg-blue-darker sm:flex sm:flex-col lg:flex-row-reverse lg:justify-around print:hidden">
        <nav className="flex flex-col justify-around xl:justify-evenly sm:flex-row items-center sm:items-start w-full lg:w-[60%] xl:w-[50%] pb-4 sm:pb-8 ">
          <div className="flex flex-col justify-start sm:w-40 ">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-md">
              <Link href="/comparePage">
                <a className="text-white">{`Transporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-4">
              <ListItems itemsList={reviews} />
            </div>
          </div>
          <div className="flex flex-col justify-start sm:w-40 ">
            <h3 className="flex items-end justify-center text-sm font-bold tracking-wider sm:justify-start h-14 sm:text-md">
              <Link href="/magazin">
                <a className="text-white">{`Magazin`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-4">
              <ListItems itemsList={magazine} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center sm:items-start sm:w-40">
            <h3 className="flex items-center justify-center text-sm font-bold tracking-wider text-white w-52 md:justify-start sm:items-end h-14 sm:text-md">
              {`Rechtliches & Kontakt`.toUpperCase()}
            </h3>
            <div className="sm:pt-4">
              <ListItems itemsList={rights} />
            </div>
          </div>
        </nav>

        <div className="flex flex-col items-center px-4 pt-4 lg:pl-0 sm:items-start lg:w-1/4 lg:pt-8 md:px-8">
          <div className="flex flex-row items-center justify-center w-full sm:justify-start">
            <div className="w-1/5 md:w-[9%] lg:w-[33%] xl:w-[20%] ">
              <Image
                className=""
                src="/images/etv-logo-final-white.png"
                width={60}
                height={40}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <div className="w-fit sm:w-1/2">
              <p className="pr-4 text-xs font-bold text-white sm:pr-0 sm:text-md">
                ELEKTROTRANSPORTER
                <br />
                VERGLEICH
              </p>
            </div>
          </div>
          <div className="flex w-72 lg:w-96">
            <p className="px-4 text-[#b1a7a7] pt-4 text-center sm:text-left w-full text-xs lg:text-sm xl:text-lg">
              ✔ unabhängig ✔ schnell ✔ immer aktuell
            </p>
          </div>
          <div className="flex justify-between w-24 pt-6 pb-8 sm:pl-4">
            <div className="">
              <BsFacebook size={25} fill="#fff" />
            </div>
            <div>
              <BsLinkedin size={25} fill="#fff" />
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

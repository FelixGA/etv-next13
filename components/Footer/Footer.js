import Image from "next/image";

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
      title: "Datenschutz-erklärung",
      category: "rechtlichesundkontakt",
    },
    {
      slug: "allgemeineGeschaeftsbedingungen",
      title: "Allgemeine Geschäfts-bedingungen",
      category: "rechtlichesundkontakt",
    },
  ];

  return (
    <>
      <footer className="pt-10 bg-blue-darker lg:flex lg:flex-row-reverse lg:justify-around print:hidden">
        <nav className="flex flex-col items-center justify-between mt-10 sm:flex-row sm:items-start ">
          <div className="flex flex-col items-center justify-start pb-8 lg:w-48 ">
            <h3 className="h-6 text-sm font-bold tracking-wider sm:text-lg sm:h-10 lg:h-12">
              <Link href="/comparePage">
                <a className="text-white">{`Transporter`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-4">
              <ListItems itemsList={reviews} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pb-8 lg:w-48">
            <h3 className="h-6 text-sm font-bold tracking-wider sm:text-lg sm:h-10 lg:h-12">
              <Link href="/magazin">
                <a className="text-white">{`Magazin`.toUpperCase()}</a>
              </Link>
            </h3>
            <div className="pt-4">
              <ListItems itemsList={magazine} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start lg:w-48 ">
            <h3 className="h-6 text-sm font-bold tracking-wider text-center text-white sm:text-lg sm:h-10 lg:h-fit">
              {`Rechtliches & Kontakt`.toUpperCase()}
            </h3>
            <div className="pt-2">
              <ListItems itemsList={rights} />
            </div>
          </div>
        </nav>

        <div className="px-8 lg:w-1/4 lg:pt-8">
          <div className="flex flex-row items-center justify-start w-full pl-2">
            <div className="w-1/3 sm:w-1/5 lg:w-[60%] xl:w-[30%] ">
              <Image
                className=""
                src="/images/etv-logo-final-white.png"
                width={60}
                height={40}
                objectFit="contain"
                layout="responsive"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <p className="text-xs font-bold text-white sm:text-xl ">
                Elektrotransporter
                <br />
                Vergleich
              </p>
            </div>
          </div>
          <div className="flex ">
            <p className="px-4 text-[#b1a7a7]">
              Hier könnte noch etwas stehen, was Leute davon überzeugt, dass Ihr
              richtig gut seid!
            </p>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center h-16 text-xs text-white bg-blue-darker sm:text-lg sm:h-20 ">
        © 2022 Elektrotransporter Vergleich
      </div>
    </>
  );
};
export default Footer;

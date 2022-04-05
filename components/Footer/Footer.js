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
    <footer className="py-10 lg:flex lg:flex-row-reverse lg:justify-around print:hidden ">
      <nav className="flex mt-10 flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="flex lg:w-48 items-center flex-col justify-start  ">
          <h3 className="text-sm font-bold tracking-wider h-6">
            <Link href="/comparePage">
              <a>{`Transporter`.toUpperCase()}</a>
            </Link>
          </h3>

          <ListItems itemsList={reviews} />
        </div>
        <div className="flex lg:w-48 items-center flex-col justify-start ">
          <h3 className="text-sm font-bold tracking-wider h-6">
            <Link href="/magazin">
              <a>{`Magazin`.toUpperCase()}</a>
            </Link>
          </h3>

          <ListItems itemsList={magazine} />
        </div>
        <div className="flex lg:w-48 items-center flex-col justify-start ">
          <h3 className=" text-sm font-bold text-center tracking-wider h-6">
            {`Rechtliches & Kontakt`.toUpperCase()}
          </h3>
          <ListItems itemsList={rights} />
        </div>
      </nav>
      <div className="lg:w-1/4 lg:pt-14 ">
        <div className="flex flex-row justify-start items-center flex-wrap pl-2">
          <Image src="/images/etv-logo-final.png" width={60} height={40} />
          <p className="text-blue-dark text-xs font-bold ">
            Elektrotransporter
            <br />
            Vergleich
          </p>
        </div>
        <div className="flex ">
          <p className="px-4">
            Hier könnte noch etwas stehen, was Leute davon überzeugt, dass Ihr
            richtig gut seid!
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

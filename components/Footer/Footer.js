import Image from "next/image";

import Link from "next/link";
import ListItems from "./ListItems";

const Footer = ({ blogs }) => {
  /*  select blogs upon category */
  const references = blogs?.filter((blog) => blog.category === "referenzen");

  const magazine = blogs?.filter((blog) => blog.category !== "referenzen");
  const rights = [
    { slug: "impressum", title: "Impressum" },
    { slug: "kontakt", title: "Kontakt" },
    { slug: "datenschutzerklaerung", title: "Datenschutz-erklärung" },
    {
      slug: "allgemeineGeschaeftsbedingungen",
      title: "Allgemeine Geschäfts-bedingungen",
    },
  ];

  return (
    <footer className="p-10 lg:flex lg:flex-row lg:justify-around print:hidden ">
      <span className="lg:w-1/4 lg:pt-14">
        <div className="flex flex-row justify-start items-center w-full flex-wrap">
          <Image src="/images/etv-logo-final.png" width={60} height={40} />
          <p className="text-blue-dark text-base font-bold leading-4">
            Elektrotransporter
            <br />
            Vergleich
          </p>
        </div>
        <p className="p-3 ">
          Hier könnte noch etwas stehen, was Leute davon überzeugt, dass Ihr
          richtig gut seid!
        </p>
        <div className="flex flex-row justify-around w-full ">
          <Link href="/Leichttransporter">
            <a>
              <img
                className="opacity-50 "
                src="https://img.icons8.com/ios-glyphs/30/000000/facebook-new.png"
              />
            </a>
          </Link>
          <Link href="/Leichttransporter">
            <a>
              <img
                className="opacity-50 "
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-new.png"
              />
            </a>
          </Link>
          <Link href="/Leichttransporter">
            <a>
              <img
                className="opacity-50 "
                src="https://img.icons8.com/ios-glyphs/30/000000/twitter.png"
              />
            </a>
          </Link>
        </div>
      </span>
      <nav className="flex mt-10 flex-col sm:flex-row justify-between items-center sm:items-start px-10 ">
        <div className="flex lg:w-48 items-center flex-col justify-center">
          <h5 className="text-xs font-bold">
            <Link href="/comparePage">
              <a className="visited:text-grey-dark">
                {`Transporter`.toUpperCase()}
              </a>
            </Link>
          </h5>

          <ListItems itemsList={references} />
        </div>
        <div className="flex lg:w-48 items-center flex-col justify-center ">
          <h5 className="text-xs font-bold">
            <Link href="/magazin">
              <a>{`Magazin`.toUpperCase()}</a>
            </Link>
          </h5>

          <ListItems itemsList={magazine} />
        </div>
        <div className="flex lg:w-48 items-center flex-col justify-center ">
          <h5 className=" text-xs items-center font-bold">
            {`Rechtliches & Kontakt`.toUpperCase()}
          </h5>
          <ListItems itemsList={rights} />
        </div>
      </nav>
    </footer>
  );
};
export default Footer;

import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-10 lg:flex lg:flex-row-reverse lg:flex-wrap lg:justify-around print:hidden ">
      <nav className="flex flex-row justify-between flex-wrap my-10 ">
        <div className="flex lg:w-48 w-1/2  flex-col justify-start flex-wrap ">
          <h5 className=" text-xs font-bold">
            <Link href="/Leichttransporter">
              <a>{`Leichttransporter`.toUpperCase()}</a>
            </Link>
          </h5>
          <ul className=" flex flex-col justify-between items-start flex-wrap  my-4  text-black">
            <li>article 1</li>
            <li>article 2</li>
            <li>article 3</li>
            <li>article 4</li>
            <li>article 5</li>
          </ul>
        </div>
        <div className="flex lg:w-48 w-1/2 flex-col justify-start flex-wrap ">
          <h5 className=" text-xs font-bold ">
            <Link href="/comparePage">
              <a>{`Transporter`.toUpperCase()}</a>
            </Link>
          </h5>
          <ul className=" flex flex-col justify-between items-start flex-wrap  my-4  text-black">
            <li>article 1</li>
            <li>article 2</li>
            <li>article 3</li>
            <li>article 4</li>
            <li>article 5</li>
          </ul>
        </div>
        <div className="flex lg:w-48 w-1/2 flex-col justify-start flex-wrap ">
          <h5 className=" text-xs font-bold">
            <Link href="/Magazin">
              <a>{`Magazin`.toUpperCase()}</a>
            </Link>
          </h5>
          <ul className=" flex flex-col justify-between items-start flex-wrap  my-4  text-black">
            <li>article 1</li>
            <li>article 2</li>
            <li>article 3</li>
            <li>article 4</li>
            <li>article 5</li>
          </ul>
        </div>
        <div className="flex lg:w-48 w-1/2 flex-col justify-start flex-wrap ">
          <h5 className=" text-xs  font-bold">
            {" "}
            <Link href="/Kontakt">
              <a>{`Kontakt`.toUpperCase()}</a>
            </Link>
          </h5>
          <ul className=" flex flex-col justify-between items-start flex-wrap mly-2 mt-4 text-black">
            <li>article 1</li>
            <li>article 2</li>
            <li>article 3</li>
            <li>article 4</li>
          </ul>
        </div>
      </nav>
      <span className="lg:w-1/4 lg:pt-14">
        <div className="flex flex-row justify-start items-center w-full flex-wrap">
          <Image src="/images/etv-logo-final.png" width={60} height={40} />
          <p className="text-blue-dark text-base font-bold leading-4">
            {" "}
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
    </footer>
  );
};
export default Footer;

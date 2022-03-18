import Image from "next/image";

import Link from "next/link";

const Footer = ({ blogs }) => {
  /*  select blogs upon category */
  const referenzen = blogs?.filter((blog) => blog.category === "referenzen");

  const magazine = blogs?.filter((blog) => blog.category !== "referenzen");
  console.log(magazine);
  const list = (
    <ul className=" flex flex-col justify-between items-start flex-wrap  my-4  text-black">
      {magazine?.map((blog) => (
        <li className="">
          <Link href={`/magazin/${blog.slug}`}>
            <a className="text-black">{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
  return (
    <footer className="p-10 lg:flex lg:flex-row-reverse lg:flex-wrap lg:justify-around print:hidden ">
      <nav className="flex flex-col xs:flex-row justify-between flex-wrap my-10 items-center  ">
        <div className="flex lg:w-48  w-1/2 items-center flex-col justify-start  flex-wrap ">
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
        <div className="flex lg:w-48 w-1/2 items-center flex-col justify-start  flex-wrap ">
          <h5 className=" text-xs font-bold ">
            <Link href="/comparePage">
              <a className="visited:text-grey-dark">
                {`Transporter`.toUpperCase()}
              </a>
            </Link>
          </h5>
          <ul className=" flex flex-col items-center justify-between  flex-wrap  my-4  text-black">
            <li>article 1</li>
            <li>article 2</li>
            <li>article 3</li>
            <li>article 4</li>
            <li>article 5</li>
          </ul>
        </div>
        <div className="flex lg:w-48 w-1/2 flex-col items-center justify-start flex-wrap ">
          <h5 className=" text-xs font-bold">
            <Link href="/magazin">
              <a>{`Magazin`.toUpperCase()}</a>
            </Link>
          </h5>

          {list}
        </div>
        <div className="flex lg:w-48 w-1/2 flex-col items-center justify-start flex-wrap ">
          <h5 className=" text-xs items-center font-bold">
            {`Rechtliches & Kontakt`.toUpperCase()}
          </h5>
          <ul className=" flex flex-col justify-between items-start flex-wrap mly-2 mt-4 text-black">
            <Link href="/Impressum">
              <a>
                <li>Impressum</li>
              </a>
            </Link>
            <Link href="/Kontakt">
              <a>
                <li>Kontakt</li>
              </a>
            </Link>
            <Link href="/Datenschutzerklärung">
              <a>
                <li>Daten-schutz-erklärung</li>
              </a>
            </Link>
            <Link href="/AllgemeineGeschäftsbedingungen">
              <a>
                <li>Allgemeine-Geschäfts-bedingungen</li>
              </a>
            </Link>
          </ul>
        </div>
      </nav>
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
    </footer>
  );
};
export default Footer;

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full sm:justify-start print:hidden">
      <div className="relative text-white w-fit">
        <Link href={"/"}>
          <a className="relative ">
            <Image
              src="/images/ETV Favicon128x128@4x.png"
              width={60}
              height={40}
              alt="logo-footer"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
      <div className="w-fit print:hidden">
        <Link href={"/"}>
          <a aria-label="home">
            <p className="pt-1 pl-4 text-xs font-bold text-white cursor-pointer xs:pl-0 sm:pr-0 sm:text-xxs">
              ELEKTROTRANSPORTER
              <br />
              VERGLEICH
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Logo;

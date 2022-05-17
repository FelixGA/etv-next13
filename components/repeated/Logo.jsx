import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full sm:justify-start print:hidden">
      <div className="relative ">
        <Link href={"/"}>
          <a className="relative block w-14">
            <Image
              src="/images/ETV Favicon128x128@4x (1).png"
              width={60}
              height={50}
              alt="logo-footer"
              objectFit="contain"
              layout="responsive"
            />
          </a>
        </Link>
      </div>
      <div className="w-fit print:hidden">
        <Link href={"/"}>
          <a aria-label="home">
            <p className="text-xs font-bold text-white cursor-pointer xs:pl-0 sm:pr-0 sm:text-xxs">
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

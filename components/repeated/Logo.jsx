import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex flex-row items-center justify-center w-full sm:justify-start print:hidden">
      <div className="relative ">
        <Link href={"/"}>
          <a className="relative block w-20">
            <Image
              src="/images/ETV Favicon128x128@4x (1).png"
              width={80}
              height={70}
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
            <p className="pb-1 text-xs font-bold tracking-wider text-white cursor-pointer sm:text-xxs">
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

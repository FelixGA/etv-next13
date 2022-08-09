import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="relative max-w-[40vw] mx-auto">
      <Link href="/">
        <a>
          <Image
            src="/images/404.jpeg"
            width={50}
            height={50}
            alt="404"
            layout="responsive"
            objectFit="contain"
          ></Image>
        </a>
      </Link>
    </div>
  );
}

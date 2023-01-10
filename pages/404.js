import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <div className="flex mt-6">
        <div className="w-1/3 flex justify-center">
          <Link href="/">
            <button className="border text-sm p-1 text-blue-darker">Home</button>
          </Link>
        </div>
      </div>
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
    </>
  );
}

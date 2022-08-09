import Image from "next/image";

export default function Custom404() {
  return (
    <div className="relative max-w-[40vw] mx-auto">
      <Image
        src="/images/404.jpeg"
        width={50}
        height={50}
        alt="404"
        layout="responsive"
        objectFit="contain"
      ></Image>
    </div>
  );
}

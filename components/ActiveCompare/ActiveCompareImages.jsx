import Link from "next/link";
import Image from "next/image";
import image from "../../public/images/345-front-1-.jpg";

export default function ActiveCompareImages({ comparedCars }) {
  return (
    <>
      {/* PLACEHOLDER */}
      <div className="relative h-full bg-grey-lighter p-4 pl-8 min-w-[160px]">
        <button className="text-sm bg-white w-52 h-10 rounded-md text-blue-darker absolute hidden lg:block top-4 left-8">
          <Link href="/comparePage">
            <a className="visited:text-blue-darker">
              « zurück zur Ergebnisliste
            </a>
          </Link>
        </button>

        <div className="relative cursor-pointer invisible">
          <a>
            <Image
              className="rounded-md md:rounded-lg brightness-50 "
              src={image}
              alt="picture"
              objectFit="contain"
              width={380}
              height={250}
            ></Image>

            <div className="lg:absolute lg:top-0 left-4">
              <h3 className="text-blue-extra lg:text-white md:pt-2 font-black text-sm lg:text-lg line-clamp-3">
                random name
              </h3>
            </div>
          </a>
        </div>
      </div>
      {comparedCars?.map((item, index) => (
        <div
          className="relative h-full bg-grey-lighter p-4 pl-8 min-w-[160px]"
          key={index}
        >
          <div className="relative cursor-pointer ">
            <Link href={`/transporter/${item.name}`}>
              <a>
                <Image
                  className=" rounded-md md:rounded-lg brightness-50 "
                  src={item.src}
                  alt="picture"
                  objectFit="cover"
                  width={380}
                  height={250}
                ></Image>

                <div className="lg:absolute lg:top-0 left-4">
                  <h3 className="text-blue-extra lg:text-white md:pt-2 font-black text-sm lg:text-lg line-clamp-3">
                    {item.title}
                  </h3>
                </div>
              </a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

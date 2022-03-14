import Link from "next/link";
import image from "../../public/images/345-front-1-.jpg";
import Image from "next/image";

export default function ActiveCompareKeys({ getKeys, comparedCars }) {
  return (
    /* BUTTON AND IMAGES AND COMPARE CATEGORIES  <>VISIBLE IN MOBILE VIEW<> */
    //

    <div className={comparedCars.length ? " border-r " : "hidden"}>
      <div className="   bg-grey-lighter">
        {/* BACK BUTTON + placeholder */}
        <div className="relative h-full bg-grey-lighter p-4">
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
                objectFit="cover"
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
      </div>
      <div className="flex items-center flex-1 bg-white h-11 md:h-20 pl-8">
        <h3 className="text-blue-extra text-xl font-bold ">Grundlagen</h3>
      </div>
      {getKeys
        .map((item, index) => (
          <div
            key={index}
            className={
              index % 2 == 0
                ? "flex items-center h-10 flex-1 bg-grey-lighter pr-1"
                : "flex items-center h-10 flex-1 bg-white pr-1"
            }
          >
            <h3 className=" text-blue-extra text-sm lg:text-lg pl-4 lg:pl-8">
              {item}
            </h3>
          </div>
        ))
        .slice(0, 11)}

      {/* <div className="w-[105%] bg-[#D0DDEA] h-20"></div> */}
    </div>
  );
}

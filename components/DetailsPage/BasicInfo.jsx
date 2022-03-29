import Link from "next/link";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import RatingBox from "../../components/ResultList/RatingBox";
import Image from "next/image";
const BasicInfo = ({ carItem }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:pt-12  p-4  lg:px-24">
      <div className=" w-full lg:w-1/2 flex flex-col justify-start">
        <div className="lg:w-64 pb-4 lg:pb-8">
          <button className="text-sm bg-white w-48 h-10 print:hidden  text-blue-darker border">
            <Link href="/comparePage">
              <a className="visited:text-blue-darker">
                « zurück zur Ergebnisliste
              </a>
            </Link>
          </button>
        </div>
        <Image
          src={carItem?.src}
          alt={carItem?.title}
          width={195}
          height={140}
          layout="responsive"
          objectFit="cover"
          className="rounded-lg lg:rounded-none lg:rounded-l-lg"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 pt-1">
        {/* DESKTOP VERSION FOR DETAILS TABLE*/}
        <div className="hidden lg:flex justify-start flex-col px-8 pb-2 ">
          <h2 className="hidden lg:block text-3xl text-blue-extra p-2 font-black">
            {carItem.title}
          </h2>

          <CarCardDetailsDesktop carItem={carItem} />
        </div>

        {/* MOBILE VERSION DETAILS TABLE */}
        <div className="flex flex-col w-full lg:hidden my-4">
          <div className="flex flex-row	flex-1 lg:hidden justify-between">
            <div className="w-full xs:w-3/4 flex ">
              <h2 className="w-full text-blue-extra text-2xl tracking-wide sm:text-2xl font-bold pb-2">
                {carItem.title}
              </h2>
              <div className="w-36 px-2 md:px-4 ">
                <RatingBox carItem={carItem} />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <CarCardDetailsMobile carItem={carItem} />
          </div>
        </div>
        {/* description */}
        <div className="w-full flex flex-col lg:px-10">
          <h3 className="w-full text-blue-extra text-2xl font-bold mt-4 pb-1">
            Über das Fahrzeug:
          </h3>
          <p className="text-ellipsis overflow-hidden leading-7 h-auto font-black">
            {carItem?.description}
          </p>
          {/* <span className="text-sm text-blue-dark">Alle Daten anzeigen</span> */}
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;

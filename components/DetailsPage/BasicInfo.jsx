import Link from "next/link";
import CarCardDetailsMobile from "../../components/ResultList/CarCardDetailsMobile";
import CarCardDetailsDesktop from "../../components/ResultList/CarCardDetailsDesktop";
import RatingBox from "../../components/ResultList/RatingBox";
import Image from "next/image";
const BasicInfo = ({ carItem, descriptionSize }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:pt-12  p-4  lg:px-24">
      <div className=" w-full lg:w-1/2 ">
        <div className="lg:w-64  ">
          <button className="text-sm bg-white w-48 h-10 print:hidden  text-blue-darker ">
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
          className="rounded-l-lg"
        />
      </div>
      <div className="flex flex-col lg:w-1/2 ">
        {/* DESKTOP VERSION FOR DETAILS TABLE*/}
        <div className="hidden lg:flex justify-center flex-col w-4/5 px-8 pb-6 ">
          <h2 className="hidden lg:block text-4xl text-black-darkest pl-2 ">
            {carItem.title}
          </h2>

          <CarCardDetailsDesktop carItem={carItem} />
        </div>

        {/* MOBILE VERSION DETAILS TABLE */}
        <div className="flex flex-col w-full lg:hidden my-4">
          <div className="flex flex-row w-full 	lg:hidden flex-wrap">
            <div className="w-2/3 xs:w-3/4 flex flex-col">
              <h2 className="w-full text-black-darkest text-2xl font-bold ">
                {carItem.title}
              </h2>
              <CarCardDetailsMobile carItem={carItem} />
            </div>
            <div className="w-1/3  xs:w-1/4  md:pl-4">
              <RatingBox carItem={carItem} />
            </div>
          </div>
        </div>
        {/* description */}
        <div className="w-full text-black-darkest flex flex-col lg:px-8">
          <h3 className="w-full text-black-darkest font-bold py-4">
            Über das Fahrzeug
          </h3>
          <p
            className={
              !descriptionSize ? "h-auto" : `text-ellipsis overflow-hidden h-48`
            }
          >
            {carItem?.description}
          </p>
          {/* <span className="text-sm text-blue-dark">Alle Daten anzeigen</span> */}
        </div>
      </div>
    </div>
  );
};
export default BasicInfo;

import Image from "next/image";
import Link from "next/link";
import image from "../../public/images/reichweite@2x.png";
import image2 from "../../public/images/zuladung@2x.png";
import image3 from "../../public/images/hoechstgeschwindigkeit@2x.png";
import image4 from "../../public/images/reichweitecopy@2x.png";
function CarCardDetailsMobile(props) {
  return (
    <div className=" w-full flex flex-col">
      <span className="py-2 flex flex-col xxs:flex-row flex-wrap">
        <h3 className="hidden lg:block">{props.caritem.title}</h3>
        <span className="flex flex-col-reverse w-full xxs:w-1/2 p-2">
          <div className="flex flex-row w-full ">
            <div className="hidden ">
              <Image src={image2} alt="zuladung-logo" width={36} height={36} />
            </div>
            <div className="flex flex-row w-full justify-center">
              <div className="text-grey-dark font-bold w-1/2">Zuladung: </div>
              <div className="text-blue-dark font-bold w-1/2">
                {" "}
                {props.caritem.weight}kg
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full  ">
            <div className="hidden ">
              <Image
                src={image4}
                alt="Reichweite-logo"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-row w-full justify-center">
              <div className="text-grey-dark font-bold w-1/2">V-Max: </div>
              <div className="text-blue-dark font-bold w-1/2">
                {" "}
                {props.caritem.vmax}km/h
              </div>
            </div>
          </div>
        </span>
        <span className="flex flex-col w-full xxs:w-1/2 p-2">
          <div className="flex flex-row w-full ">
            <div className="hidden ">
              <Image
                src={image4}
                alt="Reichweite-logo"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-row w-full justify-center">
              <div className="text-grey-dark font-bold w-1/2">Reichweite: </div>
              <div className="text-blue-dark font-bold w-1/2">
                {" "}
                {props.caritem.distance}km
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full  ">
            <div className="hidden ">
              <Image
                src={image4}
                alt="Reichweite-logo"
                width={36}
                height={36}
              />
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="text-grey-dark font-bold w-1/2">Ladezeit: </div>
              <div className="text-blue-dark font-bold w-1/2">
                {" "}
                {props.caritem.loadingtime}h
              </div>
            </div>
          </div>
        </span>
      </span>
      <div className="flex flex-wrap justify-end ">
        <Link href="##">
          <a className="borderbtn text-blue-dark m-4 rounded visited:text-grey-dark px-4 py-2">
            Zur Productseite
          </a>
        </Link>
      </div>
    </div>
  );
}
export default CarCardDetailsMobile;
//  <>
//    {props.caritem.title},{props.caritem.description}, {props.caritem.price},{" "}
//    {props.caritem.weight}, {props.caritem.distance}, {props.caritem.vmax},{" "}
//    {props.caritem.loadingtime}, {props.caritem.vmax}
//  </>;

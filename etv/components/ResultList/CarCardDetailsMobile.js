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

        <div className="flex flex-row w-1/2 p-2">
          <div className="hidden ">
            <Image
              className="hidden"
              src={image2}
              alt="Gewicht-logo"
              width={36}
              height={36}
            />
          </div>
          <span className="text-blue-dark font-bold">
            <span className="text-grey-dark">Zuladung:</span>
            {props.caritem.weight}kg
          </span>
        </div>
        <div className="flex flex-row w-1/2 p-2">
          <div className="hidden ">
            <Image
              className="hidden"
              src={image3}
              alt="Max Geschwindigkeit-logo"
              width={36}
              height={36}
            />
          </div>
          <span className="text-blue-dark font-bold">
            <span className="text-grey-dark">V-max:</span>
            {props.caritem.vmax}
            km/h
          </span>
        </div>
        <div className="flex flex-row w-1/2 p-2">
          <div className="hidden ">
            <Image src={image4} alt="Reichweite-logo" width={36} height={36} />
          </div>
          <span className="text-blue-dark font-bold">
            <span className="text-grey-dark">Reichweite: </span>
            {props.caritem.distance}km
          </span>
        </div>
        <div className="flex flex-row w-1/2 p-2">
          <div className="hidden ">
            <Image
              className="hidden"
              src={image}
              alt="Ladezeit-logo"
              width={36}
              height={36}
            />{" "}
          </div>
          <span className="text-blue-dark font-bold">
            {" "}
            <span className="text-grey-dark "> Ladezeit:</span>
            {props.caritem.loadingtime}h
          </span>
        </div>
      </span>
      <div className="flex flex-wrap justify-end ">
        <Link href="#">
          <a className="borderbtn text-blue-dark m-4 rounded px-4 py-2">
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

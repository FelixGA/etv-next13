import Link from "next/link";
import { useRouter } from "next/router";
function CarCardDetailsMobile(props) {
  const router = useRouter();

  // const { cartitle } = router.query;

  return (
    <div className=" w-full flex flex-col lg:hidden">
      <span className=" py-2 flex flex-col justify-between  xs:flex-row ">
        <span className="flex flex-col w-full xm:w-1/2  justify-between text-sm ">
          <div className="flex flex-row w-full py-1">
            <div className="flex flex-row w-full justify-between">
              <div className="text-grey-dark font-bold w-1/2">
                {props.carItem?.loadingWeight.key}:
              </div>
              <div className="text-blue-dark font-bold w-1/2 ">
                {props.carItem?.loadingWeight.value} kg
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full  py-1">
            <div className="flex flex-row w-full justify-center">
              <div className="text-grey-dark font-bold w-1/2">
                {props.carItem?.maxSpeed.key}:
              </div>
              <div className="text-blue-dark font-bold w-1/2">
                {props.carItem?.maxSpeed.value}km/h
              </div>
            </div>
          </div>
        </span>
        <span className="flex flex-col w-full xm:w-1/2 justify-between text-sm ">
          <div className="flex flex-row w-full py-1">
            <div className="flex flex-row w-full justify-between">
              <div className="text-grey-dark font-bold w-1/2">
                {props.carItem?.Range230V.key}:{" "}
              </div>
              <div className="text-blue-dark font-bold w-1/2">
                {props.carItem?.Range230V.value}km
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full py-1 ">
            <div className="flex flex-row w-full justify-between">
              <div className="text-grey-dark font-bold w-1/2">
                {props.carItem?.chargingTime230V.key}:
              </div>
              <div className="text-blue-dark font-bold w-1/2">
                {props.carItem?.chargingTime230V.value}h
              </div>
            </div>
          </div>
        </span>
      </span>

      <div
        className={
          router.query.cartitle ? "hidden" : "flex flex-wrap justify-end "
        }
      >
        <Link href={`/transporter/${props.carItem?.title}`}>
          <a className="border-2 border-black-darkest text-blue-dark m-4 rounded visited:text-grey-dark px-4 py-2">
            Zur Productseite
          </a>
        </Link>
      </div>
    </div>
  );
}
export default CarCardDetailsMobile;
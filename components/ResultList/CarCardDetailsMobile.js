import Link from "next/link";
import { useRouter } from "next/router";
function CarCardDetailsMobile(props) {
  const router = useRouter();

  // const { cartitle } = router.query;

  return (
    <div className="flex-1 flex flex-col lg:hidden">
      <div className="px-2 flex flex-col justify-between">
        <div className="flex flex-col flex-1 justify-between text-sm mb-2 xs:mb-0">
          <div className="flex flex-row flex-1 py-1  ">
            <div className="flex flex-row flex-1 justify-between ">
              <div className="text-grey-dark font-bold w-full ">
                {props.carItem?.loadingWeight.key}:
              </div>
              <div className="text-blue-dark font-bold w-full">
                {props.carItem?.loadingWeight.value}
                <span>&nbsp;{props.carItem?.loadingWeight.baseUnit}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1  py-1">
            <div className="flex flex-row flex-1 justify-center">
              <div className="text-grey-dark font-bold w-full ">
                {props.carItem?.maxSpeed.key}:
              </div>
              <div className="text-blue-dark font-bold w-full ">
                {props.carItem?.maxSpeed.value}
                <span>&nbsp;{props.carItem?.maxSpeed.baseUnit}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 xm:w-1/2 justify-between text-sm ">
          <div className="flex flex-row flex-1 py-1">
            <div className="flex flex-row flex-1 justify-between">
              <div className="text-grey-dark font-bold w-full ">
                {props.carItem?.rangeLithium.key}:
              </div>
              <div className="text-blue-dark font-bold w-full ">
                {props.carItem?.rangeLithium.value}
                <span>&nbsp;{props.carItem?.rangeLithium.baseUnit}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 py-1 ">
            <div className="flex flex-row flex-1 justify-between">
              <div className="text-grey-dark font-bold w-full">
                {props.carItem?.chargingTimeLithium.key}:
              </div>
              <div className="text-blue-dark font-bold w-full ">
                {props.carItem?.chargingTimeLithium.value}
                <span>&nbsp;{props.carItem?.chargingTimeLithium.baseUnit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          router.query.cartitle ? "hidden" : "flex flex-wrap justify-end"
        }
      >
        <Link href={`/transporter/${props.carItem?.name}`}>
          <a className="border-2 border-blue-darker text-blue-darker m-4 rounded visited:text-blue-dark px-4 py-2 w-fit">
            Zur Productseite
          </a>
        </Link>
      </div>
    </div>
  );
}
export default CarCardDetailsMobile;

import Link from "next/link";
import { useRouter } from "next/router";
function CarCardDetailsMobile(props) {
  const router = useRouter();

  // const { cartitle } = router.query;

  return (
    <div className=" w-full flex flex-col mt-4 lg:hidden">
      <div className=" py-2 flex flex-col justify-between  xs:flex-row  ">
        <div className="flex flex-col flex-1  justify-between text-sm mb-2 xs:mb-0">
          <div className="flex flex-row flex-1 py-1  ">
            <div className="flex flex-row flex-1 justify-between ">
              <div className="text-grey-dark font-bold w-full xs:w-2/5">
                {props.carItem?.loadingWeight.key}:
              </div>
              <div className="text-blue-dark font-bold w-full xs:w-3/5 ">
                {props.carItem?.loadingWeight.value}{" "}
                {props.carItem?.loadingWeight.baseUnit}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1  py-1">
            <div className="flex flex-row flex-1 justify-center">
              <div className="text-grey-dark font-bold w-full xs:w-2/5">
                {props.carItem?.maxSpeed.key}:
              </div>
              <div className="text-blue-dark font-bold w-full xs:w-3/5">
                {props.carItem?.maxSpeed.value}
                {props.carItem?.maxSpeed.baseUnit}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 xm:w-1/2 justify-between text-sm ">
          <div className="flex flex-row flex-1 py-1">
            <div className="flex flex-row flex-1 justify-between">
              <div className="text-grey-dark font-bold w-full xs:w-2/5">
                {props.carItem?.rangeLithium.key}:
              </div>
              <div className="text-blue-dark font-bold w-full xs:w-3/5">
                {props.carItem?.rangeLithium.value}
                {props.carItem?.rangeLithium.baseUnit}
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-1 py-1 ">
            <div className="flex flex-row flex-1 justify-between">
              <div className="text-grey-dark font-bold w-full xs:w-2/5">
                {props.carItem?.chargingTimeLithium.key}:
              </div>
              <div className="text-blue-dark font-bold w-full xs:w-3/5">
                {props.carItem?.chargingTimeLithium.value}
                {props.carItem?.chargingTimeLithium.baseUnit}
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

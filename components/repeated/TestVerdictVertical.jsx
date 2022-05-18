import Image from "next/image";
import { FcCheckmark } from "react-icons/fc";
import StarsRating from "./StarsRating";

const TestVerdictVertical = ({ stars }) => {
  return (
    <div className="relative w-full h-full bg-white border-2 rounded-sm">
      <div className="relative text + stars + icon ">
        <div className="text + stars flex flex-col ">
          <div className="flex justify-center">
            <p className="text-[20px] font-extrabold  text-blue-darker">
              TESTURTEIL
            </p>
          </div>
          <div className="flex justify-center">
            <StarsRating stars={stars} />
          </div>
        </div>
        <div className="relative flex justify-center right-3 bottom-4 w-28 ">
          <Image
            src="/images/etv-logo-final.png"
            alt="test"
            width={120}
            height={120}
            objectFit="contain"
          />

          <div className="absolute bottom-10 left-[95px] sm:left-[100px] scale-75 sm:scale-100">
            <FcCheckmark size={50} />
          </div>
        </div>
      </div>
      <div className="absolute flex justify-center w-full px-8 bottom-1">
        <p className=" xs:text-[10px] text-xxs">
          ELEKTROTRANSPORTER-VERGLEICH.DE
        </p>
        {/* <p className="text-sm text-grey-nav">Testbericht 435 von 05/2022</p> */}
      </div>
    </div>
  );
};

export default TestVerdictVertical;

import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="sticky  lg:z-10 lg:bottom-0 flex-1 h-24 lg:h-32 xl:h-36 bg-grey-light flex justify-end items-center print:hidden">
      <div className=" flex-0.5 flex bg-red-500">
        <div
          id="BLUE-BUTTONS-SECTION"
          className="flex flex-col md:flex-row items-center  bg-green-300 "
        >
          <button
            onClick={() => window.print()}
            className={
              "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded px-4 flex justify-center items-center h-8 sm:h-10 w-32 xl:w-40 mb-1 md:mb-0"
            }
          >
            Drucken
          </button>

          <div className="">
            <ButtonCompare carItem={carItem} />
          </div>
        </div>
        <div
          id="PRICE-ANFRAGEN-BUTTONS-SECTION"
          className=" flex  justify-center items-center"
        >
          <div className="flex justify-center items-center ">
            <ButtonAnfragen />
          </div>
          <div className="">
            <p className="text-green-700 text-md xl:text-xl 2xl:text-2xl font-black text-center ">
              ab {carItem?.price} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrintPopUp;

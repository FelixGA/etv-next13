import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="sticky md:mt-20 lg:z-10 lg:bottom-0 flex-1 h-18 lg:h-32 bg-grey-light flex justify-evenly items-center print:hidden">
      <div
        id="BLUE-BUTTONS-SECTION"
        className=" h-full flex justify-between items-center "
      >
        <div className=" xs:mx-2  justify-center items-center">
          <button
            onClick={() => window.print()}
            className={
              "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded  px-4 flex justify-center items-center h-8 sm:h-10 w-28 sm:w-36 xl:w-40 "
            }
          >
            Drucken
          </button>
        </div>
        <div className="justify-center items-center ">
          <ButtonCompare carItem={carItem} />
        </div>
      </div>
      <div
        id="PRICE-ANFRAGEN-BUTTONS-SECTION"
        className=" bg-red-500 w-72 h-full flex items-center "
      >
        <div className="flex justify-center items-center">
          <ButtonAnfragen />
        </div>
        <div className="">
          <p className="text-green-700 text-md xl:text-xl font-bold text-center">
            ab {carItem?.price} €
          </p>
        </div>
      </div>
    </div>
  );
};
export default PrintPopUp;

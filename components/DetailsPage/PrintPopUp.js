import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="sticky md:mt-20 lg:z-10 lg:bottom-0 w-full h-18 lg:h-32 bg-grey-light flex justify-between items-center print:hidden">
      <div className="hidden md:block md:w-3/6">.</div>
      <span
        id="BLUE-BUTTONS-SECTION"
        className=" h-full flex flex-col md:flex-row flex-wrap w-1/2 md:w-3/12 justify-between items-between xs:justify-center xs:items-center "
      >
        <div className=" xs:mx-2  justify-center items-center">
          <button
            onClick={() => window.print()}
            className={
              "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white mb-2 text-sm xl:tracking-wider rounded  px-4 flex justify-center items-center h-8 sm:h-10 w-28 sm:w-36 xl:w-40 "
            }
          >
            Drucken
          </button>
        </div>
        <div className="justify-center items-center ">
          <ButtonCompare carItem={carItem} />
        </div>
      </span>
      <span
        id="PRICE-ANFRAGEN-BUTTONS-SECTION"
        className=" w-1/2 md:w-3/12 h-full flex flex-col-reverse flex-wrap justify-between  items-between xs:justify-center xs:items-center "
      >
        <p className="text-green-700 text-md xl:text-xl font-bold text-center w-full ">
          ab {carItem?.price} €
        </p>{" "}
        <div className="w-full flex justify-center items-center">
          <ButtonAnfragen />
        </div>
      </span>
    </div>
  );
};
export default PrintPopUp;

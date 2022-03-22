import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="mt-8 sticky lg:z-10 lg:bottom-0 flex-1 h-24 md:h-36 xl:h-40 bg-grey-lighter flex justify-end items-center print:hidden">
      <div className="w-full md:w-3/4 flex items-center justify-between">
        <div className="twoButtons flex-col md:flex-row flex w-1/2 ml-2 sm:ml-0 items-center">
          <div className="drucken">
            <button
              onClick={() => window.print()}
              className={
                "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded flex justify-center items-center h-8 sm:h-10 w-28 sm:w-32 md:w-44 mb-1 md:mb-0"
              }
            >
              Drucken
            </button>
          </div>

          <div className="md:pl-4 pl-0">
            <ButtonCompare carItem={carItem} />
          </div>
        </div>
        <div
          id="PRICE-ANFRAGEN-BUTTONS-SECTION"
          className="flex flex-col justify-between items-center "
        >
          <div className=" ">
            <p className="text-green-700 text-md xl:text-2xl 2xl:text-3xl font-black pb-3 md:pb-0">
              ab {carItem?.price} €
            </p>
          </div>
          <div className="mr-2 md:pr-4 md:pb-6">
            <ButtonAnfragen />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPopUp;

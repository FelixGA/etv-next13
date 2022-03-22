import ButtonAnfragen from "../ResultList/ButtonAnfragen";
import ButtonCompare from "../ResultList/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="sticky lg:z-10 lg:bottom-0 flex-1 h-24 lg:h-36 xl:h-40 bg-grey-lighter flex justify-end items-center print:hidden">
      <div className="w-full md:w-1/2 flex justify-between items-center">
        <div className="twoButtons flex-col md:flex-row flex w-2/3 ml-2 sm:ml-0">
          <div className="drucken">
            <button
              onClick={() => window.print()}
              className={
                "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded flex justify-center items-center h-8 sm:h-10 w-32"
              }
            >
              Drucken
            </button>
          </div>

          <div className=" md:pl-8 mt-1 sm:mt-0">
            <ButtonCompare carItem={carItem} />
          </div>
        </div>
        <div
          id="PRICE-ANFRAGEN-BUTTONS-SECTION"
          className="flex w-1/3 relative"
        >
          <div className="flex justify-center items-center relative md:left-10 cursor-pointer w-24">
            <ButtonAnfragen />
          </div>
          <div className="absolute">
            <p className="text-green-700 text-md xl:text-xl 2xl:text-3xl font-black text-center relative bottom-6 md:bottom-10 md:left-8 md:w-48 ">
              ab {carItem?.price} €
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPopUp;

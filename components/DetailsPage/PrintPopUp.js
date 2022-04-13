import ButtonAnfragen from "../repeated/ButtonAnfragen";
import ButtonCompare from "../repeated/ButtonCompare";

const PrintPopUp = (props) => {
  let carItem = props.carItem;
  return (
    <div className="mt-8 sticky lg:z-10 lg:bottom-0 flex-1 h-24 md:h-36 xl:h-40 bg-grey-lighter flex justify-end items-center print:hidden">
      <div className="w-full lg:w-3/4 flex items-center justify-between">
        <div className="twoButtons flex-col md:flex-row flex w-1/2 ml-2 md:ml-8 items-start ">
          <div className="drucken">
            <button
              onClick={() => window.print()}
              className={
                "bg-blue-dark disabled:bg-grey-light hover:bg-blue-light text-white text-sm xl:tracking-wider rounded flex justify-center items-center h-8 sm:h-10 w-32 md:w-44 mb-1 md:mb-0"
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
          className="flex flex-col justify-between items-center lg:mr-20 md:pb-8 "
        >
          <div className=" pb-2 pt-1 md:pb-0 md:pt-0 md:mr-6 md:mb-2">
            <p className="text-green-700 text-xl md:text-2xl xl:text-3xl font-black ">
              ab {carItem?.price} €
            </p>
          </div>
          <div className=" mr-2 md:mr-6 pb-1">
            <ButtonAnfragen carItem={carItem.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPopUp;

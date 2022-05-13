const Basics = ({ basics, carItem }) => {
  return (
    <section className="w-full lg:w-1/3 print:w-40">
      <h3 className="pt-8 pb-4 pl-4 text-2xl font-bold leading-7 text-blue-extra print:text-[8px]  print:p-0">
        Grundlagen
      </h3>
      <div className="flex flex-col w-full text-blue-extra">
        <div className="flex flex-row flex-1 bg-grey-lighter">
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-md print:text-[8px] print:h-8 print:pt-2 ">
            Klasse:
          </p>
          <p className="flex items-center w-1/2 py-1 pl-4 lg:border-r-2 border-grey-light print:p-0">
            {carItem.typeClass}
          </p>
        </div>
        {basics?.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 !== 0
                ? "flex flex-1 bg-grey-lighter print:p-0 print:h-8	 "
                : "flex flex-1 print:p-0 print:h-8	"
            }
          >
            <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-md print:text-[8px]  print:h-8	">
              {item.key}
            </p>
            <p className="flex items-center w-1/2 py-1 pl-4 lg:border-r-2 border-grey-light h-14 text-md print:text-[8px] print:h-8 	">
              {item.value ? item.value : "-"} {item.value ? item.baseUnit : ""}
            </p>
          </div>
        ))}
        <div
          className={
            basics.length % 2 !== 0
              ? "flex flex-1 bg-grey-lighter justify-center print:h-8"
              : "flex flex-1 print:h-8"
          }
        >
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-md 	print:h-8">
            Gesamtgewicht
          </p>
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-md lg:border-r-2 border-grey-light print:h-8	">
            {carItem.curbweight.value + carItem.loadingWeight.value}{" "}
            {carItem.curbweight.baseUnit}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Basics;

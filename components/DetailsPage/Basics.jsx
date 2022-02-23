const Basics = ({ basics, carItem }) => {
  return (
    <section className="w-full lg:w-1/2 lg:px-2">
      <h3 className="text-black-darkest font-bold pt-8 pb-4">Grundlagen</h3>
      <div className="flex flex-col w-full text-[#2C3F53] lg:pr-6">
        <div
          className="
                 flex flex-row w-full bg-bg-grey-lighter "
        >
          <p className="w-1/2 py-1 ">Klasse:</p>
          <p className="w-1/2 py-1">{carItem.typeClass}</p>
        </div>
        {basics?.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 == 0 ? "flex flex-1 bg-grey-lighter " : "flex flex-1 "
            }
          >
            <p className="w-1/2 py-1">{item.key}</p>
            <p className="w-1/2 py-1">
              {item.value ? item.value : "-"} {item.baseUnit}
            </p>
          </div>
        ))}
        <div
          className={
            basics.length % 2 == 0
              ? "flex flex-1 bg-grey-lighter "
              : "flex flex-1 "
          }
        >
          <p className="w-1/2 py-1">Gesamtgewicht</p>
          <p className="w-1/2 py-1">
            {carItem.curbweight.value + carItem.loadingWeight.value}{" "}
            {carItem.curbweight.baseUnit}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Basics;

const Details = ({ details }) => {
  return (
    <section className="w-full lg:w-1/3 print:w-40">
      <h3 className="pt-8 pb-4 pl-4 text-2xl font-bold leading-7 text-blue-extra print:text-[8px]  print:p-0">
        Details
      </h3>
      {details?.map((item, index) => (
        <div
          key={index}
          className={
            index % 2 == 0
              ? "flex flex-1 bg-grey-lighter text-blue-extra print:p-0 print:h-8"
              : "flex flex-1 text-blue-extra print:p-0 print:h-8	 "
          }
        >
          <p
            className={
              index == 0 || index == 5
                ? "w-1/2 py-1 font-bold flex items-center pl-4 h-14 print:h-8"
                : "w-1/2 py-1 flex items-center pl-4 h-14 print:h-8"
            }
          >
            {item.key}
          </p>
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-blue-extra print:h-8	">
            {item.value ? item.value : "-"} {item.value ? item.baseUnit : ""}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Details;

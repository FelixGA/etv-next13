const Details = ({ details }) => {
  return (
    <section className="w-full lg:w-1/3">
      <h3 className="pt-8 pb-4 pl-4 text-2xl font-bold leading-7 text-blue-extra">
        Details
      </h3>
      {details?.map((item, index) => (
        <div
          key={index}
          className={
            index % 2 == 0 ? "flex flex-1 bg-grey-lighter " : "flex flex-1 "
          }
        >
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-blue-extra">
            {item.key}
          </p>
          <p className="flex items-center w-1/2 py-1 pl-4 h-14 text-blue-extra">
            {item.value ? item.value : "-"} {item.value ? item.baseUnit : ""}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Details;

const Details = ({ details }) => {
  return (
    <section className="">
      <h3 className="text-blue-extra font-bold pt-8 pb-4 pl-4 text-2xl leading-7">
        Details
      </h3>
      {details?.map((item, index) => (
        <div
          key={index}
          className={
            index % 2 == 0 ? "flex flex-1 bg-grey-lighter " : "flex flex-1 "
          }
        >
          <p className="w-1/2 py-1 flex items-center h-14 pl-4 text-blue-extra">
            {item.key}
          </p>
          <p className="w-1/2 py-1 flex items-center h-14 pl-4 text-blue-extra">
            {item.value ? item.value : "-"} {item.value ? item.baseUnit : ""}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Details;

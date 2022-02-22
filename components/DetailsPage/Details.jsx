const Details = ({ details }) => {
  console.log(details);

  return (
    <section className=" text-[#2C3F53] ">
      <h3 className="text-black-darkest font-bold pt-8 pb-4">Details</h3>
      {details?.map((item, index) => (
        <div
          key={index}
          className={
            index % 2 == 0
              ? "flex flex-row w-full bg-[#F2F5F8] "
              : "flex flex-row w-full "
          }
        >
          <p className="w-1/2 py-1">{item.key}</p>
          <p className="w-1/2 py-1">
            {item.value ? item.value : "-"} {item.baseUnit}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Details;

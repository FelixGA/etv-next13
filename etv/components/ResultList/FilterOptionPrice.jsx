function FilterOptionPrice() {
  const filterOptionPriceData = [
    {
      id: 1,
      value: "0-20000€",
      name: "preis",
    },
    {
      id: 2,
      value: "20001-40000€",
      name: "preis",
    },
    {
      id: 3,
      value: "40001-60000€",
      name: "preis",
    },
    {
      id: 4,
      value: "60001-80000€",
      name: "preis",
    },
  ];

  return filterOptionPriceData.map((item) => {
    return (
      <div className="mt-1 flex flex-row py-2 " key={item.id}>
        <input
          className=" appearance-none   w-6 h-6 text-xl border border-[#7D94AE] rounded-lg text-white checked:text-black checked:bg-blue-dark  checked:text-white after:content-['✔'] after:relative after:left-1 after:bottom-0.5 "
          type="checkbox"
          name={item.name}
        ></input>
        <label
          forhtml="preis"
          className="inline-flex items-center cursor-pointer pl-5 font-thin text-lg text-[#2C3F53]"
        >
          {item.value}
        </label>
      </div>
    );
  });
}

export default FilterOptionPrice;

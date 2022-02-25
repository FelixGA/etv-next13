const NewsLetter = (props) => {
  return (
    <div className="newsletter-container flex flex-col justify-center flex-wrap items-center p-10 bg-grey-lightest">
      <h2 className="text-grey-darkest text-2xl tracking-wider font-bold py-2">
        {" "}
        {props.getContent.content[4].name}
      </h2>
      <p className="flex justify-center custom-text px-4 py-8  text-grey-darker">
        {props.getContent.content[4].markdown}
      </p>{" "}
      <span>
        <p className="w-full align-left text-grey-dark font-bold">Email</p>
        <div className="flex flex-col xs:flex-row">
          <input type="email" placeholder="" className="h-14 text-lg w-3/4" />
          <button className="bg-blue-dark  hover:bg-blue-light text-white font-bold px-6 text-sm rounded-r-lg h-14">
            anmelden
          </button>
        </div>
      </span>
    </div>
  );
};
export default NewsLetter;

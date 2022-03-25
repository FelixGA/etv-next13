import { MDXRemote } from "next-mdx-remote";

const NewsLetter = ({ getMarkdownContext }) => {
  return (
    <div className="newsletter-container flex flex-col justify-center flex-wrap items-center p-10 bg-grey-lightest">
      {/* <h2 className="text-grey-darkest text-2xl tracking-wider font-bold py-2">
        {" "}
        
      </h2> */}
      <div className="flex flex-col justify-center custom-text px-4 pb-4 text-grey-darker">
        <MDXRemote {...getMarkdownContext.newsletter} />
      </div>
      <div className="">
        <p className="w-full align-left text-blue-lighter font-bold pb-1 pl-1">
          Email
        </p>
        <div className="flex flex-col xs:flex-row">
          <input
            type="email"

            placeholder="deine E-mail"
            className="h-14 text-lg rounded-sm w-48 sm:w-full placeholder:pl-2"

          />
          <button className="bg-blue-dark mt-2 xs:mt-0 hover:bg-blue-light text-white font-bold px-6 text-md rounded-md sm:rounded-r-lg h-14">
            anmelden
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;

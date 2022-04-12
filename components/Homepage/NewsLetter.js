import { MDXRemote } from "next-mdx-remote";
import Button from "../core/Button";

//import { useForm } from "react-hook-form";
const NewsLetter = ({ getMarkdownContext }) => {
  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   setValue,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = async (data, e) => {
  //   e.preventDefault();
  // "data", data;
  // console.log(data);

  // try {
  //   const result = await axios.post(`/api/handleForm`, data);
  //   console.log(result);
  // } catch (err) {
  //   console.log("error", err.response.data.message);
  // }
  // };

  // const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <div className="newsletter-container flex flex-col justify-center flex-wrap items-center p-10 bg-grey-lightest">
      <div className="flex flex-col justify-center custom-text px-4 pb-4 text-grey-darker ">
        <MDXRemote {...getMarkdownContext.newsletter} />
      </div>
      <div className="">
        <p className="w-full align-left text-blue-lighter font-bold pb-1 pl-1">
          Email <span className="text-red-500">*</span>
        </p>

        <form
          // method="POST"
          // onSubmit={handleSubmit(onSubmit, onError)}
          className="flex flex-col xs:flex-row"
        >
          <input
            content-type="email"
            // {...register("emailInput", {
            //   required: true,
            //   pattern: emailRegex,
            // })}
            className="h-14 text-lg rounded-sm w-48 sm:w-full placeholder:pl-2"
          />
          {/* <div className="flex items-center bg-blue-dark mt-2 xs:mt-0 hover:bg-blue-light text-white font-bold px-6 text-md rounded-md sm:rounded-r-lg sm:rounded-none h-14">
            anmelden
            <Button disabled={true} />
          </div> */}
          <button
            disabled={true}
            className="bg-blue-dark mt-2 xs:mt-0 hover:bg-blue-light text-white font-bold px-6 text-md rounded-md sm:rounded-r-lg sm:rounded-none h-14"
          >
            anmelden
          </button>
        </form>
      </div>
    </div>
  );
};
export default NewsLetter;

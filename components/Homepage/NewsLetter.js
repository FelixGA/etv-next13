import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import TextInput from "../core/TextInput";
const NewsLetter = ({ getMarkdownContext }) => {
  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    e.preventDefault();
    "data", data;
    // console.log("mydata", data);

    try {
      const result = await axios.post(`/api/handleNewsletter`, data);
      // console.log("result", result);
    } catch (err) {
      console.log("error", err.response.data.message);
    }
  };
  const [send, setSend] = useState("");

  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <div className="flex flex-col flex-wrap items-center justify-center px-10 pt-6 pb-10 bg-grey-lightest">
      <div className="flex flex-col justify-center sm:px-4 py-4 xl:w-[1000px] custom-text text-grey-darker">
        <MDXRemote {...getMarkdownContext.newsletter} />
      </div>
      <div>
        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit, onError)}
          className={
            send && !errors.emailInput
              ? "hidden"
              : "flex flex-col xs:flex-row mt-4 relative"
          }
        >
          <TextInput
            style={`${errors.emailInput && " focus:border-red-500 "}`}
            placeholder={"z.B. max@muster.com"}
            register={register}
            label={"Email:"}
            id={"emailInput"}
            type={"string"}
            registerData={"emailInput"}
            required={true}
            pattern={emailRegex}
          />
          {/* <p className="text-red-200">
            {errors.emailInput && "Email ist erforderlich"}
          </p> */}
          <button
            onClick={() => {
              !errors.emailInput && watch().emailInput.length > 0
                ? setSend(true)
                : setSend(false);
            }}
            type="submit"
            className="relative px-6 text-base font-bold text-white transition rounded-md lg:top-3 xs:mt-2 bg-blue-dark lg:mt-6 hover:bg-blue-light sm:rounded-r-lg xs:rounded-l-none h-14"
          >
            Anmelden
          </button>
        </form>
        <div
          className={
            send && !errors.emailInput
              ? "flex h-fit justify-center items-center w-full "
              : null
          }
        >
          <p className="text-red-500 sm:pl-2">
            {errors.emailInput && "Email ist erforderlich"}
          </p>
        </div>
        <div
          className={
            send && !errors.emailInput
              ? "flex h-fit justify-center items-center w-full "
              : "hidden"
          }
        >
          <p className="w-full px-8 mt-4 sm:p-8 sm:w-2/3 sm:text-lg">
            Vielen Dank! Das Formular wurde erfolgreich übermittelt.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;

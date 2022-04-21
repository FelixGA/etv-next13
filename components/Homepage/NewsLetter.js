import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
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
    console.log("mydata", data);

    try {
      const result = await axios.post(`/api/handleNewsletter`, data);
      console.log("result", result);
    } catch (err) {
      console.log("error", err.response.data.message);
    }
  };
  const [send, setSend] = useState("");

  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <div className="newsletter-container flex flex-col justify-center flex-wrap items-center p-10 bg-grey-lightest">
      <div className="flex flex-col justify-center custom-text px-4 pb-4 text-grey-darker ">
        <MDXRemote {...getMarkdownContext.newsletter} />
      </div>
      <div>
        <p
          className={
            send
              ? "hidden"
              : "w-full align-left text-blue-lighter font-bold pb-1 pl-1"
          }
        >
          Email <span className="text-red-500">*</span>
        </p>

        <form
          method="POST"
          onSubmit={handleSubmit(onSubmit, onError)}
          className={send ? "hidden" : "flex flex-col xs:flex-row"}
        >
          <input
            content-type="email"
            placeholder="E-Mail"
            id="emailInput"
            type="email"
            {...register("emailInput", {
              required: true,
              pattern: emailRegex,
            })}
            className="h-14 text-lg rounded-sm w-48 sm:w-full placeholder:pl-2"
          />
          <p className="text-red-500">
            {errors.emailInput && "Email ist erforderlich"}
          </p>
          <button
            onClick={() => {
              !errors.emailInput && watch().emailInput.length > 0
                ? setSend(true)
                : setSend(false);
            }}
            type="submit"
            className="bg-blue-dark mt-2 xs:mt-0 hover:bg-blue-light text-white font-bold px-6 text-md rounded-md sm:rounded-r-lg sm:rounded-none h-14"
          >
            anmelden
          </button>
        </form>
        <div
          className={
            send ? "flex h-fit justify-center items-center w-full " : "hidden"
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

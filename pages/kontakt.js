import Head from "next/head";
import getContent from "/utils/getContent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Blog from "../components/Blog/Blog";

export default function kontakt(props) {
  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  const fullNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
  const phoneNumberRegex = RegExp(/^[0-9]{9,15}$/);
  // const handleSubmit = (e) => {
  //   alert("Thank you for your message!");
  //   e.preventDefault();
  // };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    "data", data;
  };

  const onError = (errors, e) => console.log("errors", errors, e);
  // const watchName = watch("firstName");
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <form
        /* action="/action_page.php" */
        action="https://api.vercel.com/v6/deployments"
        method="POST"
        onSubmit={handleSubmit(onSubmit, onError)}
        Content-Type="application/json"
        className="flex flex-col items-center w-20 h-24"
      >
        <label for="name">Name:</label>
        <input
          {...register("firstName", { required: true, pattern: fullNameRegex })}
          // onChange={(e) => SetGetName(e.target.value)}
          id="name"
          type="string"
          // name="name"
          title="write name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />

        <label for="firma">Firma:</label>
        <input
          {...register("firma", { required: false })}
          // onChange={(e) => SetGetFirma(e.target.value)}
          id="firma"
          type="string"
          // name="name"
          title="write firma"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="location">Postleitzahl:</label>
        <input
          {...register("zipcode", {
            required: false,
          })}
          // onChange={(e) => SetGetPostNum(e.target.value)}
          id="zipcode"
          type="string"
          // name="zip code"
          title="zip code"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="Ort">Ort:</label>

        <input
          {...register("city", { required: false })}
          // onChange={(e) => SetGetLocation(e.target.value)}
          id="city"
          type="string"
          // name="location"
          title="city"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="email-input">Email:</label>
        <input
          {...register("email", { required: true, pattern: emailRegex })}
          // onChange={(e) => SetGetEmail(e.target.value)}
          id="email-input"
          type="email"
          // name="email-input"
          title="write proper e mail"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="phone">Telefon:</label>
        <input
          {...register("phone", { required: false, pattern: phoneNumberRegex })}
          // onChange={(e) => SetGetPhone(e.target.value)}
          id="phone"
          type="number"
          // name="phone"
          title="write proper e mail"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="message">Nachricht</label>
        <input
          {...register("message", { required: false })}
          // onChange={(e) => SetGetMessage(e.target.value)}
          id="message"
          type="text"
          // name="message"
          title="write name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <div className="text-black">
          <p>{errors.firstName && "Name is required"}</p>
          <p> {errors.firma && "Firma is required"}</p>
          <p> {errors.zipcode && "Postleitzahl is required"}</p>
          <p> {errors.location && "Ort is required"}</p>
          <p> {errors.email && "Email is required"}</p>
          <p> {errors.phone && "Phone is required"}</p>
          <p> {errors.message && "Message is required"}</p>
        </div>
        <button
          type="submit"
          className="bg-blue-light hover:bg-blue-lighter text-white font-bold text-sm md:text-md w-32 md:w-96 h-10 disabled:bg-grey-light p-4 m-8 rounded-lg"
        >
          Unverbindlich und kostenlos anfragen
        </button>
      </form>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  //let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/magazin");
  let carsreviews = await getContent("carsreview", context.locale);
  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      carsreviews,
      blogs,
    },
  };
}

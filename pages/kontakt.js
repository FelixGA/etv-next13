import Head from "next/head";
import Image from "next/image";
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
    console.log("data", data);
  };

  const onError = (errors, e) => console.log("errors", errors, e);
  // const watchName = watch("firstName");
  return (
    <div className="flex flex-col items-center min-h-screen w-screen">
      <div className="pt-8 flex justify-center">
        <p className="text-2xl font-bold sm:w-[60%] text-center px-2">
          Erhalten Sie jetzt Ihr Angebot
          <span className="font-thin"> kostenlos und unverbindlich</span>
        </p>
      </div>
      {/* IMAGES */}
      <div className="flex justify-center items-center relative left-6">
        <div className="w-24">
          <Image
            src="/images/siegel2.png"
            width={166}
            height={166}
            layout="responsive"
            objectFit="contain"
          />
        </div>
        {/* medal dsvgo image */}
        <div className="w-44 relative left-4">
          <Image
            src="/images/siegel.png"
            width={166}
            height={166}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>
      <form
        /* action="/action_page.php" */
        action="https://api.vercel.com/v6/deployments"
        method="POST"
        onSubmit={handleSubmit(onSubmit, onError)}
        Content-Type="application/json"
        className="flex flex-col items-center justify-center border w-[90%]"
      >
        <div className="mb-4 flex justify-center flex-col w-full">
          <label for="name " className="text-blue-lighter font-bold ">
            Name:
          </label>
          <input
            {...register("firstName", {
              required: true,
              pattern: fullNameRegex,
            })}
            // onChange={(e) => SetGetName(e.target.value)}
            id="name"
            type="string"
            // name="name"
            title="write name"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block  appearance-none leading-normal"
          />
        </div>
        <div className="mb-4 ">
          <label for="firma" className="text-blue-lighter  font-bold py-2">
            Firma:
          </label>
          <input
            {...register("firma", { required: false })}
            // onChange={(e) => SetGetFirma(e.target.value)}
            id="firma"
            type="string"
            // name="name"
            title="write firma"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-72 appearance-none leading-normal"
          />
        </div>
        <div className="mb-4">
          <label for="locatio n" className="text-blue-lighter  font-bold py-2">
            Postleitzahl:
          </label>
          <input
            {...register("zipcode", {
              required: false,
            })}
            // onChange={(e) => SetGetPostNum(e.target.value)}
            id="zipcode"
            type="string"
            // name="zip code"
            title="zip code"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-72 appearance-none leading-normal"
          />
        </div>
        <div className="mb-4 ">
          <label for="Ort" className="text-blue-lighter  font-bold py-2">
            Ort:
          </label>

          <input
            {...register("city", { required: false })}
            // onChange={(e) => SetGetLocation(e.target.value)}
            id="city"
            type="string"
            // name="location"
            title="city"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-72 appearance-none leading-normal"
          />
        </div>
        <div className="mb-4">
          <label
            for="email-inpu t"
            className="text-blue-lighter  font-bold py-2"
          >
            Email:
          </label>
          <input
            {...register("email", { required: true, pattern: emailRegex })}
            // onChange={(e) => SetGetEmail(e.target.value)}
            id="email-input"
            type="email"
            // name="email-input"
            title="write proper e mail"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-72 appearance-none leading-normal"
          />
        </div>
        <div className="mb-4 ">
          <label for="phone" className="text-blue-lighter  font-bold py-2">
            Telefon:
          </label>
          <input
            {...register("phone", {
              required: false,
              pattern: phoneNumberRegex,
            })}
            // onChange={(e) => SetGetPhone(e.target.value)}
            id="phone"
            type="number"
            // name="phone"
            title="write proper e mail"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-72 appearance-none leading-normal"
          />
        </div>
        <div className="mb-4">
          <label for="message" className="text-blue-lighter  font-bold ">
            Nachricht
          </label>
          <textarea
            {...register("message", { required: false })}
            // onChange={(e) => SetGetMessage(e.target.value)}
            rows="4"
            id="message"
            type="text-area"
            // name="message"
            title="write name"
            className="bg-grey-lighter focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg block appearance-none leading-normal w-72"
          />
        </div>
        <div className="text-black">
          <p>{errors.firstName && "Name is required"}</p>
          <p> {errors.firma && "Firma is required"}</p>
          <p> {errors.zipcode && "Postleitzahl is required"}</p>
          <p> {errors.location && "Ort is required"}</p>
          <p> {errors.email && "Email is required"}</p>
          <p> {errors.phone && "Phone is required"}</p>
          <p> {errors.message && "Message is required"}</p>
        </div>
        <button type="submit" className="bg-yellow-light">
          Submit
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

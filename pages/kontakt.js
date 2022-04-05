import getContent from "/utils/getContent";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextInput from "../components/core/TextInput";
import Image from "next/image";
import TextArea from "../components/core/TextArea";

export default function kontakt(props) {
  const emailRegex = RegExp(
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  const fullNameRegex = RegExp(/^[a-zA-Z ]{2,30}$/);
  const phoneNumberRegex = RegExp(/^[0-9]{9,15}$/);
  const countryRegex = RegExp(/^[a-zA-Z ]{2,30}$/);

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
    console.log(data);

    //    try {
    //   const result = await axios.post(`/api/`, data);
    //   console.log(result);
    // } catch (err) {
    //   console.log("error", err.response.data.message);
    // }
  };

  const onError = (errors, e) => console.log("errors", errors, e);

  return (
    <div className="flex flex-col items-center ">
      <div className="pt-8 flex justify-center">
        <p className="text-2xl md:text-3xl font-bold sm:w-[60%] md:w-[80%] text-center px-4">
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
        <div className="w-32 sm:w-44 relative sm:left-4">
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
        content-type="application/json"
        className="flex flex-col items-center justify-center w-full"
      >
        <TextInput
          placeholder={"z.B. Max Muster"}
          register={register}
          label={"Name:"}
          id={"name"}
          type={"string"}
          pattern={fullNameRegex}
          registerData={"firstName"}
        />
        <TextInput
          placeholder={"ihr Firmenname"}
          register={register}
          label={"Firma:"}
          id={"firma"}
          type={"string"}
          registerData={"firma"}
        />
        <div className="flex justify-between w-64 xs:w-96">
          <TextInput
            width={"w-28 xs:w-44"}
            placeholder={"z.B. 10115"}
            register={register}
            label={"Postleitzahl:"}
            id={"zipcode"}
            type={"string"}
            registerData={"zipcode"}
          />
          <TextInput
            width={"w-28 xs:w-44"}
            placeholder={"z.B. Berlin"}
            register={register}
            label={"Ort:"}
            id={"city"}
            type={"string"}
            registerData={"city"}
          />
        </div>
        <TextInput
          placeholder={"z.B. max@muster.com"}
          register={register}
          label={"Email:"}
          id={"email-input"}
          type={"string"}
          registerData={"email-input"}
        />
        <TextInput
          placeholder={"z.B. 030 - 123 45 67"}
          register={register}
          label={"Telefon:"}
          id={"phone"}
          type={"number"}
          registerData={"phone"}
        />
        <TextArea
          placeholder={"z.B. 030 - 123 45 67"}
          register={register}
          label={"Nachricht:"}
          id={"message"}
          type={"textarea"}
          registerData={"message"}
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
          className="bg-blue-darker text-white h-auto w-64 xs:w-96 rounded-lg py-2 mb-0 sm:mb-8"
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

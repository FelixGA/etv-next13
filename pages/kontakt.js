import getContent from "/utils/getContent";
import { useForm } from "react-hook-form";
import axios from "axios";
import TextInput from "../components/core/TextInput";
import Image from "next/image";
import TextArea from "../components/core/TextArea";
import Form from "../components/repeated/Form";

export default function kontakt(props) {
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
      <Form
      // handleSubmit={handleSubmit}
      // register={register}
      // onSubmit={onSubmit}
      // onError={onError}
      // emailRegex={emailRegex}
      // fullNameRegex={fullNameRegex}
      // phoneNumberRegex={phoneNumberRegex}
      // countryRegex={countryRegex}
      />
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

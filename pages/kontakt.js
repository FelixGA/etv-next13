import Head from "next/head";
import getContent from "/utils/getContent";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Blog from "../components/Blog/Blog";

export default function kontakt(props) {
  const [getBlogs, SetGetBlogs] = useState(props.blogs);
  const [getName, SetGetName] = useState("");
  const [getEmail, SetGetEmail] = useState("");
  const [getMessage, SetGetMessage] = useState("");
  const [getFirma, SetGetFirma] = useState("");
  const [getLocation, SetGetLocation] = useState("");
  const [getPhone, SetGetPhone] = useState("");
  const [getPostNum, SetGetPostNum] = useState("");
  const [getData, SetGetData] = useState({});

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

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
  const onSubmit = (data) => console.log(data);
  // console.log(getData);
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <form
        /* action="/action_page.php" */
        action=" https://api.vercel.com/v6/deployments"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        Content-Type="application/json"
        className="flex flex-col items-center w-20 h-24"
      >
        <label for="name">Name:</label>
        <input
          {...register("firstName", { required: true, maxLength: 30 })}
          onChange={(e) => SetGetName(e.target.value)}
          id="name"
          type="string"
          name="name"
          // pattern={emailRegex}
          title="write name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />

        <label for="firma">Firma:</label>
        <input
          {...register("firma", { required: true })}
          onChange={(e) => SetGetFirma(e.target.value)}
          id="firma"
          type="string"
          name="name"
          // pattern={emailRegex}
          title="write name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="location">Postleitzahl:</label>
        <input
          onChange={(e) => SetGetPostNum(e.target.value)}
          id="location"
          type="string"
          name="location"
          // pattern={emailRegex}
          title="zip code"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="Ort">Ort:</label>

        <input
          onChange={(e) => SetGetLocation(e.target.value)}
          id="Ort"
          type="string"
          name="Ort"
          // pattern={emailRegex}
          title="zip code"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="email-input">email:</label>
        <input
          onChange={(e) => SetGetEmail(e.target.value)}
          id="email-input"
          type="email"
          name="email-input"
          // pattern={emailRegex}
          title="write proper e mail"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="phone">Telefon:</label>
        <input
          onChange={(e) => SetGetPhone(e.target.value)}
          id="phone"
          type="number"
          name="phone"
          // pattern={emailRegex}
          title="write proper e mail"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="message">message:</label>
        <input
          onChange={(e) => SetGetMessage(e.target.value)}
          id="message"
          type="text"
          name="message"
          // pattern={emailRegex}
          title="write name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />

        <button
          type="submit"
          className="bg-yellow-light"
          onClick={() => {
            SetGetData({
              name: getName,
              firma: getFirma,
              location: getLocation,
              email: getEmail,
              phone: getPhone,
              message: getMessage,
              postNum: getPostNum,
            });
            console.log(getData);
          }}
        >
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

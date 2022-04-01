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
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("data", data);
  };

  const onError = (errors, e) => console.log("errors", errors, e);
  const watchName = watch("firstName");

  // console.log(getData);
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <form
        /* action="/action_page.php" */
        action=" https://api.vercel.com/v6/deployments"
        method="POST"
        onSubmit={handleSubmit(onSubmit, onError)}
        Content-Type="application/json"
        className="flex flex-col items-center w-20 h-24"
      >
        <label for="name">Name:</label>
        <input
          {...register("firstName", { required: true })}
          // onChange={(e) => SetGetName(e.target.value)}
          id="name"
          type="string"
          // name="name"
          title="write name"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />

        <label for="firma">Firma:</label>
        <input
          {...register("firma", { required: true })}
          // onChange={(e) => SetGetFirma(e.target.value)}
          id="firma"
          type="string"
          // name="name"
          title="write firma"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="location">Postleitzahl:</label>
        <input
          {...register("zipcode", { required: true, pattern: /^[A-Za-z]+$/i })}
          // onChange={(e) => SetGetPostNum(e.target.value)}
          id="zipcode"
          type="string"
          // name="zip code"
          title="zip code"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="Ort">Ort:</label>

        <input
          {...register("location", { required: true })}
          // onChange={(e) => SetGetLocation(e.target.value)}
          id="location"
          type="string"
          // name="location"
          title="location"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="email-input">email:</label>
        <input
          {...register("email", { required: true })}
          // onChange={(e) => SetGetEmail(e.target.value)}
          id="email-input"
          type="email"
          // name="email-input"
          title="write proper e mail"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="phone">Telefon:</label>
        <input
          {...register("phone", { required: true })}
          // onChange={(e) => SetGetPhone(e.target.value)}
          id="phone"
          type="number"
          // name="phone"
          title="write proper e mail"
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />
        <label for="message">Nachricht (optional)</label>
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
          className="bg-yellow-light"
          onClick={() => {
            // SetGetData({
            //   name: getName,
            //   firma: getFirma,
            //   location: getLocation,
            //   email: getEmail,
            //   phone: getPhone,
            //   message: getMessage,
            //   postNum: getPostNum,
            // });
            // console.log(getData);
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

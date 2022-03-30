import Head from "next/head";
import getContent from "/utils/getContent";

import { useState } from "react";
import Blog from "../components/Blog/Blog";

export default function kontakt(props) {
  const [getBlogs, SetGetBlogs] = useState(props.blogs);
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  return (
    <div className="flex flex-col items-center">
      <form
        action="/action_page.php"
        className="flex flex-col items-center w-20 h-24"
      >
        <label for="email-input">email:</label>
        <input
          id="email-input"
          type="email"
          name="pswrd"
          pattern={emailRegex}
          title="write proper e mail"
          className="bg-white  focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-46 appearance-none leading-normal"
        />

        <button type="submit" className="bg-yellow-light">
          Submit
        </button>
      </form>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
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

import getContent from "/utils/getContent";
import { useState, useEffect } from "react";

import Image from "next/image";
import Form from "../components/repeated/Form";

export default function kontakt(props) {
  const [open, setOpen] = useState(true);
  const [getTestReviews, SetTestReviews] = useState(props.carsreviews);
  useEffect(() => {
    SetTestReviews(props.carsreviews);
  }, [props]);
  // const watchName = watch("firstName");

  return (
    // <div className="relative h-screen">
    <div className="flex flex-col items-center">
      <div className="">
        <Form open={open} setOpen={setOpen} />
      </div>
    </div>
    // </div>
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

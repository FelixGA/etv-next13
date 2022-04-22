import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Image from "next/image";
import Form from "../components/repeated/Form";
import Head from "../components/core/Head";
import { useRouter } from "next/router";
export default function kontakt(props) {
  const [open, setOpen] = useState(true);
  const [getTestReviews, SetTestReviews] = useState(props.carsreviews);
  const router = useRouter();
  useEffect(() => {
    SetTestReviews(props.carsreviews);
  }, [props]);

  return (
    <div className="relative flex flex-col items-center">
      <Head page={props.page} />

      <div className="flex">
        {router.pathname == "/kontakt" ? (
          <div className="flex flex-col lg:mb-36 sm:pt-8">
            <div className="hidden w-2/3 mb-12 lg:block">
              <Image
                src="/images/frage.jpeg"
                width={400}
                height={300}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <p
              className={
                router.pathname == "/kontakt" &&
                "text-md font-bold w-full text-left pt-4 pl-4 pr-4 lg:w-2/3 hidden lg:block"
              }
            >
              Haben Sie Fragen oder Anregungen zu unserer Webseite oder möchten
              uns etwas mitteilen? Dann nutzen Sie unser Kontaktformular für Ihr
              Anliegen!
            </p>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
        <Form open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  //let vehicles = await getContent("vehicles", context.locale);
  let blogs = await getContent("blogs", context.locale);
  const page = pages.find((page) => page.path === "/kontakt");
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

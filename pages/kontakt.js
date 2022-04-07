import getContent from "/utils/getContent";
import { useState ,useEffect } from "react";

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
// export default async function handler(request, response) {
//   const res = await fetch('https://vercel.com/team-ari-motor/elektrotransporter-vergleich/3zavYzjBWxvMY4iqowRdoVgkMi4D', {
//     method: 'POST',
//     body: JSON.stringify({
//       client_id: process.env.CLIENT_ID,
//       client_secret: process.env.CLIENT_SECRET,
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   const data = await res.json();
//   return response.status(200).json({ data });
// }

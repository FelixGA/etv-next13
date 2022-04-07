import getContent from "/utils/getContent";
import { useState } from "react";
import Form from "../components/repeated/Form";

export default function kontakt(props) {
  const [open, setOpen] = useState(true);

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

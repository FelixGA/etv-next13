import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { useState, useEffect } from "react";
import Funnel from "../components/Caradvisor/Funnel";
import Image from "next/image";
export default function caradvisor(props) {
  const [getCars, SetGetCars] = useState(props.vehicles);

  const [getTestReviews, SetTestReviews] = useState(props.carsreviews);
  useEffect(() => {
    SetTestReviews(props.carsreviews);
  }, [props]);
  return (
    <div className=" bg-blue-extralight">
      <Head page={props.page} />

      <Funnel getCars={getCars} />
      <div className="relative flex justify-between 2xl:h-36">
        {/* human image */}
        <div className="absolute bottom-0 right-0 hidden w-44 xl:w-64 2xl:w-96 2xl:right-6 2xl:block">
          <Image
            src="/images/beraterNew.png"
            width={450}
            height={600}
            layout="responsive"
          />
        </div>
      </div>
      <div className="items-center justify-around hidden h-12 bg-green-lighter lg:flex">
        <div className="">
          <p className="w-full text-base text-white lg:text-base 2xl:text-xl">
            ✔️ über 10 Jahre Erfahrung mit KFZ
          </p>
        </div>
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ 500+ verkaufte Transporter seit 2019
          </p>
        </div>
        <div className="">
          <p className="w-full text-lg text-white 2xl:text-xl">
            ✔️ unverbindliches Angebot in 24 Stunden
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full px-4 bg-white xl:px-40 md:flex-row justify-evenly">
        <div className="w-full px-2 py-4">
          <div className="w-full border shadow-lg ">
            <Image
              src="/images/ETV-IconsWunschfahrzeug.png"
              width={300}
              height={300}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h3 className="pt-2 sm:h-16 2xl:h-8 lg:text-2xl xl:text-2xl">
            1. Wunschfahrzeug konfigurieren
          </h3>
          <p className="h-48 xl:pt-4">
            Geben Sie in 3 Schritten die Anforderungen für Ihren
            Elektrotransporter an: Aufbauart, Reichweite und Zuladung!
            Anschließend erhalten Sie eine Übersicht über für Sie geeignete
            Fahrzeuge.
          </p>
        </div>
        <div className="w-full px-2 py-4">
          <div className="w-full border shadow-lg ">
            <Image
              src="/images/ETV-IconsVergleichen.png"
              width={300}
              height={300}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h3 className="pt-2 sm:h-16 2xl:h-8 lg:text-2xl">
            2. Vorgeschlagene Fahrzeuge vergleichen
          </h3>
          <p className="h-48 xl:pt-4 ">
            Vergleichen Sie in Ruhe die vorgeschlagenen Elektrotransporter. In
            der Übersicht finden Sie alle Daten sowie die Preise der für Sie
            geeigneten Fahrzeuge.
          </p>
        </div>
        <div className="w-full px-2 py-4">
          <div className="w-full border shadow-lg">
            <Image
              src="/images/ETV-IconsAngebote.png"
              width={300}
              height={300}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <h3 className="pt-2 sm:h-16 2xl:h-8 lg:text-2xl">
            3. Kostenloses Angebot erhalten
          </h3>
          <p className="h-48 xl:pt-4">
            Erhalten Sie ein unverbindliches und vollkommen kostenloses Angebot
            für das von Ihnen gewählte Fahrzeug. Dieses wird Ihnen ganz einfach
            per Mail zugesandt.
          </p>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  const posts = await getContent("posts", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  const page = pages.find((page) => page.path === "/caradvisor");
  let carsreviews = await getContent("carsreview", context.locale);

  if (!pages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicles,
      posts,
      page,
      carsreviews,
    },
  };
}

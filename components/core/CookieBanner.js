import Link from "next/link";
import useIdb from "/hooks/useIdb";
// import { enableTracking } from "@phntms/next-gtm";
import Button1 from "/components/core/Button1";

export default function CookieBanner(props) {
  const [cookiesAccepted, setCookiesAccepted] = useIdb(
    "cookiesAccepted",
    null
  );
  console.log(cookiesAccepted);

  return (
    <div className="fixed bottom-0 flex flex-wrap lg:flex-nowrap bg-neutral-400 p-4 lg:px-16">
      <div className="flex flex-col justify-center">
        <p className="text-xl text-white font-black my-4">
          Einverständniserklärung
        </p>
        <p className="text-white">
          ARI Motors braucht für einzelne Datennutzungen Deine Einwilligung, um
          Dein Nutzererlebnis zu verbessern. Mit Klick auf "Akzeptieren" gibst
          Du diese Einwilligung. Um abzulehnen, klicke <span onClick={(e) => {
            setCookiesAccepted(false);
          }}>hier</span>. Unsere Datenschutzerklärung findest Du
          <Link href="/dataprotection">
            <a className="font-bold"> hier.</a>
          </Link>
        </p>
        <div className="flex gap-4 self-end">

        {/* <Button1
          className="self-end w-full lg:w-52 mt-2"
          name="decline"
          onClick={(e) => {
            setCookiesAccepted(false);
          }}
        >
          Ablehnen
        </Button1> */}
        <Button1
          className="mt-2 bg-yellow-300 text-black"
          name="accept"
          onClick={(e) => {
            setCookiesAccepted(true);
            // enableTracking("GTM-TQRQV32", true);
            window.location.reload(false)
          }}
        >
          Akzeptieren
        </Button1>
        </div>

      </div>
    </div>
  );
}

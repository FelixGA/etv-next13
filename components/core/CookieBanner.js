import { useTransition, useEffect, useState } from "react";
import Link from "next/link";
import useIdb from "/hooks/useIdb";
// import { enableTracking } from "@phntms/next-gtm";
import Button1 from "/components/core/Button1";
import { setCookie, hasCookie } from 'cookies-next';

export default function CookieBanner(props) {
  // const [startTransition, isPending] = useTransition({ timeoutMs: 3000 });

  const [consent, setConsent] = useState(true);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
    console.log('accepting cookies');
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
    console.log('denying cookies');
  };
  if (consent === true) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full justify-center flex flex-wrap lg:flex-nowrap bg-neutral-400 p-4 lg:px-16">
      <div className="flex flex-col justify-center">
        <p className="text-xl text-white font-black my-4">
          Einverständniserklärung
        </p>
        <p className="text-white">
          ARI Motors braucht für einzelne Datennutzungen Deine Einwilligung, um
          Dein Nutzererlebnis zu verbessern. Mit Klick auf "Akzeptieren" gibst
          Du diese Einwilligung. Unsere Datenschutzerklärung findest Du
          <Link href="/dataprotection">
            <a className="font-bold"> hier.</a>
          </Link>
        </p>
        <div className="flex gap-4 self-end">

        <a
          className="self-end w-full font-bold hover:cursor-pointer lg:w-52 mr-4"
          name="decline"
          onClick={(e) => {
            denyCookie();
          }}
        >
          Ablehnen
        </a>
        <Button1
          className="mt-2 bg-yellow-300 text-black"
          name="accept"
          onClick={(e) => {
            acceptCookie();
          }}
        >
          Akzeptieren
        </Button1>
        </div>

      </div>
    </div>
  );
}

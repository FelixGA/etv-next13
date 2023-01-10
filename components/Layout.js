import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import dynamic from "next/dynamic";
import { useStore } from "../components/store";
import { useState, useEffect, Suspense } from "react";
import useIdb from "/hooks/useIdb";

const CookieBanner = dynamic(() => import("/components/core/CookieBanner"), {
  suspense: true,
});

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [brands, setBrands] = useState(props.brands);
  const { state, dispatch } = useStore();
  const [cookiesAccepted, setCookiesAccepted] = useIdb(
    "cookiesAccepted",
    null
  );
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setBrands(props.brands);
    setValueFromUseEffect(props.brands);
    setBlogs(props.blogs);
  }, [props, valueFromUseEffect]);

  return (

    <div
      className={
        state?.mobileNavActives
          ? "overflow-hidden max-h-screen relative"
          : "relative"
      }
    >
      <Header />

      <main>
        {props.children}
        <Suspense>{cookiesAccepted === null && <CookieBanner />}</Suspense>
        </main>
      <Footer blogs={blogs} brands={brands} />
    </div>
  );
}
export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);

  let vehicles = await getContent("vehicles", context.locale);
  let brands = await getContent("brands", context.locale);
  // let page = await getContent("pages", context.locale);
  return {
    props: {
      brands,
      blogs,
      params: context.params,
      vehicles,
    },
  };
}

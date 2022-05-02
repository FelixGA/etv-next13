import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import Form from "./repeated/Form";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [reviews, setReviews] = useState(props.carsreviews);

  const [brands, setBrands] = useState(props.brands);
  const { state, dispatch } = useStore();
  // const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  useEffect(() => {
    setBrands(props.brands);
    setReviews(props.carsreviews);
    setBlogs(props.blogs);
  }, [props]);

  return (
    <div
      className={
        state?.mobileNavActives
          ? "overflow-hidden max-h-screen relative"
          : "relative"
      }
    >
      <Header />

      <main>{props.children}</main>
      <Footer blogs={blogs} reviews={reviews} brands={brands} />
    </div>
  );
}
export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);
  let vehicles = await getContent("vehicles", context.locale);
  let brands = await getContent("brands", context.locale);

  return {
    props: {
      brands,
      blogs,
      carsreviews,
      params: context.params,
      vehicles,
    },
  };
}

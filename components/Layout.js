import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [reviews, setReviews] = useState(props.carsreviews);
  const { state, dispatch } = useStore();
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);

  useEffect(() => {
    setValueFromUseEffect(props.params);
    setBlogs(props.blogs);
  }, [props]);

  return (
    <div
      className={state?.mobileNavActives ? "overflow-hidden max-h-screen" : ""}
    >
      <Header />
      <main>{props.children}</main>
      <Footer blogs={blogs} reviews={reviews} />
    </div>
  );
}
export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);

  return {
    props: {
      blogs,
      carsreviews,
      params: context.params,
    },
  };
}

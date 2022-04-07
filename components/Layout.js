import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useStore } from "../components/store";
import { useState, useEffect } from "react";
import Form from "./repeated/Form";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [reviews, setReviews] = useState(props.carsreviews);
  const { state, dispatch } = useStore();
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);
  const [openForm, setOpenForm] = useState(false);

  useEffect(() => {
    setValueFromUseEffect(props.params);
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
      {/* {openForm && ( */}
      {/* <div className="relative top-20 left-20 ">
        <Form />
      </div> */}
      {/* )} */}
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

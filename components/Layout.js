import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  const [valueFromUseEffect, setValueFromUseEffect] = useState(null);

  useEffect(() => {
    setValueFromUseEffect(props.params);
    setBlogs(props.blogs);
  }, [props]);

  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer blogs={blogs} />
    </>
  );
}
export async function getStaticProps(context) {
  let blogs = await getContent("blogs", context.locale);

  return {
    props: {
      blogs,
      params: context.params,
    },
  };
}

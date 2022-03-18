import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function Layout(props) {
  const [blogs, setBlogs] = useState(props.blogs);
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer blogs={blogs} />
    </>
  );
}

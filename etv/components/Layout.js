import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
export default function Layout(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </>
  );
}

import { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer.js";

export default function Layout(props) {
  return (
    <>
      <div>
        <Header />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}

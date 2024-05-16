import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      {/* <main>
        <Outlet /> {/* This renders the matching child route */}
      {/* </main>
      <Footer /> */}
    </>
  );
};

export default App;

import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Review from "../components/Review";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <About />
      <Review />
    </>
  );
};

export default Home;

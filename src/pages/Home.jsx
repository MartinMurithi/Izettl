import React from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import AboutSection from "../components/about/AboutSection";
import Product from "../components/product section/Product";
import ContactUs from "../components/contact us/ContactUs";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <Product />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;

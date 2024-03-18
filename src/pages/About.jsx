import React from 'react'
import NavBar from '../components/navbar/NavBar';
import AboutUsHeader from '../components/about us header/AboutUsHeader';
import Values from '../components/our values/Values';
import Challenge from '../components/challenge and impact/Challenge';
import Footer from "../components/footer/Footer";
import ClientProfile from '../components/client profile/ClientProfile';

function About() {
  return (
    <div>
      <NavBar />
      <AboutUsHeader />
      <Values />
      <ClientProfile />
      <Challenge />
      <Footer />
    </div>
  )
}

export default About

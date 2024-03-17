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

// Hero Section:

// Welcome Message: The hero section is the first thing visitors see when they land on the Home Page. It should feature a welcoming message that encapsulates the company's mission and vision, such as:
// "Welcome to Izettl - Empowering Farmers and Micro-Businesses to Prosper"
// Mission and Vision: A concise statement highlighting the company's purpose and vision could be displayed prominently here:
// "Our Mission: To enhance financial inclusion and unlock prosperity for smallholder farmers and micro-businesses."
// "Our Vision: To be the preferred financial partner for farmers and micro-entrepreneurs in Africa and beyond."
// About Us:

// Brief Overview: Below the hero section, provide a brief overview of the company's purpose and values:
// "At Izettl, we believe in leveraging financial inclusion to drive positive change. We are committed to empowering smallholder farmers and micro-businesses by providing accessible and innovative financial solutions."

// Featured Products:

// Highlight MBESSA and KUZA MO with brief descriptions and images:
// MBESSA: "MBESSA - Unlocking Opportunities for Micro-Businesses. Access quick and easy loans ranging from Kenya shillings 3,000 to 20,000 to cover critical expenses."
// KUZA MO: "KUZA MO - Empowering Farmers for Success. Secure financing between Kenya shillings 3,000 to 30,000 for farm inputs and seeds with flexible payment cycles."

// Market Reach:

// Mention the company's customer base and geographical reach:
// "With over 1000 customers spread across major towns and remote parts of the country, Izettl is reaching underserved communities and making a meaningful impact."

// Call-to-Action (CTA):

// Encourage visitors to explore products or contact for more information:
// "Ready to take your business to the next level? Explore our products or contact us to learn more about how we can help you thrive."

// Footer:

// Include navigation links, contact information, and social media icons:
// Navigation Links: About Us, Products, Impact, Contact
// Contact Information: Phone number, email address, physical address
// Social Media Icons: Links to the company's social media profiles for further engagement.

import React from "react";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import ProductsSection from "./components/ProductsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import DashboardPreview from "./components/DashboardPreview";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      <Header/>
      <Navbar/>
      <Hero />
      <TrustedCompanies />
      <ProductsSection />
      <WhyChooseUs />
      <DashboardPreview />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;

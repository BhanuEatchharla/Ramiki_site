'use client';
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Management } from "../components/Management";
import { PreFooter } from "../components/PreFooter";
import { Contact } from "../components/Contact";
import { Map } from "../components/Map";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import {  ScrollToTop } from "../components/ScrollToTop"; 
// import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const Index = () => {
 useEffect(() => {
    // Always force scroll to top on refresh / direct load
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    // Clean URL (remove hash if present)
    if (window.location.hash) {
      history.replaceState(null, "", "/");
    }
  }, []);


  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Management />
        <PreFooter />
        <Contact />
        <Map />
        {/* <Careers /> */}
        {/* <CEOProfile /> */}
      </main>
      <Footer />
      <ScrollToTop/>
    </div>
  );
};

export default Index;

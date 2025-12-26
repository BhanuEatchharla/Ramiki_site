"use client";

import { useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Management } from "../components/Management";
import { PreFooter } from "../components/PreFooter";
import { Contact } from "../components/Contact";
import { Map } from "../components/Map";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function Index() {
  useEffect(() => {
    // Always start at top
    window.scrollTo({ top: 0, left: 0 });

    // Remove hash if exists
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
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

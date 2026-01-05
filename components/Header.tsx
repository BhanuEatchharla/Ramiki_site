"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../public/logo.png";

const products = [
  { name: "Tofa", href: "/#products" },
  { name: "Utrack", href: "/#products" },
];

const navItems = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "/#about", isRoute: false },
  { name: "CEO Profile", href: "/ceoprofile", isRoute: true },
  { name: "Management", href: "/#management", isRoute: false },
  { name: "Products", href: "/#products", hasDropdown: true, isRoute: false },
  { name: "Careers", href: "/careers", isRoute: true },
  { name: "Contact Us", href: "/#contact", isRoute: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* ===== Scroll background ===== */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== Navigation handler ===== */
  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (attempts < 20) {
        attempts += 1;
        requestAnimationFrame(tryScroll);
      }
    };

    tryScroll();
  };

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);

    if (isRoute) {
      if (href === "/" && pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(href);
      }
      return;
    }

    const [, hash] = href.split("#");
    if (!hash) return;

    if (pathname !== "/") {
      router.push("/");
      requestAnimationFrame(() => scrollToHash(`#${hash}`));
      return;
    }

    scrollToHash(`#${hash}`);
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="
        sticky top-0 z-[100]
        transition-all duration-300
        bg-white
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* ===== LOGO ===== */}
          <button
            onClick={() => handleNavClick("/", true)}
            className="flex items-center gap-3 cursor-pointer focus:outline-none"
            aria-label="Go to home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
              <Image src={Logo} alt="Logo" width={24} height={24} />
            </div>
            <div className="leading-tight text-left">
              <span className="block text-3xl font-bold text-blue-900">
                Ramki
              </span>
              <span className="block text-base text-red-600">
                Technologies
              </span>
            </div>
          </button>

          {/* ===== DESKTOP NAV ===== */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsProductsOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsProductsOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(item.href, item.isRoute)}
                  className="
                    px-3 py-2 text-sm font-medium
                    text-slate-700
                    hover:text-blue-600
                    transition-colors
                    cursor-pointer
                  "
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="inline-block ml-1 h-4 w-4" />
                  )}
                </button>

                {/* ===== PRODUCTS DROPDOWN ===== */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="
                          absolute left-0 top-full mt-3 w-56
                          rounded-xl overflow-hidden
                          bg-white/95
                          backdrop-blur
                          border border-slate-200
                          shadow-xl
                        "
                      >
                        {products.map((product) => (
                          <button
                            key={product.name}
                            onClick={() => handleNavClick(product.href, false)}
                            className="
                              w-full px-4 py-3 text-left text-sm font-medium
                              text-slate-700
                              hover:text-white
                              hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500
                              transition-colors
                              cursor-pointer
                            "
                          >
                            {product.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* ===== MOBILE MENU TOGGLE ===== */}
          <button
            className="lg:hidden p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200"
          >
            <nav className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item.href, item.isRoute);
                    setIsMobileMenuOpen(false);
                  }}
                  className="
                    block w-full text-left px-3 py-2 text-sm font-medium
                    text-slate-700
                    hover:text-blue-600
                    transition-colors
                    cursor-pointer
                  "
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

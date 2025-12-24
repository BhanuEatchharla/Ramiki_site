'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Navigation,
  Truck,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";

/* ================= COLOR MAP (SAFE) ================= */
const colorMap = {
  blue: {
    card: "bg-blue-50 dark:bg-blue-950",
    icon: "bg-blue-600",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-200 dark:border-blue-800",
    buttonHover: "hover:bg-blue-600 hover:text-white",
  },
  amber: {
    card: "bg-amber-50 dark:bg-amber-950",
    icon: "bg-amber-600",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-800",
    buttonHover: "hover:bg-amber-600 hover:text-white",
  },
};

const products = [
  {
    icon: Navigation,
    name: "Tofa",
    tagline: "Vehicle Trip Management",
    description:
      "Real-time GPS tracking with analytics, route optimization, and reports.",
    features: ["Live Tracking", "Geo-fence", "Reports"],
    accent: "blue" as const,
  },
  {
    icon: Truck,
    name: "Utrack",
    tagline: "Vehicle Management System",
    description:
      "Supply chain and logistics tracking with real-time insights.",
    features: ["Logistics", "Tracking", "Insights"],
    accent: "amber" as const,
  },
];

export const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="products"
      className="
        relative w-full py-32
        bg-gradient-to-b
        from-blue-50 via-white to-teal-50
        dark:from-[#0B1220] dark:via-[#0E1628] dark:to-[#0B1220]
      "
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Our Products
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Pragati
            </span>{" "}
            Suite
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Purpose-built products designed for efficiency and growth.
          </p>
        </motion.div>

        {/* ===== PRODUCTS GRID ===== */}
        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((product, index) => {
            const colors = colorMap[product.accent];
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  rounded-xl p-5
                  ${colors.card}
                  border ${colors.border}
                  transition-all
                `}
              >
                {/* ICON */}
                <div className={`w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center ${colors.icon}`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-center text-slate-900 dark:text-white">
                  {product.name}
                </h3>
                <p className={`text-sm text-center font-medium mb-2 ${colors.text}`}>
                  {product.tagline}
                </p>

                <p className="text-sm text-center text-slate-600 dark:text-slate-400 mb-3">
                  {product.description}
                </p>

                {/* DROPDOWN TOGGLE */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-center gap-1 text-sm font-medium mx-auto mb-3 text-slate-700 dark:text-slate-300"
                >
                  View Features
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* DROPDOWN CONTENT */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-4"
                  >
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 rounded-md bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>
                )}

                {/* CTA BUTTON */}
                <Button
                  variant="outline"
                  className={`
                    w-full rounded-md
                    border ${colors.border}
                    ${colors.buttonHover}
                    transition-colors
                  `}
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};

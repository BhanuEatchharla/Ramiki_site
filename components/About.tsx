'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Lightbulb, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Deliver innovative technology solutions that help businesses scale efficiently.",
    gradient:
      "from-blue-500/20 to-cyan-400/20 dark:from-blue-600/30 dark:to-cyan-500/20",
    iconBg: "bg-blue-600",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Be the most trusted technology partner by setting quality benchmarks.",
    gradient:
      "from-indigo-500/20 to-violet-400/20 dark:from-indigo-600/30 dark:to-violet-500/20",
    iconBg: "bg-indigo-600",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Integrity, innovation, and customer-first thinking guide everything.",
    gradient:
      "from-teal-500/20 to-emerald-400/20 dark:from-teal-600/30 dark:to-emerald-500/20",
    iconBg: "bg-teal-600",
  },
];

const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Future-ready solutions built with modern technology",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "24/7 support with enterprise-grade stability",
    color: "indigo",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Long-term collaboration built on trust",
    color: "teal",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="about"
      className="
        relative w-full py-22
        bg-gradient-to-b
        from-blue-50 via-white to-teal-50
        dark:from-[#0B1220] dark:via-[#0E1628] dark:to-[#0B1F1A]
      "
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Driving Innovation Since{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              2018
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Ramki Technologies delivers scalable, reliable, and modern technology
            solutions across industries.
          </p>
        </motion.div>

        {/* ===== VALUES ===== */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`
                rounded-xl p-5
                bg-gradient-to-br ${item.gradient}
                border border-white/40 dark:border-white/10
                backdrop-blur
              `}
            >
              <div
                className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center mb-4`}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== STORY + FEATURES ===== */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              A Legacy of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3">
              Founded in 2018, Ramki Technologies has grown into a trusted
              technology partner across logistics, retail, security, and
              digital services.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Our Pragati product line delivers proven performance in vehicle
              tracking, shop management, and security systems.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.35, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`
                  rounded-xl p-4 text-center
                  bg-${feature.color}-50 dark:bg-${feature.color}-950
                  border border-${feature.color}-200 dark:border-${feature.color}-800
                `}
              >
                <div
                  className={`w-9 h-9 mx-auto mb-2 rounded-md bg-${feature.color}-600 flex items-center justify-center`}
                >
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className={`text-sm font-semibold text-${feature.color}-700 dark:text-${feature.color}-300 mb-1`}>
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

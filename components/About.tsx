'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, Lightbulb, Shield, Users } from "lucide-react";

/* ================= VALUES ================= */
const values = [
  {
    icon: Target,
    title: "Mission",
    description:
      "Deliver innovative technology solutions that help businesses scale efficiently.",
    card:
      "from-blue-500/30 to-cyan-400/30 dark:from-blue-600/40 dark:to-cyan-500/30",
    iconBg: "bg-blue-600",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "Be the most trusted technology partner by setting quality benchmarks.",
    card:
      "from-indigo-500/30 to-violet-400/30 dark:from-indigo-600/40 dark:to-violet-500/30",
    iconBg: "bg-indigo-600",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Integrity, innovation, and customer-first thinking guide everything.",
    card:
      "from-teal-500/30 to-emerald-400/30 dark:from-teal-600/40 dark:to-emerald-500/30",
    iconBg: "bg-emerald-600",
  },
];

/* ================= FEATURES ================= */
const features = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Future-ready solutions built with modern technology",
    card: "from-sky-500/30 to-blue-500/30",
    iconBg: "bg-sky-600",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "24/7 support with enterprise-grade stability",
    card: "from-purple-500/30 to-indigo-500/30",
    iconBg: "bg-purple-600",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Long-term collaboration built on trust",
    card: "from-teal-500/30 to-emerald-500/30",
    iconBg: "bg-teal-600",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="
        relative w-full
        py-16 sm:py-18
        bg-gradient-to-br
        from-blue-100 via-white to-teal-100
        dark:from-[#0B1220] dark:via-[#0E1628] dark:to-[#06231E]
      "
    >
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ========= HEADER ========= */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Driving Innovation Since{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              2018
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Ramki Technologies delivers scalable, reliable, and modern technology solutions.
          </p>
        </motion.div>

        {/* ========= VALUES ========= */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`
                rounded-xl p-5
                bg-gradient-to-br ${item.card}
                border border-white/40 dark:border-white/10
                backdrop-blur
              `}
            >
              <div className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center mb-3`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ========= STORY + FEATURES ========= */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              A Legacy of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-2">
              Founded in 2018, Ramki Technologies has grown into a trusted technology partner.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Our Pragati product line delivers proven performance across industries.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className={`
                  rounded-xl p-4 text-center
                  bg-gradient-to-br ${feature.card}
                  border border-white/40 dark:border-white/10
                `}
              >
                <div className={`w-9 h-9 mx-auto mb-2 rounded-md ${feature.iconBg} flex items-center justify-center`}>
                  <feature.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-700 dark:text-slate-400">
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

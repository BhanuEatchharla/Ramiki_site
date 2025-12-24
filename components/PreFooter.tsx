'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartHandshake, Zap, Clock, Award } from "lucide-react";

/* ================= DATA ================= */
const highlights = [
  {
    icon: HeartHandshake,
    title: "Trusted Partnership",
    description: "Long-term relationships built on transparency and commitment.",
    gradient:
      "from-blue-500/90 via-indigo-500/90 to-blue-600/90",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Future-ready solutions powered by modern technology.",
    gradient:
      "from-emerald-500/90 via-teal-500/90 to-emerald-600/90",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always-on technical support for uninterrupted operations.",
    gradient:
      "from-amber-500/90 via-orange-500/90 to-amber-600/90",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "ISO-certified processes ensuring enterprise-grade quality.",
    gradient:
      "from-violet-500/90 via-purple-500/90 to-violet-600/90",
  },
];

/* ================= SECTION ================= */
export const PreFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="
        min-h-screen flex items-center
        bg-gradient-to-br
        from-slate-50 via-blue-50 to-emerald-50
        dark:from-[#0B1220] dark:via-[#0E1628] dark:to-[#0B1220]
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Why Choose <span className="gradient-text">Ramki Technologies</span>?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Built for reliability, innovation, and long-term success.
          </p>
        </motion.div>

        {/* ===== AUTO MOVING GRID ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            animate={{ x: [0, -32, 0] }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
            "
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.06, y: -6 }}
                transition={{ type: "spring", stiffness: 180, damping: 16 }}
                className={`
                  relative rounded-2xl p-6
                  bg-gradient-to-br ${item.gradient}
                  shadow-xl
                  text-white
                  overflow-hidden
                `}
              >
                {/* Soft glow */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/90">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

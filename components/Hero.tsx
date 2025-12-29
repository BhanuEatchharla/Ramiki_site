'use client';

import { motion } from "framer-motion";
import { ArrowRight, Zap, Users, Headset, Award } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const stats = [
    { label: "Products", value: "6+", icon: <Zap className="w-4 h-4" />, color: "from-cyan-400 to-blue-500", glow: "shadow-cyan-500/50" },
    { label: "Clients", value: "500+", icon: <Users className="w-4 h-4" />, color: "from-blue-500 to-indigo-600", glow: "shadow-blue-500/50" },
    { label: "Support", value: "24/7", icon: <Headset className="w-4 h-4" />, color: "from-emerald-400 to-green-500", glow: "shadow-emerald-500/50" },
    { label: "Experience", value: "5+", icon: <Award className="w-4 h-4" />, color: "from-orange-400 to-red-500", glow: "shadow-orange-500/50" },
  ];

  return (
    <section
      id="home"
      className="
        relative w-full
        min-h-[100svh]
        flex items-center justify-center
        overflow-hidden
        bg-[#020617] text-white
      "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-[spin_40s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,#3b82f6_10%,transparent_20%,#10b981_40%,transparent_50%,#f59e0b_70%,transparent_80%)] blur-[120px]" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center gap-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400">
            Trusted Partner Since 2018
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            font-black tracking-tight leading-tight
            text-[clamp(2rem,6vw,4.25rem)]
          "
        >
          Commitment Towards <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
            Work & Promise
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            max-w-xl
            text-slate-400
            text-sm sm:text-base
            leading-relaxed
          "
        >
          Next-generation technology for visionary companies.
          We engineer scalable infrastructure and seamless digital experiences.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button className="h-10 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 font-semibold shadow-lg">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="h-10 px-5 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + idx * 0.08 }}
              className={`
                p-4 rounded-2xl
                border border-white/5
                bg-gradient-to-br ${stat.color}
                bg-opacity-10 backdrop-blur-xl
                shadow-xl ${stat.glow}
              `}
            >
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-black">
                  {stat.value}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] opacity-70">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

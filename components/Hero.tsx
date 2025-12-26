'use client';

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br
        from-blue-500 via-white to-teal-500
        dark:from-[#4a679e] dark:via-[#222b3f] dark:to-[#23332f]
      "
    >
      {/* subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent dark:via-black/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            inline-flex items-center gap-2 px-5 py-2 mb-8
            rounded-full border
            bg-white/80 dark:bg-slate-900/80
            border-slate-200 dark:border-slate-700
            backdrop-blur
          "
        >
          <span className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            Since 2018 • Trusted Technology Partner
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            font-bold tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            text-slate-900 dark:text-white
          "
        >
          Commitment Towards
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-teal-500 bg-clip-text text-transparent">
            Our Work & Promise
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            mt-6 max-w-3xl mx-auto
            text-lg sm:text-xl
            text-slate-600 dark:text-slate-400
          "
        >
          We build secure, scalable, and future-ready technology solutions
          for businesses across industries.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="
              px-8 py-6 text-lg rounded-full
              bg-gradient-to-r from-blue-600 to-teal-500
              text-white shadow-lg hover:shadow-xl
            "
          >
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="
              px-8 py-6 text-lg rounded-full
              bg-white/70 dark:bg-slate-900/70
              border-slate-300 dark:border-slate-700
              backdrop-blur
            "
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Card 1 */}
          <div className="rounded-xl p-6
            bg-gradient-to-br from-blue-100 to-blue-50
            dark:from-blue-950 dark:to-blue-900
            border border-blue-200 dark:border-blue-800">
            <div className="text-3xl font-bold text-blue-700 dark:text-blue-300">6+</div>
            <div className="mt-1 text-sm text-blue-700/70 dark:text-blue-300/70">
              Products
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-6
            bg-gradient-to-br from-indigo-100 to-indigo-50
            dark:from-indigo-950 dark:to-indigo-900
            border border-indigo-200 dark:border-indigo-800">
            <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">500+</div>
            <div className="mt-1 text-sm text-indigo-700/70 dark:text-indigo-300/70">
              Clients
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-6
            bg-gradient-to-br from-teal-100 to-teal-50
            dark:from-teal-950 dark:to-teal-900
            border border-teal-200 dark:border-teal-800">
            <div className="text-3xl font-bold text-teal-700 dark:text-teal-300">24/7</div>
            <div className="mt-1 text-sm text-teal-700/70 dark:text-teal-300/70">
              Support
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl p-6
            bg-gradient-to-br from-violet-100 to-violet-50
            dark:from-violet-950 dark:to-violet-900
            border border-violet-200 dark:border-violet-800">
            <div className="text-3xl font-bold text-violet-700 dark:text-violet-300">5+</div>
            <div className="mt-1 text-sm text-violet-700/70 dark:text-violet-300/70">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="
            w-6 h-10 rounded-full border
            border-slate-400 dark:border-slate-600
            flex items-start justify-center p-2
          "
        >
          <div className="w-1.5 h-3 rounded-full bg-slate-600 dark:bg-slate-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};

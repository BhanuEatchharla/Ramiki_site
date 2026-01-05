"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";

import ramkisir from "@/public/ramkisir.jpg";
import ceo from "@/public/ceo2.jpg";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

/* ---------------- ACHIEVEMENTS ---------------- */
const achievements = [
  {
    icon: Briefcase,
    title: "27+ Years",
    description: "Global IT Industry Experience",
  },
  {
    icon: GraduationCap,
    title: "Master’s in AI",
    description: "Artificial Intelligence",
  },
  {
    icon: Target,
    title: "Global Exposure",
    description: "APAC & North America",
  },
  {
    icon: Users,
    title: "Founder",
    description: "Ramki Technologies",
  },
];

/* ---------------- DYNAMIC GRADIENT STYLES ---------------- */
const achievementStyles = [
  {
    card:
      "bg-gradient-to-br from-blue-400/30 to-indigo-400/30 dark:from-blue-900/40 dark:to-indigo-900/40",
    icon: "bg-gradient-to-br from-blue-600 to-indigo-600",
  },
  {
    card:
      "bg-gradient-to-br from-emerald-400/30 to-teal-400/30 dark:from-emerald-900/40 dark:to-teal-900/40",
    icon: "bg-gradient-to-br from-emerald-600 to-teal-600",
  },
  {
    card:
      "bg-gradient-to-br from-amber-400/30 to-orange-400/30 dark:from-amber-900/40 dark:to-orange-900/40",
    icon: "bg-gradient-to-br from-amber-600 to-orange-600",
  },
  {
    card:
      "bg-gradient-to-br from-violet-400/30 to-purple-400/30 dark:from-violet-900/40 dark:to-purple-900/40",
    icon: "bg-gradient-to-br from-violet-600 to-purple-600",
  },
];

/* ---------------- BIO CONTENT ---------------- */
const shortBio = `
Mr. Sriramakrishna Dendukuri is the Founder of Ramki Technologies Pvt Ltd.
He holds a Master’s degree in Artificial Intelligence and has over 27 years
of global IT experience across APAC and North America.
`;

const fullBio = `
He has worked with multinational organizations such as HP & Gateway.

Ramki Technologies has developed and deployed multiple successful
software products including Pragati VTS, Pragati HR, Hospital Management Systems,
Pragati DBA, Pragati Project Management, and more.

As CEO, his vision is to build inspirational technology solutions that
contribute positively to humanity as a whole.
`;

export default function CEOProfile() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ================= HERO ================= */}
      <section className="pt-11 pb-12">
        <div className="container mx-auto px-4">
          <div className="relative h-[75vh] sm:h-[80vh] min-h-[560px] overflow-hidden rounded-3xl">
            <Image
              src={ceo}
              alt="CEO Leadership"
              fill
              priority
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <span className="text-sm uppercase tracking-wider text-slate-300">
                  Leadership
                </span>

                <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  Sriramakrishna Dendukuri
                </h1>

                <p className="mt-3 text-base sm:text-lg text-slate-200">
                  Chairman & Managing Director, Ramki Group
                </p>

                <a
                  href="mailto:ramki@ramkigroup.com"
                  className="mt-5 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                >
                  <Mail className="w-5 h-5" />
                  ramki@ramkigroup.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="py-14 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-slate-800">
                <Image
                  src={ramkisir}
                  alt="CEO"
                  width={260}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>

            {/* BIO */}
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">
                About Mr. Ramki
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {shortBio}
              </p>

              {expanded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-muted-foreground leading-relaxed"
                >
                  {fullBio}
                </motion.p>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="
                  mt-4 inline-flex items-center gap-2
                  px-4 py-2 rounded-md
                  bg-blue-600 hover:bg-blue-700
                  text-sm font-medium text-white
                "
              >
                {expanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="py-14 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {achievements.map((item, index) => {
              const style =
                achievementStyles[index % achievementStyles.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  className={`rounded-2xl p-6 text-center shadow-sm ${style.card}`}
                >
                  <div
                    className={`w-12 h-12 mx-auto rounded-xl ${style.icon} flex items-center justify-center mb-3`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

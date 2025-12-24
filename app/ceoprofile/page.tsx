"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from "next/image";
import ramkisir from "@/public/ramkisir.jpg";
import careershero from "@/public/careershero.jpg";

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

/* ---------------- BIO CONTENT ---------------- */
const shortBio = `
Mr. Sriramakrishna Dendukuri is the Founder of Ramki Technologies Pvt Ltd.
He holds a Master’s degree in Artificial Intelligence and has over 27 years
of global IT experience across APAC and North America.
`;

const fullBio = `
He has worked with multinational organizations such as HP & Gateway,
where he successfully managed significant roles in different capacities.

Ramki Technologies has developed and deployed multiple successful
software products including Pragati VTS, Pragati HR, Hospital
Management Systems, Pragati DBA, Pragati Project Management, and more,
successfully implemented worldwide.

As CEO, his vision is to build inspirational technology solutions that go
beyond monetary value and contribute positively to humanity as a whole.
`;

export default function CEOProfile() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen py-18 bg-background">
      <Header />

      {/* ================= HERO ================= */}
 

<section className="relative py-20 bg-background">
  <div className="container mx-auto px-4">
    {/* Hero Wrapper */}
    <div className="relative h-[70vh] min-h-[520px] overflow-hidden rounded-3xl">
      
      {/* Background Image */}
      <Image
        src={careershero}
        alt="CEO Leadership"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto text-center max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-wider text-slate-300">
              Leadership
            </span>

            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Sriramakrishna Dendukuri
            </h1>

            <p className="mt-4 text-lg text-slate-200">
              Chairman & Managing Director, Ramki Group
            </p>

            <a
              href="mailto:ramki@ramkigroup.com"
              className="mt-6 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <Mail className="w-5 h-5" />
              ramki@ramkigroup.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
</section> 




      {/* ================= PROFILE CONTENT ================= */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* IMAGE */}
            <div className="flex justify-center lg:justify-start">
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <Image
                  src={ramkisir} // put image in public/images
                  alt="CEO"
                  width={260}
                  height={320}
                  className="object-cover"
                />
              </div>
            </div>

            {/* BIO */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">
                About Mr. Ramki
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                {shortBio}
              </p>

              {expanded && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 text-muted-foreground leading-relaxed"
                >
                  {fullBio}
                </motion.p>
              )}

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:bg-rose-500 bg-blue-600 rounded-md text-white"
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
     <section className="py-16 bg-slate-100 dark:bg-slate-900">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {achievements.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className={`
            rounded-2xl p-6 text-center shadow-sm
            ${
              index === 0 &&
              "bg-blue-200 dark:bg-blue-950/40"
            }
            ${
              index === 1 &&
              "bg-emerald-200 dark:bg-emerald-950/40"
            }
            ${
              index === 2 &&
              "bg-amber-200 dark:bg-amber-950/40"
            }
            ${
              index === 3 &&
              "bg-violet-200 dark:bg-violet-950/40"
            }
          `}
        >
          <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <item.icon className="w-6 h-6 text-primary" />
          </div>

          <h3 className="text-xl font-bold">{item.title}</h3>

          <p className="text-sm text-muted-foreground mt-1">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      <Footer />
      <ScrollToTop />
    </div>
  );
}

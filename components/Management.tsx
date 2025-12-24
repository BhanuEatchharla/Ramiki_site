'use client';

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { User, Award, Briefcase, Clock } from "lucide-react";

/* ================= DATA ================= */
const teamMembers = [
  {
    name: "SriRamakrishna",
    role: "Founder & CEO",
    accent: "blue",
    achievements: ["Founded Ramki (2018)", "20+ years experience"],
    experience: "Business & technology strategy",
    bio: "Driving vision and long-term growth.",
  },
  {
    name: "Anil Kumar",
    role: "Project Management Head",
    accent: "violet",
    achievements: ["Pragati Suite Lead", "IoT Specialist"],
    experience: "Scalable systems & architecture",
    bio: "Leading technical innovation.",
  },
  {
    name: "Gayathri",
    role: "Business Operations Head",
    accent: "emerald",
    achievements: ["5× ops scale", "ISO leadership"],
    experience: "Operations & delivery",
    bio: "Ensuring execution excellence.",
  },
  {
    name: "Srikanth",
    role: "Sales Head",
    accent: "amber",
    achievements: ["500+ clients", "Market expansion"],
    experience: "Enterprise sales",
    bio: "Building trusted partnerships.",
  },
];

/* ================= COLOR MAP ================= */
const accentMap: Record<string, string> = {
  blue: "from-blue-500 to-blue-600",
  emerald: "from-emerald-500 to-emerald-600",
  amber: "from-amber-500 to-orange-500",
  violet: "from-violet-500 to-purple-600",
};

const frontBgMap: Record<string, string> = {
  blue: "bg-blue-100 dark:bg-blue-950",
  emerald: "bg-emerald-200 dark:bg-emerald-950",
  amber: "bg-amber-200 dark:bg-amber-950",
  violet: "bg-violet-200 dark:bg-violet-950",
};

/* ================= CARD ================= */
const Card = ({ member }: { member: typeof teamMembers[0] }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="group [perspective:2000px] w-full max-w-sm mx-auto">
      <div
        onClick={() => setFlipped(!flipped)}
        className={`
          relative w-full aspect-[3/2]
          rounded-2xl
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* FRONT */}
        <div
          className={`
            absolute inset-0 rounded-2xl
            ${frontBgMap[member.accent]}
            border border-slate-200 dark:border-slate-800
            shadow-md
            flex flex-col items-center justify-center
            text-center
            [backface-visibility:hidden]
          `}
        >
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${accentMap[member.accent]} flex items-center justify-center mb-4`}
          >
            <User className="w-6 h-6 text-white" />
          </div>

          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            {member.name}
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            {member.role}
          </p>

          <span className="mt-4 text-xs text-slate-500">
            Hover or tap to view
          </span>
        </div>

        {/* BACK */}
        <div
          className={`
            absolute inset-0 rounded-2xl
            bg-gradient-to-br ${accentMap[member.accent]}
            text-white
            p-5
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            flex flex-col
          `}
        >
          <h4 className="text-sm font-semibold mb-3">
            {member.name}
          </h4>

          <div className="space-y-3 text-xs leading-relaxed flex-1">
            <div className="flex gap-2">
              <Award className="w-4 h-4 shrink-0" />
              <div>
                {member.achievements.map((a) => (
                  <p key={a}>{a}</p>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Briefcase className="w-4 h-4 shrink-0" />
              <p>{member.experience}</p>
            </div>

            <div className="flex gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              <p>{member.bio}</p>
            </div>
          </div>

          <p className="text-[11px] opacity-80 text-center mt-3">
            Tap or hover to flip back
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= SECTION ================= */
export const Management = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="management"
      className="
        min-h-screen
        flex items-center
        bg-gradient-to-br
        from-slate-50 via-blue-50 to-emerald-50
        dark:from-[#0B1220] dark:via-[#0E1628] dark:to-[#0B1220]
      "
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 w-full">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold text-secondary uppercase">
            Leadership
          </span>
          <h2 className="text-3xl font-bold mt-2">
            Management <span className="gradient-text">Team</span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Experienced leaders powering innovation and growth.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {teamMembers.map((member) => (
            <Card key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

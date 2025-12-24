// "use client";

// import { motion } from "framer-motion";
// import {
//   Mail,
//   Award,
//   Briefcase,
//   GraduationCap,
//   Target,
//   Users,
// } from "lucide-react";
// import Image from "next/image";

// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ScrollToTop } from "@/components/ScrollToTop";
// import ceohero from "../public/ceo-hero.jpg";



// const achievements = [
//   { icon: Briefcase, title: "27+ Years", description: "IT Industry Experience" },
//   {
//     icon: GraduationCap,
//     title: "Masters in AI",
//     description: "Artificial Intelligence",
//   },
//   { icon: Target, title: "Global Reach", description: "APAC & North America" },
//   { icon: Users, title: "Founder", description: "Ramki Technologies" },
// ];

// export default function CEOProfile() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative pt-24 pb-16 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src={ceohero}
//             alt="CEO Profile Hero"
//             fill
//             priority
//             className="object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-4xl mx-auto pt-16"
//           >
//             <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
//               Leadership
//             </span>

//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mt-3 mb-6">
//               <span className="gradient-text">
//                 Sriramakrishna Dendukuri
//               </span>
//             </h1>

//             <p className="text-xl text-muted-foreground mb-4">
//               Chairman & Managing Director, Ramki Group
//             </p>

//             <a
//               href="mailto:ramki@ramkigroup.com"
//               className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
//             >
//               <Mail className="w-5 h-5" />
//               ramki@ramkigroup.com
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Achievements */}
//       <section className="py-12 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {achievements.map((item, index) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4, delay: index * 0.1 }}
//                 className="text-center p-6 bg-card rounded-xl border border-border"
//               >
//                 <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
//                   <item.icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="text-2xl font-bold">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto space-y-8"
//           >
//             {/* About */}
//             <div className="bg-card border border-border rounded-2xl p-8">
//               <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
//                 <Award className="w-6 h-6 text-primary" />
//                 About Mr. Ramki
//               </h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 Mr. Sriramakrishna Dendukuri, Founder of Ramki Technologies Pvt Ltd,
//                 holds a master’s degree in Artificial Intelligence (AI) and has
//                 over 27 years of global IT experience across APAC and North
//                 America.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8">
//               <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
//                 <Users className="w-6 h-6 text-primary" />
//                 Vision for Ramki Technologies
//               </h2>
//               <p className="text-muted-foreground italic">
//                 “To develop inspirational technology solutions that go beyond
//                 monetary value and contribute positively to humanity.”
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

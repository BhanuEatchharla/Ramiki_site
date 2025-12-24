// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Briefcase,
//   Send,
//   CheckCircle,
//   Upload,
// } from "lucide-react";

// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import { ScrollToTop } from "@/components/ScrollToTop";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// import careersHero from "../public/careers-hero.jpg";

// /* ---------------- schema ---------------- */

// const careerSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Enter a valid email address"),
//   contact: z.string().min(10, "Contact must be at least 10 digits"),
//   city: z.string().min(2, "City/Town is required"),
//   position: z.string().min(1, "Please select a position"),
//   message: z.string().min(10, "Message must be at least 10 characters"),
// });

// type CareerFormData = z.infer<typeof careerSchema>;

// const positions = [
//   "Software Developer (.NET)",
//   "Mobile App Developer",
//   "Product Manager",
//   "QA Engineer",
//   "UI/UX Designer",
//   "Business Analyst",
//   "DevOps Engineer",
//   "Technical Support",
//   "Other",
// ];

// /* ---------------- page ---------------- */

// export default function CareersPage() {
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [submitted, setSubmitted] = useState(false);
//   const { toast } = useToast();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm<CareerFormData>({
//     resolver: zodResolver(careerSchema),
//   });

//   const onSubmit = async (data: CareerFormData) => {
//     await new Promise((r) => setTimeout(r, 1200));

//     console.log("Career form:", data);
//     console.log("Resume:", selectedFile);

//     toast({
//       title: "Application submitted",
//       description: "Our HR team will contact you soon.",
//     });

//     setSubmitted(true);
//     reset();
//     setSelectedFile(null);

//     setTimeout(() => setSubmitted(false), 2500);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* ---------- Hero ---------- */}
//       <section className="relative pt-24 pb-16 overflow-hidden">
//         <div className="absolute inset-0">
//           <Image
//             src={careersHero}
//             alt="Careers"
//             fill
//             priority
//             className="object-cover opacity-20"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
//         </div>

//         <div className="container relative z-10 mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mx-auto max-w-4xl text-center pt-16"
//           >
//             <span className="text-sm font-semibold text-secondary uppercase">
//               Join Our Team
//             </span>
//             <h1 className="mt-3 mb-6 text-4xl sm:text-5xl md:text-6xl font-bold">
//               <span className="gradient-text">Career Opportunities</span>
//             </h1>
//             <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
//               Build a rewarding career with Ramki Technologies.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Info ---------- */}
//       <section className="py-12 bg-muted/30">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-4xl rounded-2xl border bg-card p-8 text-center">
//             <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />
//             <h2 className="mb-4 text-2xl font-bold">We’re Hiring</h2>
//             <p className="text-muted-foreground">
//               Send your resume to{" "}
//               <a
//                 href="mailto:info@ramkigroup.com"
//                 className="font-semibold text-primary hover:underline"
//               >
//                 info@ramkigroup.com
//               </a>{" "}
//               or apply using the form below.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Form ---------- */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-2xl">
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="rounded-2xl border bg-card p-8 space-y-6"
//             >
//               <Input placeholder="Name" {...register("name")} />
//               {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}

//               <Input type="email" placeholder="Email" {...register("email")} />
//               {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}

//               <Input placeholder="Contact" {...register("contact")} />
//               {errors.contact && <p className="text-sm text-destructive">{errors.contact.message}</p>}

//               <Input placeholder="City / Town" {...register("city")} />
//               {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}

//               {/* Resume upload */}
//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 hidden
//                 accept=".pdf,.doc,.docx"
//                 onChange={(e) => setSelectedFile(e.target.files?.[0] ?? null)}
//               />
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => fileInputRef.current?.click()}
//                 className="w-full justify-start gap-2"
//               >
//                 <Upload className="h-4 w-4" />
//                 {selectedFile ? selectedFile.name : "Upload Resume"}
//               </Button>

//               <select
//                 {...register("position")}
//                 className="h-10 w-full rounded-md border bg-background px-3"
//               >
//                 <option value="">Select Position</option>
//                 {positions.map((p) => (
//                   <option key={p} value={p}>
//                     {p}
//                   </option>
//                 ))}
//               </select>
//               {errors.position && (
//                 <p className="text-sm text-destructive">{errors.position.message}</p>
//               )}

//               <Textarea rows={5} placeholder="Message" {...register("message")} />
//               {errors.message && (
//                 <p className="text-sm text-destructive">{errors.message.message}</p>
//               )}

//               <Button
//                 type="submit"
//                 disabled={isSubmitting || submitted}
//                 className="w-full text-lg py-6"
//               >
//                 {isSubmitting ? (
//                   "Submitting..."
//                 ) : submitted ? (
//                   <>
//                     <CheckCircle className="mr-2 h-5 w-5" />
//                     Submitted
//                   </>
//                 ) : (
//                   <>
//                     <Send className="mr-2 h-5 w-5" />
//                     Submit Application
//                   </>
//                 )}
//               </Button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

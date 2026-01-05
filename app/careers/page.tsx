"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Briefcase, Send, CheckCircle, Upload } from "lucide-react";

import { createBrowserSupabase } from "@/lib/supabaseClient";
import { uploadResume } from "@/lib/uploadResume";


import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import careershero from "@/public/careershero.jpg";

/* ---------------- schema ---------------- */

const careerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  contact: z.string().min(10, "Contact must be at least 10 digits"),
  city: z.string().min(2, "City/Town is required"),
  position: z.string().min(1, "Please select a position"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type CareerFormData = z.infer<typeof careerSchema>;

const positions = [
  "Software Developer (.NET)",
  "Mobile App Developer",
  "Product Manager",
  "QA Engineer",
  "UI/UX Designer",
  "Business Analyst",
  "DevOps Engineer",
  "Technical Support",
  "Other",
];

/* ---------------- page ---------------- */

export default function CareersPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  });
  
  const onSubmit = async (data: CareerFormData) => {
    try {
    const supabase = createBrowserSupabase();
    
    let resumeUrl: string | null = null;

    // 1️⃣ Upload resume (if exists)
    if (selectedFile) {
      resumeUrl = await uploadResume(selectedFile);
    }

    // 2️⃣ Save to Supabase table
    const { error } = await supabase
      .from("career_applications")
      .insert([
        {
          name: data.name,
          email: data.email,
          contact: data.contact,
          city: data.city,
          position: data.position,
          message: data.message,
          resume_url: resumeUrl,
        },
      ]);

    if (error) throw error;

    // 3️⃣ Send email notification (HR + user)
    const emailRes = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        contact: data.contact,
        city: data.city,
        position: data.position,
        message: data.message,
        resumeUrl,
      }),
    });

    if (!emailRes.ok) {
      throw new Error("Email notification failed");
    }

    // 4️⃣ Success UI
    toast({
      title: "Application submitted",
      description: "Our HR team will contact you soon.",
    });

    reset();
    setSelectedFile(null);
  } catch (err) {
    console.error("Submission error:", err);

    toast({
      title: "Submission failed",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
};

 return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ---------- Hero ---------- */}
      <section className="relative py-10 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4">
          {/* IMAGE WRAPPER (CENTERED, NOT FULL WIDTH) */}
          <div className="relative mx-auto max-w-7xl h-[80vh] min-h-[480px] overflow-hidden rounded-3xl">
            {/* Background Image */}
            <Image
              src={careershero} // your image import
              alt="Careers"
              fill
              priority
              className="object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center px-6"
              >
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-200">
                  Join Our Team
                </span>

                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                  Career Opportunities
                </h1>

                <p className="mt-4 text-lg text-slate-200 max-w-2xl mx-auto">
                  Build a rewarding career with Ramki Technologies.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-6xl"
          >
            {/* MAIN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* ---------- LEFT : INFO ---------- */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Career Opportunities
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Professionals who are part of the Ramki Technologies have one
                  of the most content career growths. If you are a right
                  candidate with the interest and/or experience in working with
                  Microsoft, Mobile and Product Application development, kindly
                  do not hesitate to forward your CV with the relevant JD
                  Number&apos;s to{" "}
                  <a
                    href="mailto:info@ramkigroup.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    info@ramkigroup.com
                  </a>
                </p>

                {/* CTA */}
                <a
                  href="/careers/openings"
                  className="
              inline-flex items-center justify-center
              h-12 px-8
              rounded-lg
              bg-green-600
              text-white font-semibold
              shadow-md
              hover:bg-green-700
              transition
            "
                >
                  CURRENT OPENINGS
                </a>
              </div>

              {/* ---------- RIGHT : FORM ---------- */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="
    rounded-2xl
    bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50
    dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
    border border-slate-200/60 dark:border-slate-800
    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    p-8 sm:p-10
  "
              >
                {/* FORM GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <Input
                      className={`h-11 bg-white ${
                        errors.name ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="Full Name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Input
                      type="email"
                      className={`h-11 bg-white ${
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="Email Address"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Contact */}
                  <div>
                    <Input
                      className={`h-11 bg-white ${
                        errors.contact
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      placeholder="Contact Number"
                      {...register("contact")}
                    />
                    {errors.contact && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.contact.message}
                      </p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <Input
                      className={`h-11 bg-white ${
                        errors.city ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      placeholder="City / Town"
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  {/* Upload */}
                  <div className="md:col-span-2">
                    <input
                      ref={fileInputRef}
                      type="file"
                      hidden
                      accept=".pdf,.doc,.docx"
                      onChange={(e) =>
                        setSelectedFile(e.target.files?.[0] ?? null)
                      }
                    />

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="h-11 w-full justify-start gap-2 bg-white border-dashed"
                    >
                      <Upload className="h-4 w-4" />
                      {selectedFile ? selectedFile.name : "Upload Resume"}
                    </Button>
                  </div>

                  {/* Position */}
                  <div className="md:col-span-2">
                    <select
                      {...register("position")}
                      className={`
          h-11 w-full rounded-lg
          bg-white px-4 text-sm
          border
          ${
            errors.position
              ? "border-red-500 focus:ring-red-500"
              : "border-input"
          }
          focus:outline-none focus:ring-2
        `}
                    >
                      <option value="">Select Position</option>
                      {positions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.position.message}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <Textarea
                      rows={4}
                      className={`bg-white ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      placeholder="Tell us about yourself"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* SUBMIT */}
                <Button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="
      mt-8 h-12 w-full
      rounded-lg
      text-base font-semibold
      bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600
      text-white
      shadow-md
      hover:opacity-90
    "
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

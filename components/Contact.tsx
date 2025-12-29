"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Globe, Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useToast } from "@/hooks/use-toast"; 
import { supabase } from "@/lib/supabaseClient";

/* ================= SCHEMA ================= */
const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Minimum 5 characters"),
  message: z.string().min(10, "Minimum 10 characters"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required",
  }),
});

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
};
type FormData = z.infer<typeof schema>;

/* ================= INFO ================= */
const infoCards = [
  {
    icon: MapPin,
    title: "Office Address",
    text: "Manjeera Trinity Corporate, Kukatpally, Hyderabad – 500072",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "+91 91541 53335",
  },
  {
    icon: Mail,
    title: "Email",
    text: "info@ramkigroup.com",
  },
  {
    icon: Globe,
    title: "Website",
    text: "www.ramkitechnologies.com",
  },
];

/* ================= CARD COLORS ================= */
const cardBgMap = [
  "bg-blue-200 dark:bg-blue-950/40",
  "bg-emerald-500 dark:bg-emerald-950/40",
  "bg-amber-200 dark:bg-amber-950/40",
  "bg-violet-400 dark:bg-violet-950/40",
];

export const Contact = () => {
  const ref = useRef(null);
  const { toast } = useToast();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: false },
  });

 const onSubmit = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    // 1️⃣ Store in Supabase
    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    if (error) throw error;

    // 2️⃣ Send email
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    toast({
      title: "Message sent",
      description: "We’ll get back to you shortly.",
    });

    reset();
  } catch (err) {
    console.error(err);
    toast({
      title: "Failed",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
};



  return (
    <section
      id="contact"
      ref={ref}
      className="
        min-h-screen flex items-center
        bg-gradient-to-br from-slate-200 via-white to-slate-200
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
      "
    >
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold uppercase text-blue-600">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Let’s <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            Have a question or need support? Our team is ready to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT INFO GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoCards.map((item, index) => (
              <div
                key={item.title}
                className={`
                  ${cardBgMap[index]}
                  border border-slate-200 dark:border-slate-800
                  rounded-2xl p-6
                  shadow-sm
                  transition-transform duration-300
                  hover:-translate-y-1
                `}
              >
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-blue-800" />
                </div>
                <h4 className="font-semibold mb-1 text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="
    rounded-3xl p-10
    bg-[#f2f6ff]
    border border-slate-200
    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
  "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NAME */}
              <div>
                <Input
                  placeholder="Full Name"
                  {...register("name")}
                  className="
          h-12 rounded-lg
          bg-white
          border border-slate-800
          focus:ring-2 focus:ring-blue-500
        "
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <Input
                  placeholder="Email Address"
                  {...register("email")}
                  className="
          h-12 rounded-lg
          bg-white
          border border-slate-800
          focus:ring-2 focus:ring-blue-500
        "
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* SUBJECT */}
              <div className="md:col-span-2">
                <Input
                  placeholder="Subject"
                  {...register("subject")}
                  className="
          h-12 rounded-lg
          bg-white
          border border-slate-800
          focus:ring-2 focus:ring-blue-500
        "
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <Textarea
                  rows={4}
                  placeholder="Tell us about yourself"
                  {...register("message")}
                  className="
          bg-white
          rounded-lg
          border border-slate-800
          focus:ring-2 focus:ring-blue-500
        "
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* CONSENT */}
            <div className="mt-6 flex items-start gap-3">
              <Checkbox
                checked={watch("consent")}
                onCheckedChange={(v) => setValue("consent", Boolean(v))}
              />
              <span className="text-sm text-slate-600">
                I agree to receive communication as per Privacy Policy.
              </span>
            </div>

            {errors.consent && (
              <p className="mt-1 text-sm text-red-500">
                {errors.consent.message}
              </p>
            )}

            {/* BUTTON */}
            <Button
              disabled={isSubmitting || sent}
              className="
      mt-8 h-12 w-full
      rounded-lg
      text-lg font-semibold
      bg-gradient-to-r from-blue-600 to-purple-600
      text-white
      shadow-lg
      hover:opacity-90
    "
            >
              {isSubmitting ? (
                "Sending..."
              ) : sent ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Message Sent
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

/* ================= FIELD ================= */
const Field = ({
  placeholder,
  register,
  error,
}: {
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}) => (
  <div>
    <Input
      {...register}
      placeholder={placeholder}
      className={`
        h-12 rounded-xl
        bg-white dark:bg-slate-950
        border ${
          error ? "border-red-500" : "border-slate-300 dark:border-slate-700"
        }
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition
      `}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

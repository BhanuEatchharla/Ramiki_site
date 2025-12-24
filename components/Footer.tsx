"use client";

import { motion } from "framer-motion";
import {
  Download,
  Phone,
  Mail,
  Globe,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

const siteLinks = [
  { name: "Home", href: "/", isRoute: true },
  { name: "About", href: "/#about", isRoute: false },
  { name: "CEOProfile", href: "/ceoprofile", isRoute: true },
  { name: "Management", href: "/#management", isRoute: false },
  { name: "Products", href: "/#products", isRoute: false },
  { name: "Careers", href: "/careers", isRoute: true },
  { name: "Contact Us", href: "/#contact", isRoute: false },
];

const policyLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Return Policy", href: "#" },
  { name: "Product Warranty", href: "#" },
];

const socials = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleHashClick = (href: string) => {
    const [, hash] = href.split("#");
    if (!hash) return;

    if (pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-300 to-white dark:from-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Ramki
                </h3>
                <p className="text-xs text-slate-500">Technologies</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Ramki Technologies Pvt Ltd delivers innovative, scalable, and
              secure technology solutions to businesses across India.
            </p>

            <Button
              variant="outline"
              className="gap-2 hover:bg-blue-600 hover:text-white transition"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>

            {/* SOCIALS */}
            <div className="flex gap-3 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="
                    p-2 rounded-lg
                    bg-slate-200 dark:bg-slate-800
                    hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600
                    hover:text-white hover:bg-blue-600
                    transition
                  "
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* SITE LINKS */}
          <div>
            <h4 className="mb-5 font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleHashClick(link.href)}
                      className="text-sm text-left text-slate-600 dark:text-slate-400 hover:text-blue-600 transition"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h4 className="mb-5 font-semibold text-slate-900 dark:text-white">
              Policies
            </h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-5 font-semibold text-slate-900 dark:text-white">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
                <p>
                  Manjeera Trinity Corporate,
                  <br />
                  KPHB Phase 3, Hyderabad – 500072
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:+919154153335" className="hover:text-blue-600">
                  +91 91541 53335
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:info@ramkigroup.com" className="hover:text-blue-600">
                  info@ramkigroup.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-blue-600" />
                <a
                  href="https://www.ramkitechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  www.ramkitechnologies.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-14 pt-6 border-t border-slate-200 dark:border-slate-800 text-center"
        >
          <p className="text-xs text-slate-500">
            © 2018 Ramki Technologies Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

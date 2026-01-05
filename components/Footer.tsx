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
  { name: "CEO Profile", href: "/ceoprofile", isRoute: true },
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

    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <span className="text-xl font-bold text-white">R</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Ramki</h3>
                <p className="text-xs text-slate-400">Technologies</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Ramki Technologies Pvt Ltd delivers innovative, scalable and secure
              technology solutions across India.
            </p>

            <Button
              variant="outline"
              className="border-slate-600 text-slate-200 hover:bg-blue-600 hover:text-white"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Brochure
            </Button>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5">
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-[#0A66C2] transition">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-[#1DA1F2] transition">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-[#1877F2] transition">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a className="p-2 rounded-lg bg-slate-800 hover:bg-[#E1306C] transition">
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  {link.isRoute ? (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-blue-400 transition"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleHashClick(link.href)}
                      className="text-sm text-left text-slate-400 hover:text-blue-400 transition"
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
            <h4 className="mb-4 font-semibold text-white">Policies</h4>
            <ul className="space-y-3">
              {policyLinks.map((link) => (
                <li key={link.name}>
                  <a className="text-sm text-slate-400 hover:text-blue-400 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>
                  Manjeera Trinity Corporate,
                  <br />
                  KPHB Phase 3, Hyderabad – 500072
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+919154153335" className="hover:text-blue-400">
                  +91 91541 53335
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:info@ramkigroup.com" className="hover:text-purple-400">
                  info@ramkigroup.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-cyan-400" />
                <a className="hover:text-cyan-400">
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
          className="mt-10 pt-5 border-t border-slate-800 text-center"
        >
          <p className="text-xs text-slate-500">
            © 2018 Ramki Technologies Pvt Ltd. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

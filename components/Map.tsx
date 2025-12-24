'use client';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Map = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="w-full h-[400px] md:h-[500px] relative overflow-hidden"
      >
        {/* Map Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-10 pointer-events-none h-20" />
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5461891878!2d78.39183091487756!3d17.49367788801826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3fd4c0d67%3A0x8c6c4d7b7f7d6d6!2sManjeera%20Trinity%20Corporate!5e0!3m2!1sen!2sin!4v1718451234567!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:contrast-75 dark:hue-rotate-180"
          title="Ramki Technologies Location - Manjeera Trinity Corporate"
        />

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm border border-border rounded-xl p-4 shadow-lg z-20"
        >
          <p className="font-semibold text-foreground">Ramki Technologies Pvt Ltd</p>
          <p className="text-sm text-muted-foreground">Manjeera Trinity Corporate, Kukatpally</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

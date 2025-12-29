// // 'use client';

// // import { Moon, Sun } from "lucide-react";
// // import { useEffect, useState } from "react";
// // import { motion } from "framer-motion";

// // export const ThemeToggle = () => {
// //   const [mounted, setMounted] = useState(false);
// //   const [isDark, setIsDark] = useState(false);

// //   // Ensure client-only rendering
// //   useEffect(() => {
// //     // eslint-disable-next-line react-hooks/set-state-in-effect
// //     setMounted(true);

// //     const savedTheme = localStorage.getItem("theme");
// //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// //     const shouldBeDark =
// //       savedTheme === "dark" || (!savedTheme && prefersDark);

// //     setIsDark(shouldBeDark);
// //     document.documentElement.classList.toggle("dark", shouldBeDark);
// //   }, []);

// //   const toggleTheme = () => {
// //     const next = !isDark;
// //     setIsDark(next);
// //     document.documentElement.classList.toggle("dark", next);
// //     localStorage.setItem("theme", next ? "dark" : "light");
// //   };

// //   // Prevent hydration mismatch
// //   if (!mounted) return null;

// //   return (
// //     <motion.button
// //       onClick={toggleTheme}
// //       aria-label="Toggle theme"
// //       whileHover={{ scale: 1.1 }}
// //       whileTap={{ scale: 0.95 }}
// //      className="rounded-full p-2 bg-background border border-border shadow-sm
// //            hover:bg-muted transition-colors"
// //     >
// //       {isDark ? (
// //         <Moon className="h-5 w-5 text-foreground" />
// //       ) : (
// //         <Sun className="h-5 w-5 text-foreground" />
// //       )}
// //     </motion.button>
// //   );
// // };
// // "use client";

// import { Moon, Sun } from "lucide-react";
// import { useState } from "react";

// export function ThemeToggle() {
//   const [dark, setDark] = useState(
//     typeof document !== "undefined"
//       ? document.documentElement.classList.contains("dark")
//       : false
//   );

//   const toggleTheme = () => {
//     const next = !dark;
//     setDark(next);

//     document.documentElement.classList.toggle("dark", next);
//     localStorage.setItem("theme", next ? "dark" : "light");
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       aria-label="Toggle theme"
//       className="
//         p-2 rounded-full
//         bg-muted
//         hover:bg-primary/10
//         transition
//       "
//     >
//       {dark ? (
//         <Sun className="w-5 h-5" />
//       ) : (
//         <Moon className="w-5 h-5" />
//       )}
//     </button>
//   );
// }

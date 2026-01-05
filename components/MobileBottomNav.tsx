"use client";

import { Home, Info, Layers, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function MobileBottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNav = (id: string) => {
    // If NOT on home → go home first
    if (pathname !== "/") {
      router.push("/");

      // wait for DOM to render
      setTimeout(() => {
        scrollToId(id);
      }, 120);
      return;
    }

    // Already on home → just scroll
    scrollToId(id);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-border">
      <div className="grid grid-cols-4 h-16">
        {/* HOME */}
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
        >
          <Home className="w-5 h-5" />
          <span className="text-xs mt-1">Home</span>
        </button>

        {/* ABOUT */}
        <button
          onClick={() => handleNav("about")}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
        >
          <Info className="w-5 h-5" />
          <span className="text-xs mt-1">About</span>
        </button>

        {/* PRODUCTS */}
        <button
          onClick={() => handleNav("products")}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
        >
          <Layers className="w-5 h-5" />
          <span className="text-xs mt-1">Products</span>
        </button>

        {/* CONTACT */}
        <button
          onClick={() => handleNav("contact")}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-primary"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs mt-1">Contact</span>
        </button>
      </div>
    </nav>
  );
}

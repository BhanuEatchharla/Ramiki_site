import "./globals.css";
import Providers from "./providers";
import { MobileBottomNav } from "@/components/MobileBottomNav";

export const metadata = {
  title: "Ramki Technologies",
  description: "Ramki Technologies Pvt Ltd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <MobileBottomNav />
        </Providers>
      </body>
    </html>
  );
}

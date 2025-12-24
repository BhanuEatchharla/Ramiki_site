import "./globals.css";
import Providers from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

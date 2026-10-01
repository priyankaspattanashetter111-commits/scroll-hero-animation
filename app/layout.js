import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "ITZFIZZ — Digital Studio",
  description: "Independent digital product studio crafting high-velocity digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} dark`}>
      <body className="min-h-screen bg-[#0f0f0e] text-[#f2efe8] font-sans antialiased selection:bg-[#ff5a1f] selection:text-white">
        {children}
      </body>
    </html>
  );
}

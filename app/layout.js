import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#0f0f0e",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "ITZFIZZ — High-Velocity Digital Studio",
  description:
    "Interactive scroll-driven hero experience showcasing performance web engineering and fluid motion.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
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

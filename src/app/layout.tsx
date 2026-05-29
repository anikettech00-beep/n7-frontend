import { Archivo, Chivo_Mono } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import Footer from "../components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});
const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-chivo-mono",
});
export const metadata = {
  title: "N7",
  description: "Modern fintech platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="font-sans antialiased bg-black text-white selection:bg-cyan-500/35 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
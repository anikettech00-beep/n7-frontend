import { Archivo } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import Footer from "../components/layout/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
});

export const metadata = {
  metadataBase: new URL("https://n7-frontend.vercel.app"),
  title: {
    default: "N7 | Modern fintech platform",
    template: "%s | N7",
  },
  description:
    "N7 is a modern fintech landing page for digital banking, open banking, and treasury software solutions.",
  themeColor: "#000000",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "N7 | Modern fintech platform",
    description:
      "N7 is a modern fintech landing page for digital banking, open banking, and treasury software solutions.",
    type: "website",
    url: "https://n7-frontend.vercel.app",
    siteName: "N7",
    locale: "en_US",
    images: [
      {
        url: "/images/hero.svg",
        width: 1200,
        height: 630,
        alt: "N7 fintech landing page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N7 | Modern fintech platform",
    description:
      "N7 is a modern fintech landing page for digital banking, open banking, and treasury software solutions.",
  },
  icons: {
    icon: "/N7.svg",
    apple: "/N7.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-black text-white selection:bg-cyan-500/35 selection:text-white"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

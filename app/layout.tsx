import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rathore Buildcon",
  description: "Building Dreams, Delivering Trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full antialiased">
        <Header />
        <Toaster />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
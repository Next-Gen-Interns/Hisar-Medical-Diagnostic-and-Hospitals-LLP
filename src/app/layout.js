import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HISAR MEDICAL DIAGNOSTIC & HOSPITALS LLP",
  description: "Comprehensive Diagnostic & Imaging Services in Hisar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-800`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

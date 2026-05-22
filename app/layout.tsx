import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Dubey | Data Science Portfolio",
  description:
    "Data Science portfolio for Sahil Dubey, focused on Data Analytics, Data Engineering, ML projects, and Working Student roles in Germany.",
  authors: [{ name: "Sahil Dubey" }],
  creator: "Sahil Dubey",
  keywords: [
    "Sahil Dubey",
    "Data Science Portfolio",
    "Data Analytics",
    "Data Engineering",
    "Machine Learning",
    "Working Student Germany",
    "Python",
    "SQL",
    "FastAPI",
    "PostgreSQL",
  ],
  openGraph: {
    title: "Sahil Dubey | Data Science Portfolio",
    description:
      "Recruiter-focused portfolio for Data Analytics, Data Engineering, and ML Working Student roles in Germany.",
    type: "website",
    locale: "en_US",
    siteName: "Sahil Dubey Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Sahil Dubey | Data Science Portfolio",
    description:
      "Projects in Data Analytics, Data Engineering, and ML for Working Student roles in Germany.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

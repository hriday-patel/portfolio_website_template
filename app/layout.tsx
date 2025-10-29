import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ViewTransitions } from "next-view-transitions";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "A Portfolio website template",
  description:
    "A template for portfolio website made for developers to showcase their skills, resume, projects etc.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${inter.className} antialiased bg-neutral-100 dark:bg-neutral-800`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

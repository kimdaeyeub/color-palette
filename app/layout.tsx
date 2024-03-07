import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Palette",
    default: "Palette",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Suspense fallback={<div className="h-20"></div>}>
            <Nav />
          </Suspense>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

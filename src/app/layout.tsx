import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";

const urbanist = Urbanist({ subsets: ["latin"]});


export const metadata: Metadata = {
  title: "Frandy Morel Portfolio",
  description: "Portfolio made by Frandy Morel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      ><Navbar/>
        {children}
      </body>
    </html>
  );
}

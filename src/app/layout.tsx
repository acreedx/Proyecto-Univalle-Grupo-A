import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyecto Univalle A",
  description: "Proyecto creado utilizando Next JS",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="">
            <Navbar />
            {children}
          </div>

        </Providers>
      </body>
    </html>
  );
}

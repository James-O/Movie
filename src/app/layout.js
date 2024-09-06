import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";
import Navbar from "@/components/navbar";
import {Suspense} from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
          <Providers>
            <Header/>
            <Navbar/>
            <Suspense>
              {children}
            </Suspense>
          </Providers>
      </body>
    </html>
  );
}

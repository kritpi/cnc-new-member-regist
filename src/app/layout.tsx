'use client'

import { Inter as FontSans } from "next/font/google"
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";


import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <NextUIProvider>
              <div className="px-[100px] py-[5.8rem]">
                {children}
              </div>
            </NextUIProvider>
        </body>
    </html>
    
  );
}

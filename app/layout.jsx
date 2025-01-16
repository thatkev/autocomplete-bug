import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Autocomplete Bug",
  description: "Minimal Reproducible Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark`}
      >
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}

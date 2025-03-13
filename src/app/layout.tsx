import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Provider from "./Providers/Provider";

const titilliumWeb = Titillium_Web({
  weight: ["400", "600", "700", "900", "200", "300"],
  variable: "--font-titillium-web",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourave Portfolio",
  description: "Contact me as a Developer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${titilliumWeb.variable} antialiased`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Domine, Maitree, Sen } from "next/font/google";
import { Providers } from "./providers";
import "../styles/globals.css";

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const maitree = Maitree({
  variable: "--font-maitree",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "HomeFree",
  description: "HomeFree, a Home Care platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${domine.variable} ${maitree.variable} ${sen.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

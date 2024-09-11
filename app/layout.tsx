import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
});

export const metadata: Metadata = {
  title: "Fashion Sketchbook App",
  description: "Design your fashion ideas in an interactive sketchbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} font-handwritten`}>{children}</body>
    </html>
  );
}

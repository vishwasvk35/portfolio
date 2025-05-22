import type { Metadata } from "next";
import { audiowide, overlockSC } from './font';
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Vishwas Kulkarni",
  description: "Next.js app with particles",
  icons: {
    icon: `/favicon.ico`,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-black ${audiowide.variable} ${overlockSC.variable}`}>
      <body>{children}</body>
    </html>
  );
}
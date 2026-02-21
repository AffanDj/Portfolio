import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Pixelify_Sans, Press_Start_2P } from "next/font/google";
import './globals.css';
import { AOSInit } from '@/components/AOSInit';

const inter = Inter({ subsets: ['latin'] });

const pixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400","700"],
  variable: "--font-pixel",
  display: "swap",
});

const press = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Affan Djafar | Frontend Developer",
  description:
    "Frontend developer specializing in React, Next.js, and UI/UX design. View my projects and experience.",
  keywords: ["Affan Djafar", "Frontend Developer", "Next.js", "React", "UI UX"],
  authors: [{ name: "Affan Djafar" }],
  openGraph: {
    title: "Affan Djafar Portfolio",
    description: "Frontend developer & UI/UX enthusiast",
    url: "https://yourdomain.com",
    siteName: "Affan Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  icons: '/favicon.png'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pixel.variable} ${press.variable} antialiased min-h-screen`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AOSInit } from '@/components/AOSInit'; // New component for AOS

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Affan Djafar — Portfolio',
  description: 'Computer Science Graduate Portfolio',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-white antialiased min-h-screen`}>
        <AOSInit /> {/* Initialize AOS */}
        {children}
      </body>
    </html>
  );
}
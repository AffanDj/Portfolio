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
    <html lang="en" suppressHydrationWarning>
      {/* Cukup biarkan font dan min-h-screen saja di body */}
      <body className={`${inter.className} antialiased min-h-screen`}>
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
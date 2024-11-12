import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// * Start - Css
import '@/src/styles/globals.css';
// * End - Css

// * Start - Provider
import QueryProvider from '@/src/libs/providers/query-provider';
// * End - Provider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chainova blog',
  description: 'Developed by Danial Karshenas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}

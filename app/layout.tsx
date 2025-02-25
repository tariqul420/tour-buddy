import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';
import Footer from './components/Footer';

const mulish = Mulish({
  variable: '--font-mulish',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tore Buddy',
  description: 'This is Tore buddy Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

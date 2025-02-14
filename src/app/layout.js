import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NicoRodriguez.io",
  description: "Nico Rodriguez | Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 p-8 sm:p-20 flex items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

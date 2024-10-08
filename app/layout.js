// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { SessionProvider } from "next-auth/react"; // Import the SessionProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NASA or Not",
  description:
    "An app challenging users to identify the real NASA Picture of the Day and spot the AI-generated imposter. Developed by Trevor Brown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} p-4 flex flex-col min-h-screen bg-gradient-to-b from-indigo-900 via-blue-800 to-indigo-900 text-white relative`}
      >
        {/* Wrap everything inside SessionProvider */}
        <SessionProvider>
          <Header />
          <main className="relative z-10 flex-grow">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}

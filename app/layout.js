import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prioritize",
  description: "Schedule tasks and manage your team with ease.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Toaster />
        </div>
        {children}
      </body>
    </html>
  );
}

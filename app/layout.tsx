"use client"
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import NavMenu from "./components/navmenu";
import Session from "./components/session";
import { usePathname } from "next/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <SessionProvider>
      <Session/>
      <div className="flex" >
        {!isLoginPage && <NavMenu />}
        {children}
      </div>
      </SessionProvider>
      </body>
    </html>
  );
}

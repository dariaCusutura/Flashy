"use client";
import { usePathname } from "next/navigation";
import { Routes } from "@/routes";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/NavBar/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Determine the mode based on the current route
  const getMode = (pathname: string) => {
    switch (pathname) {
      case Routes.HOME:
        return "home";
      case Routes.LOGIN:
        return "login";
      case Routes.SIGNUP:
        return "signup";
      case Routes.MY_STACKS:
        return "stacks";
      default:
        return "";
    }
  };

  const mode = getMode(pathname);

  return (
    <html lang="en">
      <head>
        <title>Flashy</title>
      </head>
      <body>
        <Providers>
          <Navbar mode={mode} />
          <Toaster position="bottom-center" />
          {children}
        </Providers>
      </body>
    </html>
  );
}

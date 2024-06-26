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
        return "cards";
    }
  };

  const mode = getMode(pathname);
  return (
    <html lang="en">
      <head>
        <title>Flashy</title>
      </head>
      <body>
        <Providers mode={mode}>
          <Navbar mode={mode} />
          {children}
          <Toaster position="bottom-center" />
        </Providers>
      </body>
    </html>
  );
}

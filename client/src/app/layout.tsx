import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Flashy</title>
      </head>
      <body>
        <Providers>
          <Box
            bgImage={"./background.svg"}
            bgSize="cover"
            bgPosition="center"
            position="fixed"
            top={0}
            left={0}
            h="100vh"
            w="100vw"
            m={0}
            p={0}
            overflowY="auto"
          >
            <Navbar mode="home" />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}

import { Navbar } from "@/components/navigation/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import { ContextProvider } from "@/hooks/Context";
import { Footer } from "@/components/navigation/Footer";
import { favicon } from "@/asset/images";

// const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Body Builder",
  description: "A body building web application",
  icons: favicon,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}

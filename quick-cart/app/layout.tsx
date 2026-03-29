import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/global/Loading";
import Navbar from "@/components/global/Navbar";
import { MenuProvider } from "@/contexts/general/menu-context";

export const metadata: Metadata = {
  title: "Quick Cart",
  description: "Shop various products sourced around the globe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //simple app just throwing the suspense and CartDataProvider here so everything is accessible
  //more complex app may have a special layout or have more stuff on the actual page where the fetching 
  //does not actually belong there, and it may have a Shopping-Panel component that contains a Shopping-Grid which could ocntain this stuff.
  //just taking a small shortcut.
  return (
    <html lang="en" className={`h-full antialiased`}>
      <MenuProvider>
      <body className="min-h-full flex flex-col">
        <nav>
          <Navbar/>
        </nav>
        <main className="h-screen">
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </main>
      </body>
      </MenuProvider>
    </html>
  );
}

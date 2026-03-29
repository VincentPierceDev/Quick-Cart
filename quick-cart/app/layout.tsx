import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/components/global/Loading";
import Navbar from "@/components/global/Navbar";


export const metadata: Metadata = {
  title: "Quick Cart",
  description: "Shop various products sourced around the globe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //simple app just throwing the suspense here so my server page can show loading
  //more complex app may have a special layout or have more stuff on the actual page where the fetching 
  //does not actually belong there and it may have a Shopping-Panel component that contains a Shopping-Grid.
  return (
    <html lang="en" className={`h-full antialiased`}>
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
    </html>
  );
}

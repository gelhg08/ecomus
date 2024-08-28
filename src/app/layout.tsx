// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import NotificationBar from "./components/notification-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecomus",
  description: "Este es un proyecto de aprendizaje de Next.js",
  keywords: ["Next.js", "React", "TypeScript"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <div className="relative"> 
        <div>
        <NotificationBar /> 
        </div>
<div>
<Header />
</div>

        </div>
        <main className="flex-grow pt-16"> 
          {children}
        </main>
        <footer className="bg-white text-black py-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}





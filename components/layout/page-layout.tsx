import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
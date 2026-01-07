import "/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-context";
import WavesBg from "@/components/ui/waves-bg";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fathima Fida - Portfolio",
  description: "Full Stack Developer portfolio showcasing projects and skills",
  keywords: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Waves Background */}
          <WavesBg />
          
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
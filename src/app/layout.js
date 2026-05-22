import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import NextThemeProvider from "@/provider/NextThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IdeaVault",
  description: "Startup idea sharing platform",
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} min-h-full flex flex-col bg-background text-foreground`} >
        <NextThemeProvider>
          <NavBar></NavBar>
          {/* bg-linear-to-b from-transparent via-base-200/10 to-transparent */}
          <main className="bg-base-200/20 backdrop-blur-sm">{children}</main>
        </NextThemeProvider>
        <Footer></Footer>
        <Toaster />
      </body>
    </html>
  );
}

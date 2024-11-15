import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { cn } from "@/lib/utils";
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Rene A Franco - Software Engineer Portfolio",
  description:
    "Portfolio of Rene A Franco, a Software Engineer specializing in Next.js and modern web technologies.",
  keywords: [
    "software engineering",
    "Next.js",
    "React",
    "portfolio",
    "Rene A Franco",
  ],
  authors: [{ name: "Rene A Franco" }],
  creator: "Rene A Franco",
  publisher: "Rene A Franco",
  openGraph: {
    title: "Rene A Franco - Software Engineer Portfolio",
    description:
      "Explore the projects and skills of Rene A Franco, an experienced Software Engineer.",
    url: "https://reneafranco.com",
    siteName: "Rene A Franco Portfolio",
    images: [
      {
        url: "https://reneafranco.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(JetBrainsMono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

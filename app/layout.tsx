import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200",
  "300", "400", "500", "600", "700", "800"], variable: '--font-jetbrainsMono'
 });

export const metadata: Metadata = {
  title: "Rene's Portfolio",
  description: "Rene A Franco Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={JetBrainsMono.variable}>  <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}

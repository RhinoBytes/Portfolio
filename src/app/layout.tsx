import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AdvancedThemeProvider } from "@/components/AdvancedThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: "Douglas Ross - Full Stack Developer Portfolio",
  description: "Frontend-focused full-stack developer specializing in React, Next.js, and modern web technologies. Building intuitive interfaces and scalable backend systems.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Frontend", "Backend"],
  authors: [{ name: "Douglas Ross" }],
  openGraph: {
    title: "Douglas Ross - Full Stack Developer",
    description: "Frontend-focused full-stack developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
        style={{
          backgroundColor: 'var(--color-background)',
          color: 'var(--color-text)',
        }}
      >
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          storageKey="portfolio-theme"
          disableTransitionOnChange={false}
        >
          <AdvancedThemeProvider>
            {children}
          </AdvancedThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

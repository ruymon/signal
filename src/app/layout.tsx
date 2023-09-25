import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import { TailwindIndicator } from "@/components/development/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { availableThemes } from "@/config/themes";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: [
    {
      path: "../assets/fonts/GuanabaraSans-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Thin-Italic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-ExtraLight.otf",
      weight: "20",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-ExtraLight-Italic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Light-Italic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Book-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Medium-Italic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Bold-Italic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-ExtraBold-Italic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../assets/fonts/GuanabaraSans-Black-Italic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-heading",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "Ruy Monteiro",
      url: "https://github.com/ruymon",
    },
  ],
  creator: "Ruy Monteiro",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@ruyymon",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          themes={availableThemes}
          attribute="class"
          defaultTheme="light-zinc"
          disableTransitionOnChange
          enableSystem={false}
        >
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}

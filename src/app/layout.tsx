import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nabiha Fatima Baking Studio | Custom Cakes",
  description: "Order beautiful custom cakes for birthdays, anniversaries, and special occasions. Handcrafted with love.",
  keywords: ["custom cakes", "birthday cakes", "anniversary cakes", "home bakery", "cake delivery"],
  authors: [{ name: "Nabiha Fatima Baking Studio" }],
  openGraph: {
    title: "Nabiha Fatima Baking Studio | Custom Cakes",
    description: "Order beautiful custom cakes for birthdays, anniversaries, and special occasions. Handcrafted with love.",
    type: "website",
    locale: "en_US",
    siteName: "Nabiha Fatima Baking Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabiha Fatima Baking Studio | Custom Cakes",
    description: "Order beautiful custom cakes for birthdays, anniversaries, and special occasions. Handcrafted with love.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}

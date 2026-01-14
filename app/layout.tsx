import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Michael Ani | Frontend Developer",
  description: "Portfolio of Michael Ani, a frontend developer specializing in React, Next.js, and modern web design. Connect with me on GitHub, LinkedIn, or email.",
  openGraph: {
    title: "Michael Ani | Frontend Developer",
    description: "Portfolio of Michael Ani, a frontend developer specializing in React, Next.js, and modern web design. Connect with me on GitHub, LinkedIn, or email.",
    url: "https://michaelch.netlify.app",
    siteName: "Michael Ani Portfolio",
    images: [
      {
        url: "https://michaelch.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Michael Ani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Ani | Frontend Developer",
    description: "Portfolio of Michael Ani, a frontend developer specializing in React, Next.js, and modern web design. Connect with me on GitHub, LinkedIn, or email.",
    site: "@mickey2143", // optional: your twitter handle
    creator: "@mickey2143",
    images: ["https://michaelch.netlify.app/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

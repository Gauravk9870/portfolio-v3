import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurav Kumar - Full Stack Developer",
  description:
    "Full Stack Developer proficient in React.js, Node.js, MongoDB, and more. Specializing in SEO-friendly, user-centric web interfaces and adept at backend integration. Versatile and passionate about innovation. Open to exciting opportunities in web development",
  keywords:
    "Full Stack Developer,React.js,Next.js,Node.js,Express,MongoDB,HTML,CSS,JavaScript,SEO-optimized,User-friendly,Dynamic web interfaces,Backend integration,External APIs,Chrome extensions,Game development,Versatile,Creativity,Web development,Software Engineer, gauravk9870, underpin services, ",
  openGraph: {
    title: "Gaurav Kumar - Full Stack Developer",
    description:
      "Full Stack Developer proficient in React.js, Node.js, MongoDB, and more. Specializing in SEO-friendly, user-centric web interfaces and adept at backend integration. Versatile and passionate about innovation. Open to exciting opportunities in web development",
    url: "https://gauravkumar.vercel.app/",
    type: "website",
    images: "https://gauravkumar.vercel.app/profile.png",
  },
  metadataBase: new URL("https://gauravkumar.vercel.app/"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} hide-scrollbar`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import plogo from './vercel.svg'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pudgy Bunnies",
  description: "",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <head>
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="./vercel.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

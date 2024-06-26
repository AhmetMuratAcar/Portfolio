import { Inter } from "next/font/google";
import "./globals.css";
import Favicon from "/public/images/favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Murat's Portfolio",
  description: "Portfolio of Ahmet Murat Acar",
  icons: [{ rel: 'icon', url: Favicon.src }]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

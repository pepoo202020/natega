import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "St. Abader Deakons Results",
  description:
    "generated with church of saint abader and ereny his sister in assiut, 1 term results",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

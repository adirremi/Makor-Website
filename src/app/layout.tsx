import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAKOR Energy Solutions",
  description:
    "MAKOR Energy Solutions LTD — Renewable energy construction and solar infrastructure.",
  icons: {
    icon: "/brand/mark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">{children}</div>
      </body>
    </html>
  );
}

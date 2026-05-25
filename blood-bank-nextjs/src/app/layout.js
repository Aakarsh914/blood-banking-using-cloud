import { Inter } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blood Bank Cloud",
  description: "A modern, cloud-based blood bank management system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          <ClientProviders>{children}</ClientProviders>
        </div>
      </body>
    </html>
  );
}

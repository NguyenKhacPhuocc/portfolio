import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-gray-900">
        <Header />
        <main className=" min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

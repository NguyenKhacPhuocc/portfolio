import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="relative text-gray-900">
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";
export default function RootLayout({children,}: Readonly<{  children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <header className="bg-blue-100 text-blue-900 my-2">
        BiThink | <Link href="/">Home</Link>
      </header>
      <body className="min-h-full flex flex-col">{children}</body>
      <footer className="bg-blue-100 text-blue-900 my-2">
        BiThink | <Link href="/">Home</Link>
      </footer>
    </html>
  );
}

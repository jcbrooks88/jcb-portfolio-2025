// components/Layout.tsx
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <Link href="/" className="text-xl font-bold">Jeffery Brooks</Link>
        <div className="space-x-4">
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-100 text-center p-4 text-sm text-gray-600">
        © {new Date().getFullYear()} Jeffery Brooks. All rights reserved.
      </footer>
    </div>
  );
}
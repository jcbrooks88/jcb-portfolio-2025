import Link from "next/link";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Layout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/certificate", label: "Certificate" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/underway", label: "Underway" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-grayDark">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-orange to-burgundy backdrop-blur-sm shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Brand */}
          <Link
            href="/"
            className="text-background text-2xl font-extrabold tracking-wide hover:text-white transition-colors"
          >
            Jeffery Brooks
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-background">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="group relative transition-colors hover:text-orange"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-burgundy text-white text-sm font-medium px-6 py-4 space-y-3 shadow-md transition-all duration-300 ${
          menuOpen ? "block mt-20" : "hidden"
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="block hover:text-orange transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 py-24 md:py-28 max-w-3xl mx-auto w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-accent text-grayDark text-center py-4 text-sm mt-auto shadow-inner">
        © {new Date().getFullYear()} Jeffery Brooks. All rights reserved.
      </footer>
    </div>
  );
}

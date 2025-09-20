"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/ninss_logo.png"
            alt="Nightingale Institute of Nursing Logo"
            className="h-10 w-10 object-cover rounded-full border"
          />
          <span className="text-lg md:text-xl font-bold text-gray-800">
            NINSS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 font-medium text-gray-700">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="hover:text-blue-600 transition"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/applyit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/applyit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition inline-block"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
